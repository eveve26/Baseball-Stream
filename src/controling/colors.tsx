import './controling.css'
type ControlColorProps = {
    color1: string;
    color2: string;
    setColor1: (color: string) => void;
    setColor2: (color: string) => void;
};

export function ControlColor ({ color1, color2, setColor1, setColor2 }: ControlColorProps) {
    return (
        <div className="control-row">
            <div>
                <label>客隊顏色:</label>
                <input type="color" value={color1} onChange={(e) => setColor1(e.target.value)} className="control-input"/>
            </div>
            <div>
                <label>主隊顏色:</label>
                <input type="color" value={color2} onChange={(e) => setColor2(e.target.value)} className="control-input"/>
            </div>
        </div>
    );
}