import './controling.css'

export function ControlUsed({ used, setUsed, tob, topOrBottom, hintcolor }: { used: number; setUsed: React.Dispatch<React.SetStateAction<number>>; tob: 'top' | 'bottom'; topOrBottom?: 'top' | 'bottom'; hintcolor: string; }) {
    const label = tob === 'top' ? '客隊用球數' : '主隊用球數';
    
    return (
        <div className="control-row" style={ topOrBottom === tob ? {} : { backgroundColor: hintcolor }}>
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