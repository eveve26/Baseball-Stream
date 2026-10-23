import './controling.css'
type ControlColorProps = {
    color1: string;
    color2: string;
    bgcolor: string;
    textColor: string;
    setColor1: (color: string) => void;
    setColor2: (color: string) => void;
    setBgcolor: (color: string) => void;
    setTextColor: (color: string) => void;
    baseBorderColor: string;
    setBaseBorderColor: (color: string) => void;
    bigScoreColor: string;
    setBigScoreColor: (color: string) => void;
    BSOBorderColor: string;
    setBSOBorderColor: (color: string) => void;
    scoreBoardColor: string;
    setScoreBoardColor: (color: string) => void;
};

export function ControlColor ({ 
    color1, color2, bgcolor, textColor, setColor1, setColor2, setBgcolor, setTextColor, 
    baseBorderColor, setBaseBorderColor, 
    bigScoreColor, setBigScoreColor, BSOBorderColor, setBSOBorderColor, scoreBoardColor, setScoreBoardColor }: ControlColorProps) {
    return (
        <>
        <div className="control-row">
            <div>
                <label>客隊顏色:</label>
                <input type="color" value={color1} onChange={(e) => setColor1(e.target.value)} className="control-input"/>
            </div>
            <div>
                <label>主隊顏色:</label>
                <input type="color" value={color2} onChange={(e) => setColor2(e.target.value)} className="control-input"/>
            </div>
            <div>
                <label>背景顏色:</label>
                <input type="color" value={bgcolor} onChange={(e) => setBgcolor(e.target.value)} className="control-input"/>
            </div>
            <div>
                <label>打線顏色:</label>
                <input type="color" value={textColor} onChange={(e) => setTextColor(e.target.value)} className="control-input"/>
            </div>

        </div>
        <div className="control-row">
            <div>
                <label>壘框顏色:</label>
                <input type="color" value={baseBorderColor} onChange={(e) => setBaseBorderColor(e.target.value)} className="control-input"/>
            </div>
            <div>
                <label>大字顏色:</label>
                <input type="color" value={bigScoreColor} onChange={(e) => setBigScoreColor(e.target.value)} className="control-input"/>
            </div>
            <div>
                <label>圓框顏色:</label>
                <input type="color" value={BSOBorderColor} onChange={(e) => setBSOBorderColor(e.target.value)} className="control-input"/>
            </div>
            <div>
                <label>板板顏色:</label>
                <input type="color" value={scoreBoardColor} onChange={(e) => setScoreBoardColor(e.target.value)} className="control-input"/>
            </div>
        </div>
        </>

    );
}