import React, { useState } from 'react';

const fighters = [
  { name: 'Tyler Durden', emoji: '😈' },
  { name: 'The Narrator', emoji: '😐' }
];

const App = () => {
  const [rounds, setRounds] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  const fight = () => {
    if (gameOver) return;

    const winnerIndex = Math.floor(Math.random() * 2);
    const loserIndex = 1 - winnerIndex;
    const newRound = {
      round: rounds.length + 1,
      winner: fighters[winnerIndex],
      loser: fighters[loserIndex]
    };

    const updatedRounds = [...rounds, newRound];
    setRounds(updatedRounds);

    if (updatedRounds.length >= 5) {
      setGameOver(true);
    }
  };

  const restart = () => {
    setRounds([]);
    setGameOver(false);
  };

  return (
    <div style={styles.container}>
      <h1>🥊 Fight Club</h1>
      <p><em>The first rule of Fight Club is... you talk about Fight Club (in React)</em></p>

      <div style={styles.fighterRow}>
        {fighters.map(f => (
          <div key={f.name} style={styles.fighterCard}>
            <div style={styles.emoji}>{f.emoji}</div>
            <div>{f.name}</div>
          </div>
        ))}
      </div>

      <button onClick={fight} disabled={gameOver} style={styles.button}>
        {gameOver ? 'Fight Over' : 'Start Fight'}
      </button>

      {gameOver && (
        <button onClick={restart} style={{ ...styles.button, background: 'green' }}>
          Restart
        </button>
      )}

      <div style={styles.rounds}>
        {rounds.map((r, i) => (
          <div key={i} style={styles.round}>
            🥇 Round {r.round}: <strong>{r.winner.name}</strong> defeats {r.loser.name}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '30px',
    backgroundColor: '#1b1b1b',
    color: '#f8f8f8',
    minHeight: '100vh'
  },
  fighterRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    marginBottom: '20px'
  },
  fighterCard: {
    backgroundColor: '#292929',
    padding: '20px',
    borderRadius: '10px',
    width: '150px'
  },
  emoji: {
    fontSize: '50px',
    marginBottom: '10px'
  },
  button: {
    padding: '12px 24px',
    fontSize: '16px',
    marginTop: '10px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: '#e50914',
    color: 'white',
    transition: '0.3s'
  },
  rounds: {
    marginTop: '30px',
    textAlign: 'left',
    maxWidth: '400px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  round: {
    backgroundColor: '#333',
    padding: '10px',
    borderRadius: '6px',
    marginBottom: '10px'
  }
};

export default App;
