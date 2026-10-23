import './controling.css'


type ControlBaseProps = {
    firstBase: boolean,
    setFirstBase: (value: boolean) => void,
    secondBase: boolean,
    setSecondBase: (value: boolean) => void,
    thirdBase: boolean,
    setThirdBase: (value: boolean) => void,
}

export function ControlBase({ 
    firstBase, setFirstBase,
    secondBase, setSecondBase,
    thirdBase, setThirdBase
}: ControlBaseProps) {


    return (
        <div className="control-row">
            <div className="base-control">
                一壘
                <input className="control-checkbox"
                    type="checkbox" 
                    checked={firstBase} 
                    onChange={(e) => setFirstBase(e.target.checked)} 
                />
            </div>
            <div className="base-control">
                二壘
                <input className="control-checkbox"
                    type="checkbox" 
                    checked={secondBase} 
                    onChange={(e) => setSecondBase(e.target.checked)} 
                />
            </div>
            <div className="base-control">
                三壘
                <input className="control-checkbox"
                    type="checkbox" 
                    checked={thirdBase} 
                    onChange={(e) => setThirdBase(e.target.checked)} 
                />
            </div>
        </div>
    )
}