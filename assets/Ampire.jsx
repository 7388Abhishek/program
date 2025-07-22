import React from 'react';

const App = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🧛 Welcome to Ampire</h1>
      <p style={styles.tagline}>A dark, elegant platform that rises with the night.</p>
      <button style={styles.button}>Enter the Empire</button>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: `'Cinzel', serif`,
    height: '100vh',
    background: 'linear-gradient(to bottom, #0d0d0d, #1a1a1a)',
    color: '#f8f8f2',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textShadow: '0 0 5px #ff0040',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '10px',
    color: '#ff0040',
  },
  tagline: {
    fontSize: '1.2rem',
    marginBottom: '20px',
    color: '#e0e0e0',
  },
  button: {
    padding: '12px 24px',
    backgroundColor: '#ff0040',
    border: 'none',
    borderRadius: '4px',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
    transition: '0.3s',
  }
};

export default App;
