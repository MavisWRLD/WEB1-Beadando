import React, { useState } from 'react'
import Nav from './components/Nav'
import CounterApp from './components/CounterApp'
import RockPaperScissors from './components/RockPaperScissors'

export default function App() {
  const [page, setPage] = useState('counter')

  return (
    <div>
      <Nav setPage={setPage} />
      {page === 'counter' && <CounterApp />}
      {page === 'rps' && <RockPaperScissors />}
    </div>
  )
}
