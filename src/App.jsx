import { useState } from "react";
import ColorPreview from "./components/ColorPreview";
import ColorButton from "./components/ColorButton";
function App() {
    const [selectedColor, setSelectedColor] = useState(null);
    const colors = [
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Purple",
];
  return (
    <div className="container">
      <h1> Color Palette Picker</h1>
      <p className="paragraph">Pick a color to preview it below</p>
      <p className="choose-color">Choose color: </p>
      <div className="button-container">
        {colors.map((color) => (
  <ColorButton
    key={color}
    color={color}
    onClick={() => setSelectedColor(color)}
    isSelected={selectedColor === color}
/>
))}
      </div>

      <div className="preview-section">
       <ColorPreview color={selectedColor} />
      </div>

      <button onClick={() => setSelectedColor(null)} className="reset-btn">
    ⟳ Reset
</button>
    </div>
  );
}

export default App;