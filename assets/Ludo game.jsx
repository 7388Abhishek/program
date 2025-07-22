import React, { useState } from 'react';

const boardSize = 20;

function App() {
  const [dice, setDice] = useState(null);
  const [redPosition, setRedPosition] = useState(0);
  const [bluePosition, setBluePosition] = useState(0);
  const [turn, setTurn] = useState('Red');

  const rollDice = () => {
    const roll = Math.ceil(Math.random() * 6);
    setDice(roll);

    if (turn === 'Red') {
      setRedPosition(prev => Math.min(prev + roll, boardSize - 1));
      setTurn('Blue');
    } else {
      setBluePosition(prev => Math.min(prev + roll, boardSize - 1));
      setTurn('Red');
    }
  };

  const renderCell = (i) => {
    let content = '';
    if (i === redPosition) content += '🔴';
    if (i === bluePosition) content += '🔵';

    return (
      <div key={i} className="cell">
        {content || i}
      </div>
    );
  };

  return (
    <div className="ludo-app">
      <h1>🎲 Ludo Lite</h1>
      <div className="board">
        {[...Array(boardSize)].map((_, i) => renderCell(i))}
      </div>
      <div className="controls">
        <p>Turn: {turn}</p>
        <button onClick={rollDice}>Roll Dice</button>
        {dice && <p>Dice Rolled: {dice}</p>}
        {redPosition === boardSize - 1 && <p>🔴 Red Wins!</p>}
        {bluePosition === boardSize - 1 && <p>🔵 Blue Wins!</p>}
      </div>
    </div>
  );
}

export default App;
