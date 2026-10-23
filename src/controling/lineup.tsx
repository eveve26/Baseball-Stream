type ControlLineupProps = {
    batters: Batter[];
    pitcher: Pitcher;
    setBatters: React.Dispatch<React.SetStateAction<Batter[]>>;
    setPitcher: React.Dispatch<React.SetStateAction<Pitcher>>;
}

import './controling.css'
import { Batter, Pitcher } from '../displayed/player'

export function ControlLineup({ batters, pitcher, setBatters, setPitcher }: ControlLineupProps) {
    return (
        <div className="control-lineup-container">
            <h3 className="control-heading">投手</h3>
            <div className="batter-row">
                <input
                    className="control-input"
                    type="text"
                    value={pitcher.name}
                    onChange={(e) => {
                        const newPitcher = new Pitcher(e.target.value, pitcher.position);
                        setPitcher(newPitcher);
                    }}
                />
            </div>

            <h3 className="control-heading">打者</h3>
            {batters.map((player, index) => (
                <div key={index} className="batter-row">
                    <p className="control-row-batorder">{player.batorder}</p>
                    <input
                        className="control-input"
                        type="text"
                        value={player.name}
                        onChange={(e) => {
                            const newBatters = [...batters];
                            newBatters[index] = new Batter(e.target.value, player.position, player.batorder);
                            setBatters(newBatters);
                        }}
                    />
                    <input
                        className="control-input"
                        type="text"
                        value={player.position}
                        onChange={(e) => {
                            const newBatters = [...batters];
                            newBatters[index] = new Batter(player.name, e.target.value, player.batorder);
                            setBatters(newBatters);
                        }}
                    />
                </div>
            ))}
        </div>
    )
}