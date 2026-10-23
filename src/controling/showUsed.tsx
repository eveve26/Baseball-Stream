import './controling.css'

export function ShowUsed({ showUsed, setShowUsed }: { showUsed: boolean; setShowUsed: (value: boolean) => void }) {

    return (
        <div className="control-row">
            <label>顯示用球數:</label>
            <input type="checkbox" checked={showUsed} onChange={(e) => setShowUsed(e.target.checked)} className="control-input"/>
        </div>
    )
}