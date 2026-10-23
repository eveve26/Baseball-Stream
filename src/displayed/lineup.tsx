import { Batter, Pitcher } from './player'
import './lineup.css'
export function Lineup({ 
    away, home, 
    awayBatters, awayPitcher, 
    homeBatters, homePitcher, 
    awayCurrentBatOrder, homeCurrentBatOrder,
    color1, color2, textColor,
    awayUsed, homeUsed, showUsed}: { 
        away: string; home: string; 
        awayBatters: Batter[]; awayPitcher: Pitcher; 
        homeBatters: Batter[]; homePitcher: Pitcher; 
        awayCurrentBatOrder: number; homeCurrentBatOrder: number; 
        color1: string; color2: string; textColor: string; 
        awayUsed: number; 
        homeUsed: number; 
        showUsed: boolean;
    }) {

    awayBatters.sort((a, b) => a.batorder - b.batorder)
    homeBatters.sort((a, b) => a.batorder - b.batorder)

    return (
        <div className="lineup-table-container">
            <table className="lineup-table" style={{ border: `1px solid ${textColor}`, borderBottom: `1px solid ${textColor}` }}>
                <thead>
                </thead>
                <tbody>
                    <tr style={{ borderBottom: `1px solid ${textColor}` }}>
                        <td colSpan={3}>{away}</td>
                    </tr>

                    {awayBatters.map((player, index) => {
                        
                        return (
                            <tr key={index} style={ awayCurrentBatOrder === player.batorder ? { backgroundColor: color1, borderBottom: `1px solid ${textColor}`  } : { borderBottom: `1px solid ${textColor}` } } className="lineup-row">
                                <td >{player.batorder}</td>
                                <td>{player.name}</td>
                                <td>{player.position}</td>
                            </tr>
                        )
                    })}
                    <tr>
                        <td></td>
                        <td>{awayPitcher.name}</td>
                        <td>{showUsed ? `P: ${awayUsed}` : "P"}</td>
                    </tr>
                </tbody>
            </table>
            <table className="lineup-table" style={{ border: `1px solid ${textColor}`, borderBottom: `1px solid ${textColor}` }}>
                <thead>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={3} style={{ borderBottom: `1px solid ${textColor}` }}>{home}</td>
                    </tr>

                    {homeBatters.map((player, index) => {
                        
                        return (
                            <tr key={index} style={homeCurrentBatOrder === player.batorder ? { backgroundColor: color2, borderBottom: `1px solid ${textColor}` } : { borderBottom: `1px solid ${textColor}` }} className="lineup-row">
                                <td>{player.batorder}</td>
                                <td>{player.name}</td>
                                <td>{player.position}</td>
                            </tr>
                        )
                    })}
                    <tr>
                        <td></td>
                        <td>{homePitcher.name}</td>
                        <td>{showUsed ? `P: ${homeUsed}` : "P"}</td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}