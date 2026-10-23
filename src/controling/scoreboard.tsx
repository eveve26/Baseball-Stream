import type { Dispatch, SetStateAction } from 'react'
import './controling.css'
import { space } from './shared'

type ChangeAwayHits = {
    awayHits: number
    setAwayHits: Dispatch<SetStateAction<number>>
}

type ChangeHomeHits = {
    homeHits: number
    setHomeHits: Dispatch<SetStateAction<number>>
}

type ChangeInnings = {
    innings: number
    setInnings: Dispatch<SetStateAction<number>>
}

type ChangeAwayErrors = {
    awayErrors: number
    setAwayErrors: Dispatch<SetStateAction<number>>
}

type ChangeHomeErrors = {
    homeErrors: number
    setHomeErrors: Dispatch<SetStateAction<number>>
}

type ChangeInningScores = {
    inningScores: number[][]
    setInningScores: Dispatch<SetStateAction<number[][]>>
}

type ChangeCurrentInning = {
    currentInning: number
    setCurrentInning: Dispatch<SetStateAction<number>>
}

type ChangeTopOrBottom = {
    topOrBottom: string
    setTopOrBottom: Dispatch<SetStateAction<string>>
}


export function ControlScoreBoard(
    { 
        awayHits, setAwayHits, 
        homeHits, setHomeHits, 
        innings, setInnings, 
        awayErrors, setAwayErrors,
        homeErrors, setHomeErrors,
        inningScores, setInningScores,
        currentInning, setCurrentInning,
        topOrBottom, setTopOrBottom,
        away, home
    }: ChangeAwayHits & ChangeHomeHits & ChangeInnings & ChangeAwayErrors & ChangeHomeErrors & ChangeInningScores & ChangeCurrentInning & ChangeTopOrBottom & { away: string; home: string }) {
    return (
        <div className="control-container">
            <div className="control-row-container">{away}
                <ChangeAwayHits awayHits={awayHits} setAwayHits={setAwayHits} />
                <ChangeAwayErrors awayErrors={awayErrors} setAwayErrors={setAwayErrors} />
            </div>    
            <div className="control-row-container">{home}
                <ChangeHomeHits homeHits={homeHits} setHomeHits={setHomeHits} />
                <ChangeHomeErrors homeErrors={homeErrors} setHomeErrors={setHomeErrors} />
            </div> 

            <div className="control-row-container">當前半局
                <ChangeCurrentInning currentInning={currentInning} setCurrentInning={setCurrentInning} topOrBottom={topOrBottom} setTopOrBottom={setTopOrBottom} />
                <ChangeTopOrBottom topOrBottom={topOrBottom} setTopOrBottom={setTopOrBottom} /> 
            </div>
            <ChangeInningScores inningScores={inningScores} setInningScores={setInningScores} currentInning={currentInning} topOrBottom={topOrBottom} />
            <ChangeInnings innings={innings} setInnings={setInnings} />   
        </div>
    )
}

function ChangeAwayHits({ awayHits, setAwayHits }: ChangeAwayHits) {
    
    return (
        <div className="control-row">
            <p>H </p>
            <button onClick={() => setAwayHits(awayHits => Math.max(awayHits - 1, 0))} className="control-button">-</button>
            <p>{awayHits}</p>
            <button onClick={() => setAwayHits(awayHits => Math.max(awayHits + 1, 0))} className="control-button">+</button>
            {space}
        </div>
    )
}

function ChangeHomeHits({ homeHits, setHomeHits }: ChangeHomeHits) {
    
    return (
        <div className="control-row">
            <p>H </p>
            <button onClick={() => setHomeHits(homeHits => Math.max(homeHits - 1, 0))} className="control-button">-</button>
            <p>{homeHits}</p>
            <button onClick={() => setHomeHits(homeHits => Math.max(homeHits + 1, 0))} className="control-button">+</button>
            {space}
        </div>
    )
}

function ChangeInnings({ innings, setInnings }: ChangeInnings) {
    
    return (
        <div className="control-row">
            <p>總局數: </p>
            <button onClick={() => setInnings(innings => Math.max(innings - 1, 9))} className="control-button">-</button>
            <p>{innings}</p>
            <button onClick={() => setInnings(innings => Math.min(innings + 1, 18))} className="control-button">+</button>
        </div>
    )
}


function ChangeAwayErrors({ awayErrors, setAwayErrors }: ChangeAwayErrors) {
    
    return (
        <div className="control-row">
            <p>E </p>
            <button onClick={() => setAwayErrors(awayErrors => Math.max(awayErrors - 1, 0))} className="control-button">-</button>
            <p>{awayErrors}</p>
            <button onClick={() => setAwayErrors(awayErrors => Math.max(awayErrors + 1, 0))} className="control-button">+</button>
        </div>
    )
}

function ChangeHomeErrors({ homeErrors, setHomeErrors }: ChangeHomeErrors) {
    
    return (
        <div className="control-row">
            <p>E </p>
            <button onClick={() => setHomeErrors(homeErrors => Math.max(homeErrors - 1, 0))} className="control-button">-</button>
            <p>{homeErrors}</p>
            <button onClick={() => setHomeErrors(homeErrors => Math.max(homeErrors + 1, 0))} className="control-button">+</button>
        </div>
    )
}


function ChangeCurrentInning({ currentInning, setCurrentInning, setTopOrBottom }: ChangeCurrentInning & ChangeTopOrBottom) {  
    
    return (
        <div className="control-row">
            <button onClick={() => { setCurrentInning(currentInning => Math.max(currentInning - 1, 1)); setTopOrBottom("top"); }} className="control-button">-</button>
            <p>{currentInning}</p>
            <button onClick={() => { setCurrentInning(currentInning => Math.min(currentInning + 1, 18)); setTopOrBottom("top"); }} className="control-button">+</button>
        </div>
    )
}

function ChangeTopOrBottom({ topOrBottom, setTopOrBottom }: ChangeTopOrBottom) {
    const lable = topOrBottom === 'top' ? '上' : '下'
    return (
        <div className="control-row">
            <button onClick={() => setTopOrBottom(topOrBottom => topOrBottom === "top" ? "bottom" : "top")} className="control-button">🔄</button>
            <p>{lable}</p>
        </div>
    )
}

function ChangeInningScores({ inningScores, setInningScores, currentInning, topOrBottom }: ChangeInningScores & Pick<ChangeCurrentInning, 'currentInning'> & Pick<ChangeTopOrBottom, 'topOrBottom'>) {
    
    const teamIndex = topOrBottom === "top" ? 0 : 1;
    const newScores = [...inningScores];

    return (
        <div className="control-row">
            <p>當前半局得分: </p>

            <button onClick={() => {
                newScores[teamIndex][currentInning - 1] = Math.max(newScores[teamIndex][currentInning - 1] - 1, 0);
                setInningScores(newScores);
            }} className="control-button">-</button>
            
            <p>{inningScores[topOrBottom === "top" ? 0 : 1][currentInning - 1]}</p>
            
            <button onClick={() => {
                newScores[teamIndex][currentInning - 1] = Math.max(newScores[teamIndex][currentInning - 1] + 1, 0);
                setInningScores(newScores);
            }} className="control-button">+</button>
        </div>
    )
}