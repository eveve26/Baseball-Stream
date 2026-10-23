import './controling.css'

export function ControlUsed({ used, setUsed, topOrBottom }: { used: number; setUsed: React.Dispatch<React.SetStateAction<number>>; topOrBottom: 'top' | 'bottom' }) {
    const label = topOrBottom === 'top' ? '客隊用球數' : '主隊用球數';

    return (
        <div className="control-row">
            <label>{label}</label>
            <button onClick={() => setUsed(Math.max(used - 1, 0))} className="control-button">
                -
            </button>
            <p>{used}</p>
            <button className="control-button" onClick={() => setUsed(used + 1)}>
                +
            </button>
            <button className="control-button" onClick={() => setUsed(0)}>
                歸零
            </button>
        </div>
    )
}