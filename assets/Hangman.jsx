import React, { useState, useEffect } from 'react';

const words = ['react', 'hangman', 'javascript', 'component', 'hooks'];

const getRandomWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};

const App = () => {
  const [word, setWord] = useState(getRandomWord);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const maxWrong = 6;

  const handleKeyPress = (e) => {
    const letter = e.key.toLowerCase();
    if (!/^[a-z]$/.test(letter)) return;

    if (!guessedLetters.includes(letter)) {
      setGuessedLetters((prev) => [...prev, letter]);
      if (!word.includes(letter)) {
        setWrongGuesses((prev) => prev + 1);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [guessedLetters, word]);

  const maskedWord = word
    .split('')
    .map((letter) => (guessedLetters.includes(letter) ? letter : '_'))
    .join(' ');

  const isWinner = word.split('').every((letter) => guessedLetters.includes(letter));
  const isLoser = wrongGuesses >= maxWrong;

  const resetGame = () => {
    setWord(getRandomWord());
    setGuessedLetters([]);
    setWrongGuesses(0);
  };

  return (
    <div style={styles.container}>
      <h1>Hangman Game</h1>
      <p>Guess the word:</p>
      <h2 style={styles.word}>{maskedWord}</h2>
      <p>Wrong guesses: {wrongGuesses} / {maxWrong}</p>
      <p>Guessed Letters: {guessedLetters.join(', ')}</p>

      {isWinner && <h3 style={{ color: 'green' }}>🎉 You won!</h3>}
      {isLoser && <h3 style={{ color: 'red' }}>💀 You lost! Word was: {word}</h3>}

      {(isWinner || isLoser) && <button onClick={resetGame}>Play Again</button>}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'sans-serif',
    textAlign: 'center',
    padding: '2rem',
  },
  word: {
    letterSpacing: '1rem',
    fontSize: '2rem',
  },
};

export default App;
