import React, { useState } from 'react';
import './App.css';

const choices = ['Kő', 'Papír', 'Olló'];

function App() {
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');

  const [score, setScore] = useState({
    wins: 0,
    losses: 0,
    ties: 0,
  });

  const handleClick = (choice) => {
    const compChoice = choices[Math.floor(Math.random() * choices.length)];
    setUserChoice(choice);
    setComputerChoice(compChoice);

    const outcome = getResult(choice, compChoice);
    setResult(outcome);

    if (outcome === 'Nyertél! 🎉') {
      setScore(prev => ({ ...prev, wins: prev.wins + 1 }));
    } else if (outcome === 'Vesztettél! 😢') {
      setScore(prev => ({ ...prev, losses: prev.losses + 1 }));
    } else {
      setScore(prev => ({ ...prev, ties: prev.ties + 1 }));
    }
  };

  const getResult = (user, computer) => {
    if (user === computer) return "Döntetlen";
    if (
      (user === 'Kő' && computer === 'Olló') ||
      (user === 'Papír' && computer === 'Kő') ||
      (user === 'Olló' && computer === 'Papír')
    ) {
      return 'Nyertél! 🎉';
    } else {
      return 'Vesztettél! 😢';
    }
  };

  const resetGame = () => {
    setUserChoice('');
    setComputerChoice('');
    setResult('');
    setScore({ wins: 0, losses: 0, ties: 0 });
  };

  return (
    <div className="App">
      <h1>Kő-Papír-Olló</h1>

      <div className="scoreboard">
        <p>Nyert körök: {score.wins}</p>
        <p>Vesztett körök: {score.losses}</p>
        <p>Döntetlen körök: {score.ties}</p>
      </div>

      <div className="buttons">
        {choices.map((choice) => (
          <button key={choice} onClick={() => handleClick(choice)}>
            {choice}
          </button>
        ))}
      </div>

      {userChoice && (
        <div className="results">
          <p>You chose: <strong>{userChoice}</strong></p>
          <p>Computer chose: <strong>{computerChoice}</strong></p>
          <p><strong>{result}</strong></p>
        </div>
      )}

      <button className="reset" onClick={resetGame}>Pontszám nullázása</button>
    </div>
  );
}

export default App;
