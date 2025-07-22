import React, { useState } from 'react';

const App = () => {
  const [score, setScore] = useState(0);
  const [balls, setBalls] = useState(0);
  const [out, setOut] = useState(false);
  const [history, setHistory] = useState([]);

  const handleHit = () => {
    if (out) return;

    const run = Math.floor(Math.random() * 7); // 0–6
    setBalls(balls + 1);
    setHistory([...history, run]);

    if (run === 0) {
      setOut(true);
    } else {
      setScore(score + run);
    }
  };

  const handleRestart = () => {
    setScore(0);
    setBalls(0);
    setOut(false);
    setHistory([]);
  };

  return (
    <div style={styles.container}>
      <h1>🏏 Cricket Game</h1>
      <h2>{out ? "You're OUT!" : 'Keep Hitting!'}</h2>
      <p>Score: <strong>{score}</strong></p>
      <p>Balls Faced: <strong>{balls}</strong></p>
      <button onClick={handleHit} disabled={out} style={styles.button}>
        {out ? 'Game Over' : 'Hit 🔥'}
      </button>
      {out && (
        <button onClick={handleRestart} style={{ ...styles.button, background: 'green' }}>
          Restart Game
        </button>
      )}
      <h3>History:</h3>
      <div style={styles.history}>
        {history.map((run, index) => (
          <span key={index} style={styles.runBox}>
            {run}
          </span>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'sans-serif',
    textAlign: 'center',
    padding: '20px',
  },
  button: {
    padding: '12px 24px',
    margin: '10px',
    fontSize: '18px',
    cursor: 'pointer',
    background: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '6px'
  },
  history: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '10px',
    marginTop: '10px'
  },
  runBox: {
    width: '30px',
    height: '30px',
    lineHeight: '30px',
    background: '#eee',
    borderRadius: '4px',
    fontWeight: 'bold'
  }
};

export default App;
