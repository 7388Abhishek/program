import React, { useState, useEffect } from 'react';

const generateSymbols = () => {
  const symbols = ['🍎', '🎩', '🌟', '🐱', '🍀', '🎲', '🚀', '💎', '🎯', '🧠'];
  const specialSymbol = symbols[Math.floor(Math.random() * symbols.length)];
  const symbolMap = {};

  for (let i = 0; i < 100; i++) {
    if (i % 9 === 0) {
      symbolMap[i] = specialSymbol;
    } else {
      symbolMap[i] = symbols[Math.floor(Math.random() * symbols.length)];
    }
  }

  return { symbolMap, specialSymbol };
};

const App = () => {
  const [symbolData, setSymbolData] = useState(generateSymbols());
  const [revealed, setRevealed] = useState(false);

  const handleReveal = () => {
    setRevealed(true);
  };

  const handleRestart = () => {
    setSymbolData(generateSymbols());
    setRevealed(false);
  };

  return (
    <div style={styles.container}>
      <h1>🧠 Mind Reader Game</h1>
      <p>1. Think of any two-digit number.</p>
      <p>2. Subtract the sum of its digits from the number.</p>
      <p>3. Find your number and remember the symbol.</p>
      <div style={styles.symbolGrid}>
        {Object.entries(symbolData.symbolMap).map(([num, sym]) => (
          <div key={num} style={styles.symbolItem}>
            <strong>{num}</strong>: {sym}
          </div>
        ))}
      </div>
      {!revealed ? (
        <button onClick={handleReveal} style={styles.button}>Reveal My Symbol</button>
      ) : (
        <>
          <h2>Your symbol is: <span style={styles.reveal}>{symbolData.specialSymbol}</span></h2>
          <button onClick={handleRestart} style={styles.button}>Play Again</button>
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'sans-serif',
    textAlign: 'center',
    padding: '20px'
  },
  symbolGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
    gap: '10px',
    marginTop: '20px',
    maxWidth: '600px',
    margin: '0 auto'
  },
  symbolItem: {
    fontSize: '18px'
  },
  button: {
    marginTop: '30px',
    padding: '10px 20px',
    fontSize: '18px',
    cursor: 'pointer'
  },
  reveal: {
    fontSize: '40px'
  }
};

export default App;
