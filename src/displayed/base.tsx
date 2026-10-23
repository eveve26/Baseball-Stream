import "./base.css";

export function Base({ first, second, third, color1, color2, topOrBottom, baseBorderColor }: 
    { first: boolean, second: boolean, third: boolean, color1: string, color2: string, topOrBottom: string, baseBorderColor: string }) {
    const color = topOrBottom === "top" ? color1 : color2;
    return (
        <div className="base-container">
            <div className="base-first-row">
                <Diamond loaded={second} color={color} baseBorderColor={baseBorderColor} />
            </div>
            <div className="base-second-row">
                <Diamond loaded={third} color={color} baseBorderColor={baseBorderColor} />
                <Diamond loaded={first} color={color} baseBorderColor={baseBorderColor} />     
            </div>


            
        </div>
    )
}

function Diamond({ loaded, color, baseBorderColor }: {loaded: boolean; color: string; baseBorderColor: string}) {
    const c = loaded ? color : "white";
    return (
        <div className="diamond" style={{ backgroundColor: c, border: `2px solid ${baseBorderColor}` }}>
            <div className="base_number"></div>
        </div>
    )
}