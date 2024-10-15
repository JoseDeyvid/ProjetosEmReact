import { useEffect, useState } from 'react'
import './App.css'
import data from "./data"
import Quote from './components/Quote'

function App() {
  const[quoteId, setQuoteId] = useState(0);
  const [quote, setQuote] = useState(data[quoteId]);

  const nextQuote = () => {
    if(quoteId === data.length-1) {
      setQuoteId(0);
    } else {
      setQuoteId((prevQuoteId) => prevQuoteId+1);
    }
  }

  useEffect(() => {
    setQuote(data[quoteId]);
  }, [quoteId])

  return (
    <div className='container pt-4'>
      <Quote quote={quote} />
      <button className='btn btn-primary me-2'>Traduzir para o Inglês</button>
      <button className='btn btn-secondary'>Traduzir para o Espanhol</button>
      <button className='btn btn-success d-block mt-2' onClick={nextQuote}>Próxima citação</button>
    </div>
  )
}

export default App
