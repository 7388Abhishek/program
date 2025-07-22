import React, { useState } from 'react';

const App = () => {
  const [dice, setDice] = useState(1);

  const rollDice = () => {
    const newRoll = Math.floor(Math.random() * 6) + 1;
    setDice(newRoll);
  };

  const diceEmoji = {
    1: '⚀',
    2: '⚁',
    3: '⚂',
    4: '⚃',
    5: '⚄',
    6: '⚅'
  };

  return (
    <div style={styles.container}>
      <h1>Dice Roll</h1>
      <div style={styles.dice}>{diceEmoji[dice]}</div>
      <button onClick={rollDice} style={styles.button}>Roll Dice</button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    fontFamily: 'sans-serif',
    marginTop: '50px'
  },
  dice: {
    fontSize: '100px',
    margin: '20px'
  },
  button: {
    fontSize: '20px',
    padding: '10px 20px',
    cursor: 'pointer'
  }
};

export default App;
