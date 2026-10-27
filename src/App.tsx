import './App.css'
import { AllUseStates } from './allUseStates'

import { Scoreboard } from './displayed/scoreboard'
import { ControlScoreBoard } from './controling/scoreboard'
import { BigScore } from './displayed/bigScore'
import { Base } from './displayed/base'
import { ControlBase } from './controling/base'
import { Lineup } from './displayed/lineup'
import { ControlLineup } from './controling/lineup'
import { Reset } from './controling/reset'
import { ControlTeam } from './controling/team'
import { BSOboard } from './displayed/BSOboard'
import { ControlBSO } from './controling/BSO'
import { ControlColor } from './controling/colors'
import { ControlCurrentBatter } from './controling/currentBatter'
import { ControlUsed } from './controling/used'
// import { ControlImage1 } from './controling/image1'
import { ShowUsed } from './controling/showUsed'
import { Time } from './displayed/time'
import { ShowTime } from './controling/showTime'
import { Login } from './login/login'

function App() {
  const {
    loginStatus, setLoginStatus,
    away, setAway,
    home, setHome,
    innings, setInnings,
    awayHits, setAwayHits,
    homeHits, setHomeHits,
    awayErrors, setAwayErrors,
    homeErrors, setHomeErrors,
    currentInning, setCurrentInning,
    topOrBottom, setTopOrBottom,
    firstBase, setFirstBase,
    secondBase, setSecondBase,
    thirdBase, setThirdBase,
    inningScores, setInningScores,
    awayBatters, setAwayBatters,
    homeBatters, setHomeBatters,
    awayPitcher, setAwayPitcher,
    homePitcher, setHomePitcher,
    BSO, setBSO,
    awayCurrentBatOrder, setAwayCurrentBatOrder,
    homeCurrentBatOrder, setHomeCurrentBatOrder,
    color1, setColor1,
    color2, setColor2,
    bgcolor, setBgcolor,
    baseBorderColor, setBaseBorderColor,
    textColor, setTextColor,
    bigScoreColor, setBigScoreColor,
    scoreBoardColor, setScoreBoardColor,
    BSOBorderColor, setBSOBorderColor,
    timecolor, setTimecolor,
    hintcolor,
    awayUsed, setAwayUsed,
    homeUsed, setHomeUsed,
    showUsed, setShowUsed,
    showTime, setShowTime,
    // image1, setImage1,
  } = AllUseStates()

  const awayRuns = Array.from({ length: innings }).reduce<number>((sum, _, index) => sum + inningScores[0][index], 0)
  const homeRuns = Array.from({ length: innings }).reduce<number>((sum, _, index) => sum + inningScores[1][index], 0)

  return (
  <>

    {!loginStatus && <Login setLoginStatus={setLoginStatus} />}
    {loginStatus && (
    <div className="panels">
      <div className="panel" id="left-panel" style={{ backgroundColor: bgcolor, color: textColor }}>

          {/* <img src={image1} className="image1" alt=""/> */}

        <div className="grid-container-1">
          <div className="grid-item-1-1">
            <Lineup
              away={away}
              home={home}
              awayBatters={awayBatters}
              awayPitcher={awayPitcher} 
              homeBatters={homeBatters}
              homePitcher={homePitcher} 
              awayCurrentBatOrder={awayCurrentBatOrder}
              homeCurrentBatOrder={homeCurrentBatOrder}
              color1={color1}
              color2={color2}
              textColor={textColor}
              awayUsed={awayUsed}
              homeUsed={homeUsed}
              showUsed={showUsed}
            />
          </div>
          <div></div>
          <div className="grid-item-1-2">
            <BigScore
              away={away}
              home={home}
              awayRuns={awayRuns}
              homeRuns={homeRuns}
              currentInning={currentInning}
              topOrBottom={topOrBottom}
              bigScoreColor={bigScoreColor}
            />
          </div>
          
          <div></div><div></div><div></div><div></div>
          

          <div className="grid-item-1-3">
            <Base
              first={firstBase}
              second={secondBase}
              third={thirdBase}
              color1={color1}
              color2={color2}
              topOrBottom={topOrBottom}
              baseBorderColor={baseBorderColor}
            />
          </div>
          <div></div><div></div><div></div>
          <div className="grid-item-1-5">
            <BSOboard BSO={BSO} BSOBorderColor={BSOBorderColor} />
            {showTime ? <Time timecolor={timecolor} /> : null}
          </div>

          <div></div><div></div>

          <div></div><div></div>

          <div className="grid-item-1-4">
            <Scoreboard 
              away={away}
              home={home} 
              awayHits={awayHits} 
              homeHits={homeHits} 
              innings={innings} 
              awayRuns={awayRuns} 
              homeRuns={homeRuns}
              awayErrors={awayErrors}
              homeErrors={homeErrors}
              inningScores={inningScores}
              currentInning={currentInning}
              topOrBottom={topOrBottom}
              color1={color1}
              color2={color2}
              scoreBoardColor={scoreBoardColor}
            />    
          </div>
        </div>
            
        
        
      </div>

      <div className="panel">
        <ControlUsed used={awayUsed} setUsed={setAwayUsed} tob="top" topOrBottom={topOrBottom} hintcolor={hintcolor} />
        <ControlUsed used={homeUsed} setUsed={setHomeUsed} tob="bottom" topOrBottom={topOrBottom} hintcolor={hintcolor} />
        <ControlBSO BSO={BSO} setBSO={setBSO} />

        <ControlBase
          firstBase={firstBase}
          setFirstBase={setFirstBase}
          secondBase={secondBase}
          setSecondBase={setSecondBase}
          thirdBase={thirdBase}
          setThirdBase={setThirdBase}
        />
        <ControlCurrentBatter
          awayBatters={awayBatters}
          homeBatters={homeBatters}
          awayCurrentBatOrder={awayCurrentBatOrder}
          homeCurrentBatOrder={homeCurrentBatOrder}
          setAwayCurrentBatOrder={setAwayCurrentBatOrder}
          setHomeCurrentBatOrder={setHomeCurrentBatOrder}
          topOrBottom={topOrBottom}
          hintcolor={hintcolor}
        />

        <ControlScoreBoard 
          awayHits={awayHits} 
          setAwayHits={setAwayHits} 
          homeHits={homeHits} 
          setHomeHits={setHomeHits} 
          innings={innings} 
          setInnings={setInnings} 
          awayErrors = {awayErrors}
          setAwayErrors = {setAwayErrors}
          homeErrors = {homeErrors}
          setHomeErrors = {setHomeErrors}
          inningScores={inningScores}
          setInningScores={setInningScores}
          currentInning={currentInning}
          setCurrentInning={setCurrentInning}
          topOrBottom={topOrBottom}
          setTopOrBottom={setTopOrBottom}
          away={away}
          home={home}
          hintcolor={hintcolor}
        />


        
        <div className="control-lineup-container">
          <h2 className="control-heading">{away}</h2>
          <ControlLineup
            batters={awayBatters}
            pitcher={awayPitcher}
            setBatters={setAwayBatters}
            setPitcher={setAwayPitcher}
          />
          <h2 className="control-heading">{home}</h2>
          <ControlLineup
            batters={homeBatters}
            pitcher={homePitcher}
            setBatters={setHomeBatters}
            setPitcher={setHomePitcher}
          />
        </div>

        <ControlTeam
          away={away}
          home={home}
          setAway={setAway}
          setHome={setHome}
        />
        <ShowUsed showUsed={showUsed} setShowUsed={setShowUsed}/>
        <ShowTime showTime={showTime} setShowTime={setShowTime}/>
        <ControlColor
          color1={color1}
          color2={color2}
          bgcolor={bgcolor}
          textColor={textColor}
          setColor1={setColor1}
          setColor2={setColor2}
          setBgcolor={setBgcolor}
          setTextColor={setTextColor}
          baseBorderColor={baseBorderColor}
          setBaseBorderColor={setBaseBorderColor}
          bigScoreColor={bigScoreColor}
          setBigScoreColor={setBigScoreColor}
          BSOBorderColor={BSOBorderColor}
          setBSOBorderColor={setBSOBorderColor}
          scoreBoardColor={scoreBoardColor}
          setScoreBoardColor={setScoreBoardColor}
          timecolor={timecolor}
          setTimecolor={setTimecolor}
        />

        {/* <ControlImage1 image1={image1} setImage1={setImage1}/> */}

        <Reset />

      </div>
    </div>
      
    )}
  </>
  )
}

export default App
