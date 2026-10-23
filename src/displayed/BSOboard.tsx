import { FullCircle, EmptyCircle } from '../displayed/circle'
import './BSOboard.css'

export function BSOboard({ BSO, BSOBorderColor }: { BSO: { B: number, S: number, O: number }, BSOBorderColor: string }) {
    // const color = topOrBottom === "top" ? color1 : color2;
    return (
        <div className="bso-container">
            <div className="bso-item">
                <span className="bso-label">B</span>
                <div className="bso-circles">{showCircle(BSO.B, 3, "green", BSOBorderColor)}</div>
            </div>
            <div className="bso-item">
                <span className="bso-label">S</span>
                <div className="bso-circles">{showCircle(BSO.S, 2, "yellow", BSOBorderColor)}</div>
            </div>
            <div className="bso-item">
                <span className="bso-label">O</span>
                <div className="bso-circles">{showCircle(BSO.O, 2, "red", BSOBorderColor)}</div>
            </div>
        </div>
    )
}

function showCircle(count: number, max: number, color: string, BSOBorderColor: string) {
    const circles = []
    for (let i = 0; i < max; i++) {
        if (i < count) {
            circles.push(<FullCircle key={i} color={color} />)
        } else {
            circles.push(<EmptyCircle key={i} BSOBorderColor={BSOBorderColor} />)
        }
    }
    return circles
}