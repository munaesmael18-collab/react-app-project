function ColorPreview({ color }) {
  return (
    <div className="preview-container">
      {color ? (
        <>
          <div
            className="color-box"
            style={{ backgroundColor: color }}
          ></div>
                  <h3>
          Selected Color:{" "}
          <span style={{ color: color }}>
            {color}
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