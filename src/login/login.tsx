import { useState } from "react";
import './login.css'

export function Login({ setLoginStatus }: { setLoginStatus: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async () => {
        setError("");
        // console.log("Logging in with", { username, password });

        try {
            const response = await fetch("https://baseball-stream.onrender.com/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(`${response.status}: ${data.message || "登入失敗"}`);
                return;
            }

            setLoginStatus(true);
        } catch {
            setError("伺服器異常");
        }
            
        };

    return (
        <div className="login-container">
            <input className="login-input"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input className="login-input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin} className="login-button">Login</button>
            {error && <p role="alert">{error}</p>}
        </div>
    );
}