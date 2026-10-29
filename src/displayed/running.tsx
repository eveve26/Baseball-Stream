
import { useState, useEffect } from 'react'

import frame1 from '../assets/Running/frame1.png'
import frame2 from '../assets/Running/frame2.png'
import frame3 from '../assets/Running/frame3.png'

const frames = [frame1, frame2, frame3];

export function Running() {
    const [frameIndex, setFrameIndex] = useState(0);

    useEffect(() => {
        const timer = window.setInterval(() => {
            setFrameIndex((current) => (current + 1) % frames.length);
        }, 400);

        return () => window.clearInterval(timer);
    }, []);

    return (
        <img
            src={frames[frameIndex]}
            alt="Running Animation"
            style={{ width: 94, height: 64, objectFit: "contain" }}
        />
    );
}