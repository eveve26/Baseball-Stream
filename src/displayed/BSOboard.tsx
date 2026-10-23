import { FullCircle, EmptyCircle } from '../displayed/circle'
import './BSOboard.css'

export function BSOboard({ BSO, color1, color2, topOrBottom }: { BSO: { B: number, S: number, O: number }, color1: string, color2: string, topOrBottom: string }) {

    // const color = topOrBottom === "top" ? color1 : color2;
    return (
        <div className="bso-container">
            <div className="bso-item">
                <span className="bso-label">B</span>
                <div className="bso-circles">{showCircle(BSO.B, 3, "green")}</div>
            </div>
            <div className="bso-item">
                <span className="bso-label">S</span>
                <div className="bso-circles">{showCircle(BSO.S, 2, "yellow")}</div>
            </div>
            <div className="bso-item">
                <span className="bso-label">O</span>
                <div className="bso-circles">{showCircle(BSO.O, 2, "red")}</div>
            </div>
        </div>
    )
}

function showCircle(count: number, max: number, color: string) {
    const circles = []
    for (let i = 0; i < max; i++) {
        if (i < count) {
            circles.push(<FullCircle key={i} color={color} />)
        } else {
            circles.push(<EmptyCircle key={i} />)
        }
    }
    return circles
}