import { useState } from 'react'
import './App.css'

function App() {
  const [spaces, setSpaces] = useState(["", "", "", "", "", "", "", "", ""])
  const [isUserTurn, setIsUserTurn] = useState(true)
  const [winner, setWinner] = useState("");
  return (
    <div className='container'>
      <main className='content'>
        <h1>Jogo da Velha</h1>
        <p>Status: {} </p>
        {winner && <p className='txt-winner'>O vencedor é: {winner}!</p>}
        <div className="spaces">
          {spaces.map((space, i) => (
            <div key={i} className='space'>{space}</div>
          ))}
        </div>
        <button className='btn-restart'>Reiniciar Jogo</button>
      </main>
    </div>
  )
}

export default App
