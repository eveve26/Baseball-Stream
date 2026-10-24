import './controling.css'
type ShowTimeProps = {
    showTime: boolean;
    setShowTime: (show: boolean) => void;
};

export function ShowTime({ showTime, setShowTime }: ShowTimeProps) {
    return (
        <div className="control-row">
            <div>
                <label>顯示時間:</label>
                <input type="checkbox" checked={showTime} onChange={(e) => setShowTime(e.target.checked)} className="control-input"/>
            </div>
        </div>
    );
}