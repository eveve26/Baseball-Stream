import "./base.css";

export function Base({ first, second, third, color1, color2, topOrBottom }: { first: boolean, second: boolean, third: boolean, color1: string, color2: string, topOrBottom: string }) {
    const color = topOrBottom === "top" ? color1 : color2;
    return (
        <div className="base-container">
            <div className="base-first-row">
                <Diamond loaded={second} base="2" color={color} />
            </div>
            <div className="base-second-row">
                <Diamond loaded={third} base="3" color={color} />
                <Diamond loaded={first} base="1" color={color} />     
            </div>


            
        </div>
    )
}

function Diamond({ loaded, base, color }: {loaded: boolean; base: string; color: string}) {
    const c = loaded ? color : "white";
    return (
        <div className="diamond" style={{ backgroundColor: c }}>
            <div className="base_number"></div>
        </div>
    )
}