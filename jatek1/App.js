
import React, { useState } from 'react';
import './App.css';

function App() {
  const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

  const [targetNumber, setTargetNumber] = useState(getRandomNumber());
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  const handleGuess = () => {
    const num = parseInt(guess);
    if (isNaN(num) || num < 1 || num > 100) {
      setMessage('Kérlek, 1 és 100 közötti számot adj meg!');
      return;
    }

    setGuesses([...guesses, num]);

    if (num === targetNumber) {
      setMessage(`Gratulálok! Eltaláltad a számot ${guesses.length + 1} próbálkozásból.`);
      setGameOver(true);
    } else if (num < targetNumber) {
      setMessage('Túl alacsony!');
    } else {
      setMessage('Túl magas!');
    }

    setGuess('');
  };

  const restartGame = () => {
    setTargetNumber(getRandomNumber());
    setGuess('');
    setMessage('');
    setGuesses([]);
    setGameOver(false);
  };

  return (
    <div className="App">
      <h1>Számkitalálós Játék</h1>
      {!gameOver ? (
        <>
          <input
            type="number"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            placeholder="Írj be egy számot 1 és 100 között"
          />
          <button onClick={handleGuess}>Tippelés</button>
          <p>{message}</p>
        </>
      ) : (
        <>
          <p>{message}</p>
          <button onClick={restartGame}>Új játék</button>
        </>
      )}
      <p>Próbálkozások: {guesses.join(', ')}</p>
    </div>
  );
}

export default App;
