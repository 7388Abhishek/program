import React, { useState, useEffect, useRef } from 'react';

const App = () => {
  const boardSize = 10; // 10x10 grid
  const initialSnake = [[0, 0]];
  const [snake, setSnake] = useState(initialSnake);
  const [direction, setDirection] = useState([0, 1]); // Moving right
  const [food, setFood] = useState(generateFood(initialSnake));
  const [gameOver, setGameOver] = useState(false);
  const intervalRef = useRef(null);

  function generateFood(snake) {
    let newFood;
    do {
      newFood = [
        Math.floor(Math.random() * boardSize),
        Math.floor(Math.random() * boardSize),
      ];
    } while (snake.some(seg => seg[0] === newFood[0] && seg[1] === newFood[1]));
    return newFood;
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowUp':
          if (direction[0] !== 1) setDirection([-1, 0]);
          break;
        case 'ArrowDown':
          if (direction[0] !== -1) setDirection([1, 0]);
          break;
        case 'ArrowLeft':
          if (direction[1] !== 1) setDirection([0, -1]);
          break;
        case 'ArrowRight':
          if (direction[1] !== -1) setDirection([0, 1]);
          break;
        default:
          break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [direction]);

  useEffect(() => {
    if (gameOver) return;

    intervalRef.current = setInterval(() => {
      setSnake(prevSnake => {
        const newHead = [
          prevSnake[0][0] + direction[0],
          prevSnake[0][1] + direction[1],
        ];

        // Check collision
        if (
          newHead[0] < 0 || newHead[0] >= boardSize ||
          newHead[1] < 0 || newHead[1] >= boardSize ||
          prevSnake.some(seg => seg[0] === newHead[0] && seg[1] === newHead[1])
        ) {
          setGameOver(true);
          clearInterval(intervalRef.current);
          return prevSnake;
        }

        const newSnake = [newHead, ...prevSnake];
        if (newHead[0] === food[0] && newHead[1] === food[1]) {
          setFood(generateFood(newSnake));
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    }, 200);

    return () => clearInterval(intervalRef.current);
  }, [direction, food, gameOver]);

  const renderBoard = () => {
    const cells = [];
    for (let row = 0; row < boardSize; row++) {
      for (let col = 0; col < boardSize; col++) {
        const isSnake = snake.some(seg => seg[0] === row && seg[1] === col);
        const isHead = snake[0][0] === row && snake[0][1] === col;
        const isFood = food[0] === row && food[1] === col;

        cells.push(
          <div
            key={`${row}-${col}`}
            style={{
              width: 30,
              height: 30,
              backgroundColor: isHead ? 'green' : isSnake ? 'lime' : isFood ? 'red' : 'white',
              border: '1px solid #ccc',
              boxSizing: 'border-box'
            }}
          />
        );
      }
    }
    return cells;
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>🐍 Snake Game</h1>
      {gameOver ? <h2 style={{ color: 'red' }}>Game Over!</h2> : <p>Use Arrow Keys to Move</p>}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${boardSize}, 30px)`,
          justifyContent: 'center',
          margin: '0 auto',
        }}
      >
        {renderBoard()}
      </div>
      {gameOver && (
        <button
          onClick={() => {
            setSnake(initialSnake);
            setDirection([0, 1]);
            setFood(generateFood(initialSnake));
            setGameOver(false);
          }}
          style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}
        >
          Restart
        </button>
      )}
    </div>
  );
};

export default App;
