import { useState } from "react";
import ColorPreview from "./components/ColorPreview";
import ColorButton from "./components/ColorButton";

function App() {
  const [selectedColor, setSelectedColor] = useState(null);
  const [customColor, setCustomColor] = useState("");
  const [error, setError] = useState("");


  const colors = [
    { name: "Red", value: "red" },
    { name: "Blue", value: "blue" },
    { name: "Green", value: "green" },
    { name: "Yellow", value: "gold" },
    { name: "Purple", value: "purple" },
    { name: "Orange", value: "orange" },
    { name: "Pink", value: "pink" },
  ];

  return (
    <div className="container">
      <h1>Color Palette Picker</h1>

      <p className="paragraph">
        Pick a color to preview it below
      </p>

      <p className="choose-color">
        Choose color:
      </p>

      <div className="button-container">
        {colors.map((color) => (
          <ColorButton
            key={color.name}
            color={color}
            onClick={() => {setSelectedColor(color);
            setError("");
            }}
            isSelected={selectedColor?.name === color.name}
          />
        ))}
      </div>

      <div className="custom-color">
  <input 
    type="text"
    placeholder="Enter a color"
    value={customColor}
    onChange={(e) => {setCustomColor(e.target.value);
    setError("");
    }}
  />

  <button 
    className="add-color"
    onClick={() => {
       if (customColor.trim() === "") {
            setError("Please enter a color first!");
            return;
          }

      setSelectedColor({
        name: customColor,
        value: customColor,
      });
       setError("");
    }}
  >
    Add Color
  </button>
  <div className="error-container">
  {error && <p className="error-message">{error}</p>}
</div>
</div>

      <div className="preview-section">
        <ColorPreview color={selectedColor} />
      </div>

      <button
        onClick={() => {setSelectedColor(null);
          setError("");
        }}
        className="reset-btn"
      >
        ⟳ Reset
      </button>
    </div>
  );
}

export default App;