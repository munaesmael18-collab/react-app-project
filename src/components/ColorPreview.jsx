function ColorPreview({ color }) {
  return (
    <div className="preview-container">
      {color ? (
        <>
          <div
            className="color-box"
            style={{ backgroundColor: color.value }}
          ></div>
                  <h3> 
          Selected Color:{" "}
          <span style={{ color: color.value }}>
            {color.name}
          </span>
        </h3>
        </>
      ) : (
        <div className="empty-preview">
          <div className="palette-icon">🎨</div>
          <p>No color selected yet</p>
        </div>
      )}
    </div>
  );
}

export default ColorPreview;