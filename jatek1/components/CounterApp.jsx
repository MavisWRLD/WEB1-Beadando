import { useState } from 'react'

export default function CounterApp() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>Számláló</h2>
      <p>Érték: {count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}
