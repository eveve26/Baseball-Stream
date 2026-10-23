import './controling.css'

export function ControlImage1({ image1, setImage1 }: { image1: string, setImage1: React.Dispatch<React.SetStateAction<string>> }) {
  return (
    <div className="control-row">
        <label>Image 1 path:</label>
        <input
            className="control-path-input"
            placeholder=".\images\image1.jpg"
            type="text"
            value={image1}
            onChange={(e) => setImage1(e.target.value)}
        />
    </div>
  )
}