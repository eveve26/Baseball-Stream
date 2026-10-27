import { useState } from "react";


export function Login({ setLoginStatus }: { setLoginStatus: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async () => {
        setError("");
        // console.log("Logging in with", { username, password });

        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                setError("請確認帳號密碼");
                return;
            }

            setLoginStatus(true);
        } catch {
            setError("伺服器異常");
        }
            
        };

    return (
        <div>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
            {error && <p role="alert">{error}</p>}
        </div>
    );
}