import { Batter, Pitcher } from './player'
import './lineup.css'
export function Lineup({ 
    away, home, 
    awayBatters, awayPitcher, 
    homeBatters, homePitcher, 
    awayCurrentBatOrder, homeCurrentBatOrder,
    color1, color2, 
    awayUsed, homeUsed }: { 
        away: string; home: string; 
        awayBatters: Batter[]; awayPitcher: Pitcher; 
        homeBatters: Batter[]; homePitcher: Pitcher; 
        awayCurrentBatOrder: number; homeCurrentBatOrder: number; 
        color1: string; color2: string;
        awayUsed: number; 
        homeUsed: number; 
    }) {

    awayBatters.sort((a, b) => a.batorder - b.batorder)
    homeBatters.sort((a, b) => a.batorder - b.batorder)

    return (
        <div className="lineup-table-container">
            <table className="lineup-table">
                <thead>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={3}>{away}</td>
                    </tr>

                    {awayBatters.map((player, index) => {
                        
                        return (
                            <tr key={index} style={awayCurrentBatOrder === player.batorder ? { backgroundColor: color1 } : {}}>
                                <td>{player.batorder}</td>
                                <td>{player.name}</td>
                                <td>{player.position}</td>
                            </tr>
                        )
                    })}
                    <tr>
                        <td></td>
                        <td>{awayPitcher.name}</td>
                        <td>P: {awayUsed}</td>
                    </tr>
                </tbody>
            </table>
            <table className="lineup-table">
                <thead>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={3}>{home}</td>
                    </tr>

                    {homeBatters.map((player, index) => {
                        
                        return (
                            <tr key={index} style={homeCurrentBatOrder === player.batorder ? { backgroundColor: color2 } : {}}>
                                <td>{player.batorder}</td>
                                <td>{player.name}</td>
                                <td>{player.position}</td>
                            </tr>
                        )
                    })}
                    <tr>
                        <td></td>
                        <td>{homePitcher.name}</td>
                        <td>P: {homeUsed}</td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}