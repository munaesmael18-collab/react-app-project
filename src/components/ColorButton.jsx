function ColorButton({ color, onClick, isSelected }) {
  return (
    <button
      onClick={onClick}
      className={isSelected ? "selected" : ""}
      style={{
        backgroundColor: color.value,

        boxShadow: isSelected
          ? `0 0 0 3px white, 0 0 0 5px ${color.value}`
          : "none",
      }}
    >
      {color.name}

      {isSelected && (
        <span className="checkmark">✓</span>
      )}
    </button>
  );
}

export default ColorButton;