import './circle.css'

export function FullCircle({ color }: { color: string }) {
    return (
        <div className="full-circle" style={{ backgroundColor: color }}></div>
    )
}

export function EmptyCircle() {
    return (
        <div className="empty-circle"></div>
    )
}