import './controling.css'

export function ShowHomeRun({ showHomeRun, setShowHomeRun }: { showHomeRun: boolean, setShowHomeRun: (value: boolean) => void }) {
    return (
        <div className="control-row">
            <div>
                <label>全壘打動畫:</label>
                <input type="checkbox" checked={showHomeRun} onChange={(e) => setShowHomeRun(e.target.checked)} className="control-input"/>
            </div>
        </div>
    );
}