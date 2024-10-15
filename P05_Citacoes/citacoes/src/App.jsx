import { useState } from 'react'
import './App.css'
import data from "./data"
import Quote from './components/Quote'

function App() {
  const [quote, setQuote] = useState(data[0])
  return (
    <div className='container pt-4'>
      <Quote quote={quote} />
      <button className='btn btn-primary me-2'>Traduzir para o Inglês</button>
      <button className='btn btn-secondary'>Traduzir para o Espanhol</button>
      <button className='btn btn-success d-block mt-2'>Próxima citação</button>
    </div>
  )
}

export default App
