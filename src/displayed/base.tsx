import "./base.css";

export function Base({ first, second, third, color1, color2, topOrBottom }: { first: boolean, second: boolean, third: boolean, color1: string, color2: string, topOrBottom: string }) {
    const color = topOrBottom === "top" ? color1 : color2;
    return (
        <div className="base-container">
            <div className="base-first-row">
                <Diamond loaded={second} color={color} />
            </div>
            <div className="base-second-row">
                <Diamond loaded={third} color={color} />
                <Diamond loaded={first} color={color} />     
            </div>


            
        </div>
    )
}

function Diamond({ loaded, color }: {loaded: boolean; color: string}) {
    const c = loaded ? color : "white";
    return (
        <div className="diamond" style={{ backgroundColor: c }}>
            <div className="base_number"></div>
        </div>
    )
}