import { useState } from 'react'
import './App.css'
import data from "./data"
import Quote from './components/Quote'

function App() {
  const [quote, setQuote] = useState(data[0])
  return (
    <div>
      <Quote quote={quote} />
      <button>Traduzir para o Inglês</button>
      <button>Traduzir para o Espanhol</button>
      <button>Próxima citação</button>
    </div>
  )
}

export default App
