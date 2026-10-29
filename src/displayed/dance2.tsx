import { useState, useEffect } from 'react'

import frame1 from '../assets/Dance2/frame1.png'
import frame2 from '../assets/Dance2/frame2.png'
import frame3 from '../assets/Dance2/frame3.png'
import frame4 from '../assets/Dance2/frame4.png'

const frames = [frame1, frame2, frame3, frame4, frame3, frame2];

export function Dance2() {
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
                    alt="Dance2 Animation"
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