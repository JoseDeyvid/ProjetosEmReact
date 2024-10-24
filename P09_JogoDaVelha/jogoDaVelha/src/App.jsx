import { useState } from 'react'
import './App.css'

function App() {
  const [spaces, setSpaces] = useState(["", "", "", "", "", "", "", "", ""])
  return (
    <div>
      <h1>Jogo da Velha</h1>
      <p>Status: </p>
      <p>O vencedor é: X!</p>
      {spaces.map((space, i) => (
        <div key={i}>{space}</div>
      ))}
    </div>
  )
}

export default App
