import './bigScore.css'

export function BigScore({ away, home, awayRuns, homeRuns, currentInning, topOrBottom, bigScoreColor }: 
    { away: string; home: string; awayRuns: number; homeRuns: number; currentInning: number; topOrBottom: string; bigScoreColor: string }) {
    const lable = topOrBottom === 'top' ? '上' : '下'
    return (
        <div className="BigScore" style={{ color: bigScoreColor }}>
            <div id="big-team-names">{away} : {home}</div>
            <div id="big-team-runs">{awayRuns} : {homeRuns}</div>
            <div id="big-team-round">{currentInning}局{lable} </div>
        </div>
    )
}