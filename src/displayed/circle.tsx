import './circle.css'

export function FullCircle({ color }: { color: string }) {
    return (
        <div className="full-circle" style={{ backgroundColor: color }}></div>
    )
}

export function EmptyCircle({ BSOBorderColor }: { BSOBorderColor: string }) {
    return (
        <div className="empty-circle" style={{ border: `2px solid ${BSOBorderColor}` }}></div>
    )
}