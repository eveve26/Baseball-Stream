import { useEffect, useState } from 'react'
import './App.css'
import { Batter } from './displayed/player'

import { Scoreboard } from './displayed/scoreboard'
import { ControlScoreBoard } from './controling/scoreboard'
import { BigScore } from './displayed/bigScore'
import { scores, batters, pitcher } from './displayed/startstate'
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
import { ControlImage1 } from './controling/image1'
import { ShowUsed } from './controling/showUsed'

function App() {
  const [away, setAway] = useState(() => {
    const saved = localStorage.getItem('away')
    return saved ? JSON.parse(saved) : "G"
  })
  const [home, setHome] = useState(() => {
    const saved = localStorage.getItem('home')
    return saved ? JSON.parse(saved) : "L"
  })
  const [innings, setInnings] = useState(() => {
    const saved = localStorage.getItem('innings')
    return saved ? JSON.parse(saved) : 9
  })
  const [inningScores, setInningScores] = useState(() => {
    const saved = localStorage.getItem('inningScores')
    return saved ? JSON.parse(saved) : scores
  })

  const [awayHits, setAwayHits] = useState(() => {
    const saved = localStorage.getItem('awayHits')
    return saved ? JSON.parse(saved) : 0
  })
  const [homeHits, setHomeHits] = useState(() => {
    const saved = localStorage.getItem('homeHits')
    return saved ? JSON.parse(saved) : 0
  })
  const awayRuns = Array.from({ length: innings }).reduce<number>((sum, _, index) => sum + inningScores[0][index], 0)
  const homeRuns = Array.from({ length: innings }).reduce<number>((sum, _, index) => sum + inningScores[1][index], 0)
  const [awayErrors, setAwayErrors] = useState(() => {
    const saved = localStorage.getItem('awayErrors')
    return saved ? JSON.parse(saved) : 0
  })
  const [homeErrors, setHomeErrors] = useState(() => {
    const saved = localStorage.getItem('homeErrors')
    return saved ? JSON.parse(saved) : 0
  })
  const [currentInning, setCurrentInning] = useState(() => {
    const saved = localStorage.getItem('currentInning')
    return saved ? JSON.parse(saved) : 1
  })
  const [topOrBottom, setTopOrBottom] = useState(() => {
    const saved = localStorage.getItem('topOrBottom')
    return saved ? JSON.parse(saved) : "top"
  })
  const [firstBase, setFirstBase] = useState(() => {
    const saved = localStorage.getItem('firstBase')
    return saved ? JSON.parse(saved) : false
  })
  const [secondBase, setSecondBase] = useState(() => {
    const saved = localStorage.getItem('secondBase')
    return saved ? JSON.parse(saved) : false
  })
  const [thirdBase, setThirdBase] = useState(() => {
    const saved = localStorage.getItem('thirdBase')
    return saved ? JSON.parse(saved) : false
  })
  const [awayBatters, setAwayBatters] = useState<Batter[]>(() => {
    const saved = localStorage.getItem('awayBatters')
    return saved ? JSON.parse(saved) : batters
  })
  const [homeBatters, setHomeBatters] = useState<Batter[]>(() => {
    const saved = localStorage.getItem('homeBatters')
    return saved ? JSON.parse(saved) : batters
  })
  const [awayPitcher, setAwayPitcher] = useState(() => {
    const saved = localStorage.getItem('awayPitcher')
    return saved ? JSON.parse(saved) : pitcher
  })
  const [homePitcher, setHomePitcher] = useState(() => {
    const saved = localStorage.getItem('homePitcher')
    return saved ? JSON.parse(saved) : pitcher
  })
  const [BSO, setBSO] = useState(() => {
    const saved = localStorage.getItem('BSO')
    return saved ? JSON.parse(saved) : { B: 0, S: 0, O: 0 }
  })
  const [awayCurrentBatOrder, setAwayCurrentBatOrder] = useState(() => {
    const saved = localStorage.getItem('awayCurrentBatOrder')
    return saved ? JSON.parse(saved) : 1
  })
  const [homeCurrentBatOrder, setHomeCurrentBatOrder] = useState(() => {
    const saved = localStorage.getItem('homeCurrentBatOrder')
    return saved ? JSON.parse(saved) : 1
  })
  const [color1, setColor1] = useState(() => {
    const saved = localStorage.getItem('color1')
    return saved ? JSON.parse(saved) : "rgb(255, 192, 203)"
  })
  const [color2, setColor2] = useState(() => {
    const saved = localStorage.getItem('color2')
    return saved ? JSON.parse(saved) : "rgb(255, 140, 0)"
  })
  const [bgcolor, setBgcolor] = useState(() => {
    const saved = localStorage.getItem('bgcolor')
    return saved ? JSON.parse(saved) : "rgb(51, 41, 37)"
  })
  const [baseBorderColor, setBaseBorderColor] = useState(() => {
    const saved = localStorage.getItem('baseBorderColor')
    return saved ? JSON.parse(saved) : "white"
  })
  const [textColor, setTextColor] = useState(() => {
    const saved = localStorage.getItem('textColor')
    return saved ? JSON.parse(saved) : "white"
  })
  const [bigScoreColor, setBigScoreColor] = useState(() => {
    const saved = localStorage.getItem('bigScoreColor')
    return saved ? JSON.parse(saved) : "white"
  })
  const [scoreBoardColor, setScoreBoardColor] = useState(() => {
    const saved = localStorage.getItem('scoreBoardColor')
    return saved ? JSON.parse(saved) : "white"
  })
  const [BSOBorderColor, setBSOBorderColor] = useState(() => {
    const saved = localStorage.getItem('BSOBorderColor')
    return saved ? JSON.parse(saved) : "white"
  })
  const hintcolor = "rgb(216, 216, 216)";
  const [awayUsed, setAwayUsed] = useState(() => {
    const saved = localStorage.getItem('awayUsed')
    return saved ? JSON.parse(saved) : 0
  })
  const [homeUsed, setHomeUsed] = useState(() => {
    const saved = localStorage.getItem('homeUsed')
    return saved ? JSON.parse(saved) : 0
  })
  const [showUsed, setShowUsed] = useState(() => {
    const saved = localStorage.getItem('showUsed')
    return saved ? JSON.parse(saved) : true
  })
  const [image1, setImage1] = useState(() => {
    const saved = localStorage.getItem('image1')
    return saved ? JSON.parse(saved) : ".\\images\\image1.jpg"
  })

  useEffect(() => {
    localStorage.setItem('away', JSON.stringify(away))
  }, [away])
  useEffect(() => {
    localStorage.setItem('home', JSON.stringify(home))
  }, [home])
  useEffect(() => {
    localStorage.setItem('innings', JSON.stringify(innings))
  }, [innings])
  useEffect(() => {
    localStorage.setItem('awayHits', JSON.stringify(awayHits))
  }, [awayHits])
  useEffect(() => {
    localStorage.setItem('homeHits', JSON.stringify(homeHits))
  }, [homeHits])
  useEffect(() => {
    localStorage.setItem('awayErrors', JSON.stringify(awayErrors))
  }, [awayErrors])
  useEffect(() => {
    localStorage.setItem('homeErrors', JSON.stringify(homeErrors))
  }, [homeErrors])
  useEffect(() => {
    localStorage.setItem('currentInning', JSON.stringify(currentInning))
  }, [currentInning])
  useEffect(() => {
    localStorage.setItem('topOrBottom', JSON.stringify(topOrBottom))
  }, [topOrBottom])
  useEffect(() => {
    localStorage.setItem('firstBase', JSON.stringify(firstBase))
  }, [firstBase])
  useEffect(() => {
    localStorage.setItem('secondBase', JSON.stringify(secondBase))
  }, [secondBase])
  useEffect(() => {
    localStorage.setItem('thirdBase', JSON.stringify(thirdBase))
  }, [thirdBase])
  useEffect(() => {
    localStorage.setItem('inningScores', JSON.stringify(inningScores))
  }, [inningScores])
  useEffect(() => {
    localStorage.setItem('awayBatters', JSON.stringify(awayBatters))
  }, [awayBatters])

  useEffect(() => {
    localStorage.setItem('homeBatters', JSON.stringify(homeBatters))
  }, [homeBatters])
  useEffect(() => {
    localStorage.setItem('awayPitcher', JSON.stringify(awayPitcher))
  }, [awayPitcher])

  useEffect(() => {
    localStorage.setItem('homePitcher', JSON.stringify(homePitcher))
  }, [homePitcher])

  useEffect(() => {
    localStorage.setItem('BSO', JSON.stringify(BSO))
  }, [BSO])
  useEffect(() => {
    localStorage.setItem('awayCurrentBatOrder', JSON.stringify(awayCurrentBatOrder))
  }, [awayCurrentBatOrder])
  useEffect(() => {
    localStorage.setItem('homeCurrentBatOrder', JSON.stringify(homeCurrentBatOrder))
  }, [homeCurrentBatOrder])
  useEffect(() => {
    localStorage.setItem('color1', JSON.stringify(color1))
  }, [color1])
  useEffect(() => {
    localStorage.setItem('color2', JSON.stringify(color2))
  }, [color2])
  useEffect(() => {
    localStorage.setItem('bgcolor', JSON.stringify(bgcolor))
  }, [bgcolor])
  useEffect(() => {
    localStorage.setItem('textColor', JSON.stringify(textColor))
  }, [textColor])
  useEffect(() => {
    localStorage.setItem('bigScoreColor', JSON.stringify(bigScoreColor))
  }, [bigScoreColor])
  useEffect(() => {
    localStorage.setItem('BSOBorderColor', JSON.stringify(BSOBorderColor))
  }, [BSOBorderColor])
  useEffect(() => {
    localStorage.setItem('scoreBoardColor', JSON.stringify(scoreBoardColor))
  }, [scoreBoardColor])
  useEffect(() => {
    localStorage.setItem('baseBorderColor', JSON.stringify(baseBorderColor))
  }, [baseBorderColor])
  useEffect(() => {
    localStorage.setItem('awayUsed', JSON.stringify(awayUsed))
  }, [awayUsed])
  useEffect(() => {
    localStorage.setItem('homeUsed', JSON.stringify(homeUsed))
  }, [homeUsed])
  useEffect(() => {
    localStorage.setItem('image1', JSON.stringify(image1))
  }, [image1])

  return (
    <>


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
          
          <div></div><div></div><div></div>
          

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
          <div></div><div></div><div></div><div></div>
          <div>
            <BSOboard BSO={BSO} BSOBorderColor={BSOBorderColor} />
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
        />

        {/* <ControlImage1 image1={image1} setImage1={setImage1}/> */}

        <Reset />

      </div>
    </div>
      
      
        </>
  )
}

export default App
