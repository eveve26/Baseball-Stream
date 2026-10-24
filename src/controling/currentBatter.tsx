import type { Batter } from "../displayed/player";
import "./controling.css"
type ControlCurrentBatterProps = {
    awayBatters: Batter[];
    homeBatters: Batter[];
    awayCurrentBatOrder: number;
    homeCurrentBatOrder: number;
    setAwayCurrentBatOrder: (batOrder: number) => void;
    setHomeCurrentBatOrder: (batOrder: number) => void;
    topOrBottom: 'top' | 'bottom';
    hintcolor: string;
};


export function ControlCurrentBatter({ awayBatters, homeBatters, awayCurrentBatOrder, homeCurrentBatOrder, setAwayCurrentBatOrder, setHomeCurrentBatOrder, topOrBottom, hintcolor }: ControlCurrentBatterProps) {
    return (
        <div>
            <div className="control-row"  style={ topOrBottom === "top" ? { backgroundColor: hintcolor } : {} }>
                <p>客隊打者</p>
                <select value={awayCurrentBatOrder} onChange={(e) => setAwayCurrentBatOrder(Number(e.target.value))} className="control-select">
                    {awayBatters.map((batter) => (
                        <option key={batter.name} value={batter.batorder} className="control-input">
                            {batter.batorder + " " + batter.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="control-row" style={ topOrBottom === "bottom" ? { backgroundColor: hintcolor } : {} }>
                <p>主隊打者</p>
                <select value={homeCurrentBatOrder} onChange={(e) => setHomeCurrentBatOrder(Number(e.target.value))} className="control-select">
                    {homeBatters.map((batter) => (
                        <option key={batter.name} value={batter.batorder} className="control-input">
                            {batter.batorder + " " + batter.name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}