import { useState, useEffect } from 'react'

import frame1 from '../assets/Winning/frame1.png'
import frame2 from '../assets/Winning/frame2.png'
import frame3 from '../assets/Winning/frame3.png'
import frame4 from '../assets/Winning/frame4.png'
import frame5 from '../assets/Winning/frame5.png'
import frame6 from '../assets/Winning/frame6.png'
import frame7 from '../assets/Winning/frame7.png'
import frame8 from '../assets/Winning/frame8.png'
import frame9 from '../assets/Winning/frame9.png'
import frame10 from '../assets/Winning/frame10.png'
import frame11 from '../assets/Winning/frame11.png'
import frame12 from '../assets/Winning/frame12.png'

const frames = [frame1, frame2, frame3, frame4, 
                frame1, frame2, frame3, frame4, 
                frame1, frame2, frame3, frame4, 
                frame1, frame2, frame3, frame4, 
                frame1, frame2, frame3, frame4, 
                frame1, frame2, frame3, frame4, 
                frame5, frame6, frame7, frame8, 
                frame9, frame10, frame11, frame12,];

export function Winning() {
    const [frameIndex, setFrameIndex] = useState(0);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        let cancelled = false;
        let timer: number | undefined;

        const preload = frames.map((f) => {
            return new Promise((resolve, reject) => {
                const img = new Image();

                img.onload = resolve;
                img.onerror = reject;
                img.src = f;
            });
        });

        Promise.all(preload)
            .then(() => {
                if (cancelled) return;

                setLoaded(true);

                timer = window.setInterval(() => {
                    setFrameIndex(
                        (current) => (current + 1) % frames.length
                    );
                }, 200);
            })
            .catch(() => {
                console.error("Failed to load animation frames.");
            });

        return () => {
            cancelled = true;
            window.clearInterval(timer);
        };
    }, []);

    return (
        <div style={{ width: 128, height: 128 }}>
            {loaded && (
                <img
                    src={frames[frameIndex]}
                    alt="Winning Animation"
                    style={{
                        width: 128,
                        height: 128,
                        objectFit: "contain",
                    }}
                />
            )}
        </div>
    );
}