import './controling.css'
type ControlTeamProps = {
    away: string;
    home: string;
    setAway: (team: string) => void;
    setHome: (team: string) => void;
};

export function ControlTeam({ away, home, setAway, setHome }: ControlTeamProps) {
    return (
        <div className="control-row">
            <label>
                客隊:
                <input type="text" value={away} onChange={(e) => setAway(e.target.value)} className="control-input"/>
            </label>
            <label>
                主隊:
                <input type="text" value={home} onChange={(e) => setHome(e.target.value)} className="control-input"/>
            </label>
        </div>
    )
}