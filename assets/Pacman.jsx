import React, { useState, useEffect } from 'react';

const map = [
  ['#', '#', '#', '#', '#', '#', '#', '#'],
  ['#', '.', '.', '.', '#', '.', '.', '#'],
  ['#', '.', '#', '.', '.', '.', '#', '#'],
  ['#', '.', '#', 'P', '#', '.', '.', '#'],
  ['#', '.', '.', '.', '#', '.', '.', '#'],
  ['#', '#', '#', '#', '#', '#', '#', '#'],
];

function App() {
  const [gameMap, setGameMap] = useState(map);

  useEffect(() => {
    const handleKeyDown = (e) => {
      setGameMap((oldMap) => {
        const newMap = oldMap.map(row => [...row]);
        let pacmanX, pacmanY;

        for (let y = 0; y < oldMap.length; y++) {
          for (let x = 0; x < oldMap[y].length; x++) {
            if (oldMap[y][x] === 'P') {
              pacmanX = x;
              pacmanY = y;
            }
          }
        }

        const direction = {
          ArrowUp: [0, -1],
          ArrowDown: [0, 1],
          ArrowLeft: [-1, 0],
          ArrowRight: [1, 0],
        }[e.key];

        if (!direction) return oldMap;

        const [dx, dy] = direction;
        const newX = pacmanX + dx;
        const newY = pacmanY + dy;

        if (oldMap[newY] && oldMap[newY][newX] !== '#') {
          newMap[pacmanY][pacmanX] = '.';
          newMap[newY][newX] = 'P';
        }

        return newMap;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="game">
      {gameMap.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, cellIndex) => (
            <span key={cellIndex} className={`cell ${cell}`}>
              {cell === '#' ? '█' : cell === '.' ? '·' : '😋'}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
