import { useState, useEffect } from 'react'

import frame1 from '../assets/Dance1/frame1.png'
import frame2 from '../assets/Dance1/frame2.png'
import frame3 from '../assets/Dance1/frame3.png'
import frame4 from '../assets/Dance1/frame4.png'
import frame5 from '../assets/Dance1/frame3.png'
import frame6 from '../assets/Dance1/frame2.png'


const frames = [frame1, frame2, frame3, frame4, frame5, frame6];

export function Dance1() {
    const [frameIndex, setFrameIndex] = useState(0);

    useEffect(() => {
        const timer = window.setInterval(() => {
            setFrameIndex((current) => (current + 1) % frames.length);
        }, 200);

        return () => window.clearInterval(timer);
    }, []);

    return (
        <img
            src={frames[frameIndex]}
            alt="Dance1 Animation"
            style={{ width: 128, height: 128, objectFit: "contain" }}
        />
    );
}