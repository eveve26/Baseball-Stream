import './bigScore.css'

export function BigScore({ away, home, awayRuns, homeRuns, currentInning, topOrBottom }: { away: string; home: string; awayRuns: number; homeRuns: number; currentInning: number; topOrBottom: string }) {
    const lable = topOrBottom === 'top' ? '上' : '下'
    return (
        <div>
            <h2 className="BigScore">{away} : {home}</h2>
            <h1 className="BigScore">{awayRuns} : {homeRuns}</h1>
            <h3 className="BigScore">{currentInning}局{lable} </h3>
        </div>
    )
}