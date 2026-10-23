export function Reset() {

    return (
        <div className="control-row">
            <button className="control-button"
            onClick={() => {
            localStorage.clear()
            window.location.reload()
            }}>Reset</button>
        </div>
        
    )
}