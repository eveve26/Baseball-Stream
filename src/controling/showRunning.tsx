import './controling.css'

export function ShowRunning({ showRunning, setShowRunning }: { showRunning: boolean, setShowRunning: (value: boolean) => void }) {
    return (
        <div className="control-row">
            <div>
                <label>顯示跑步:</label>
                <input type="checkbox" checked={showRunning} onChange={(e) => setShowRunning(e.target.checked)} className="control-input"/>
            </div>
        </div>
    );
}