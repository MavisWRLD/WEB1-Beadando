import { useState } from 'react'

export default function RockPaperScissors() {
  const choices = ['Kő', 'Papír', 'Olló']
  const [userChoice, setUserChoice] = useState('')
  const [computerChoice, setComputerChoice] = useState('')
  const [result, setResult] = useState('')

  const play = (choice) => {
    const comp = choices[Math.floor(Math.random() * choices.length)]
    setUserChoice(choice)
    setComputerChoice(comp)

    if (choice === comp) {
      setResult('Döntetlen!')
    } else if (
      (choice === 'Kő' && comp === 'Olló') ||
      (choice === 'Papír' && comp === 'Kő') ||
      (choice === 'Olló' && comp === 'Papír')
    ) {
      setResult('Nyertél!')
    } else {
      setResult('Vesztettél!')
    }
  }

  return (
    <div>
      <h2>Kő-Papír-Olló</h2>
      {choices.map((choice) => (
        <button key={choice} onClick={() => play(choice)}>{choice}</button>
      ))}
      <p>Te választottad: {userChoice}</p>
      <p>Gép választása: {computerChoice}</p>
      <h3>{result}</h3>
    </div>
  )
}
