function ColorButton({ color, onClick, isSelected }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color, 
      boxShadow: isSelected ? `0 0 0 3px white, 0 0 0 5px ${color}`
       : "none",
      }}
    >
      {color}
      {isSelected && <span className="checkmark">✓</span>}
    </button>
  );
}

export default ColorButton;