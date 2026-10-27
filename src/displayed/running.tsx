
import { useState, useEffect } from 'react'

import frame1 from '../assets/frame1.png'
import frame2 from '../assets/frame2.png'
import frame3 from '../assets/frame3.png'
import frame4 from '../assets/frame2.png'

const frames = [frame1, frame2, frame3, frame4];

export function Running() {
    const [frameIndex, setFrameIndex] = useState(0);

    useEffect(() => {
        const timer = window.setInterval(() => {
            setFrameIndex((current) => (current + 1) % frames.length);
        }, 500);

        return () => window.clearInterval(timer);
    }, []);

    return (
        <img
            src={frames[frameIndex]}
            alt="Running Animation"
            style={{ width: 64, height: 64, objectFit: "contain" }}
        />
    );
}