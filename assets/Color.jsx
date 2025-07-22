import React, { useState } from 'react';

function App() {
  const [color, setColor] = useState('#3498db');
  const [copied, setCopied] = useState(false);

  const generateColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    setColor(randomColor);
    setCopied(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(color);
    setCopied(true);
  };

  return (
    <div className="app" style={{ backgroundColor: color }}>
      <div className="container">
        <h1>🎨 Color Generator</h1>
        <div className="color-box">
          <span className="color-code">{color}</span>
        </div>
        <button onClick={generateColor}>Generate Color</button>
        <button onClick={copyToClipboard}>
          {copied ? 'Copied!' : 'Copy to Clipboard'}
        </button>
      </div>
    </div>
  );
}

export default App;
