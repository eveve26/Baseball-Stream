import './controling.css'

export function ShowWinning({ showWinning, setShowWinning }: { showWinning: boolean, setShowWinning: (value: boolean) => void }) {
    return (
        <div className="control-row">
            <div>
                <label>贏球動畫:</label>
                <input type="checkbox" checked={showWinning} onChange={(e) => setShowWinning(e.target.checked)} className="control-input"/>
            </div>
        </div>
    );
}