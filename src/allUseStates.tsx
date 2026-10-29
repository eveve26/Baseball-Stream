import { useState, useEffect } from "react";
import { Batter } from './displayed/player'
import { scores, batters, pitcher } from './displayed/startstate'

export function AllUseStates() {
    const [loginStatus, setLoginStatus] = useState(false);
    const [checkingLogin, setCheckingLogin] = useState(true);
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
    const [timecolor, setTimecolor] = useState(() => {
    const saved = localStorage.getItem('timecolor')
    return saved ? JSON.parse(saved) : "black"
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
    const [showTime, setShowTime] = useState(() => {
    const saved = localStorage.getItem('showTime')
    return saved ? JSON.parse(saved) : true
    })
    const [showRunning, setShowRunning] = useState(() => {
    const saved = localStorage.getItem('showRunning')
    return saved ? JSON.parse(saved) : false
    })
    const [showHomeRun, setShowHomeRun] = useState(() => {
    const saved = localStorage.getItem('showHomeRun')
    return saved ? JSON.parse(saved) : false
    })
    // const [image1, setImage1] = useState(() => {
    //   const saved = localStorage.getItem('image1')
    //   return saved ? JSON.parse(saved) : ".\\images\\image1.jpg"
    // })

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
        localStorage.setItem('timecolor', JSON.stringify(timecolor))
    }, [timecolor])
    useEffect(() => {
        localStorage.setItem('awayUsed', JSON.stringify(awayUsed))
    }, [awayUsed])
    useEffect(() => {
        localStorage.setItem('homeUsed', JSON.stringify(homeUsed))
    }, [homeUsed])
    useEffect(() => {
        localStorage.setItem('showTime', JSON.stringify(showTime))
    }, [showTime])
    useEffect(() => {
    async function checkLogin() {
        try {
            const response = await fetch(
                "https://baseball-stream.onrender.com/api/auth/me",
                // "http://localhost:3000/api/auth/me",
                { credentials: "include" }
            );

            setLoginStatus(response.ok);
        } catch {
            setLoginStatus(false);
        } finally {
            setCheckingLogin(false);
        }
    }

        checkLogin();
    }, []);
    useEffect(() => {
        localStorage.setItem('showRunning', JSON.stringify(showRunning))
    }, [showRunning])
    useEffect(() => {
        localStorage.setItem('showRunning', JSON.stringify(showHomeRun))
    }, [showHomeRun])
    // useEffect(() => {
    //   localStorage.setItem('image1', JSON.stringify(image1))
    // }, [image1])

    return {
    loginStatus, setLoginStatus,
    checkingLogin, setCheckingLogin,
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
    showRunning, setShowRunning,
    showHomeRun, setShowHomeRun,
    // image1, setImage1,
    }
}