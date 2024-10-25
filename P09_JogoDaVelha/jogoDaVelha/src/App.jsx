import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [spaces, setSpaces] = useState(["", "", "", "", "", "", "", "", ""])
  const [isUserTurn, setIsUserTurn] = useState(true)
  const [winner, setWinner] = useState("");

  const handlePlayUser = (i) => {
    let newSpaces = spaces;

    if (!newSpaces[i] && isUserTurn && !winner) {
      newSpaces[i] = "X";
      setSpaces([...newSpaces]);
      checkIfSomeoneWon();
      setIsUserTurn(false);
    }


  }

  const checkIfSomeoneWon = () => {
    for (let index = 0; index < 9; index += 3) {
      if (spaces[index] && spaces[index] === spaces[index + 1] && spaces[index + 1] === spaces[index + 2]) {
        if (spaces[index] === "X") {
          setWinner("X");
        } else {
          setWinner("O");
        }
      }
    }
    if (!winner) {
      for (let index = 0; index < 3; index++) {
        if (spaces[index] && spaces[index] === spaces[index + 3] && spaces[index + 3] === spaces[index + 6]) {
          if (spaces[index] === "X") {
            setWinner("X");
          } else {
            setWinner("O");
          }
        }

      }
    }
    if (!winner) {
      if (spaces[0] && spaces[0] === spaces[4] && spaces[4] === spaces[8]) {
        if (spaces[0] === "X") {
          setWinner("X");
        } else {
          setWinner("O");
        }
      } else if (spaces[2] && spaces[2] === spaces[4] && spaces[4] === spaces[6]) {
        if (spaces[2] === "X") {
          setWinner("X");
        } else {
          setWinner("O");
        }
      }
    }
  }

  const handleRestartGame = () => {
    setSpaces(["", "", "", "", "", "", "", "", ""])
    setIsUserTurn(true)
    setWinner("")
  }

  useEffect(() => {
    const hasBlankSpaces = spaces.includes("");
    console.log(hasBlankSpaces)

    if (!isUserTurn && !winner && hasBlankSpaces) {
      console.log("Vencedor: ", winner)
      let i;
      let newSpaces = spaces
      i = Math.floor(Math.random() * 9)
      if (newSpaces[i]) {
        while (newSpaces[i]) {
          i = Math.floor(Math.random() * 9)
        }
      }
      newSpaces[i] = "O";
      setSpaces([...newSpaces]);
      checkIfSomeoneWon();
      setIsUserTurn(true);
    }
  }, [isUserTurn])

  return (
    <div className='container'>
      <main className='content'>
        <h1>Jogo da Velha</h1>
        {!winner && <p>Aguardando jogada do: {isUserTurn ? "X" : "O"}</p>}
        {winner && <p className='txt-winner'>O vencedor é: {winner}!</p>}
        <div className="spaces">
          {spaces.map((space, i) => (
            <div key={i} className='space' onClick={() => handlePlayUser(i)}>{space}</div>
          ))}
        </div>
        <button className='btn-restart' onClick={handleRestartGame}>Reiniciar Jogo</button>
      </main>
    </div>
  )
}

export default App
