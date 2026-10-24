import { useState, useEffect } from "react";

export function Time({ timecolor } : { timecolor: string }) {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
        setTime(new Date());
        }, 1000);

        return () => clearInterval(timerId);
    }, []);

    return (
        <span style={{ color: timecolor }}>
            {formatDateTime(time)}
        </span>
    );
}

function formatDateTime(now: Date) {
    return (now.getMonth() + 1) + "/" + (now.getDate()) + " " + now.getHours() + ":" + now.getMinutes().toString().padStart(2, '0');
}