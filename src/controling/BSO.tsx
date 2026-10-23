import './controling.css'
import { space } from './shared'
type BSOProps = {
    BSO: { B: number, S: number, O: number },
    setBSO: React.Dispatch<React.SetStateAction<{ B: number, S: number, O: number }>>
}

export function ControlBSO({ BSO, setBSO }: BSOProps) {
    return (
        <>
        <div className="control-row">
            <p>B </p>
            <button onClick={() => setBSO({ ...BSO, B: Math.max(BSO.B - 1, 0) })} className="control-button">-</button>
            <p>{BSO.B}</p>
            <button onClick={() => setBSO({ ...BSO, B: Math.min(BSO.B + 1, 3) })} className="control-button">+</button>
            {space}
            <p>S </p>
            <button onClick={() => setBSO({ ...BSO, S: Math.max(BSO.S - 1, 0) })} className="control-button">-</button>
            <p>{BSO.S}</p>
            <button onClick={() => setBSO({ ...BSO, S: Math.min(BSO.S + 1, 2) })} className="control-button">+</button>
            {space}
            <p>O </p>
            <button onClick={() => setBSO({ ...BSO, O: Math.max(BSO.O - 1, 0) })} className="control-button">-</button>
            <p>{BSO.O}</p>
            <button onClick={() => setBSO({ ...BSO, O: Math.min(BSO.O + 1, 2) })} className="control-button">+</button>
            {space}
        </div>
        <div className="control-row">
            <button onClick={() => setBSO({ B: 0, S: 0, O: 0 })} className="control-button">BSO歸零</button>
        </div>
        
        </>
    )
}

