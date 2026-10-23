import './scoreboard.css'

export function Scoreboard(
    { 
        away, 
        home, 
        awayHits, 
        homeHits, 
        innings, 
        awayRuns,
        homeRuns,
        awayErrors,
        homeErrors,
        inningScores,
        currentInning,
        topOrBottom,
        color1,
        color2,
        scoreBoardColor
    }: { away: string; 
        home: string, 
        awayHits: number; 
        homeHits: number; 
        innings: number, 
        awayRuns: number, 
        homeRuns: number, 
        awayErrors: number, 
        homeErrors: number, 
        inningScores: number[][],
        currentInning: number,
        topOrBottom: string,
        color1: string,
        color2: string,
        scoreBoardColor: string,
        }) {

    const inningHeaders = Array.from({ length: innings }).map((_, index) => (
        <th key={index}>{index + 1}</th>
    ))
    const color = topOrBottom === "top" ? color1 : color2;

    return (
        <div  className="board-container">
            <table className="scoreboard-table" style={{ color: scoreBoardColor }}>
                <thead>
                    <tr>
                        <th></th>
                        {inningHeaders}
                        <th>R</th>
                        <th>H</th>
                        <th>E</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{away}</td>
                        {Array.from({ length: innings }).map((_, index) => (
                            <td key={index} style={{ backgroundColor: index === currentInning - 1 && topOrBottom === "top" ? color : ""}}>
                                { index === currentInning - 1 && topOrBottom === "top"  && inningScores[0][index] == 0 ? 
                                "-" : index < currentInning ? (inningScores[0][index]) : "" }
                            </td>
                        ))}
                        <td>{awayRuns}</td>
                        <td>{awayHits}</td>
                        <td>{awayErrors}</td>
                    </tr>
                    <tr>
                        <td>{home}</td>
                        {Array.from({ length: innings }).map((_, index) => (
                            <td key={index} style={{ backgroundColor: index === currentInning - 1 && topOrBottom === "bottom" ? color : ""}}>
                                { index === currentInning - 1 && topOrBottom === "bottom" && inningScores[1][index] == 0 ?
                                "-" : index < currentInning -1 || (index === currentInning - 1 && topOrBottom === "bottom") ? (inningScores[1][index]) : "" }
                            </td>
                        ))}
                        <td>{homeRuns}</td>
                        <td>{homeHits}</td>
                        <td>{homeErrors}</td>
                    </tr>
                </tbody>

            </table>
        </div>
    )
}

