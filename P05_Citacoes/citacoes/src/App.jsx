import { useEffect, useState } from 'react'
import './App.css'
import data from "./data"
import Quote from './components/Quote'

function App() {
  const [quoteId, setQuoteId] = useState(0);
  const [quote, setQuote] = useState(data[quoteId]);
  const [language, setLanguage] = useState("pt_br")

  const nextQuote = () => {
    if (quoteId === data.length - 1) {
      setQuoteId(0);
    } else {
      setQuoteId((prevQuoteId) => prevQuoteId + 1);
    }
  }

  // Não foi possível implementar as funções de tradução pois a API utilizada no curso passou a ser paga.
  const translateToEn = () => {
    // const url = `https://libretranslate.com/translate?q=${quote.texto}?source=pt?target=en`;
    // try {
    //   const response = await fetch(url, {
    //     method: "POST"
    //   });
    //   if (!response.ok) {
    //     throw new Error(`Response status: ${response.status}`);
    //   }

    //   const json = await response.json();
    //   console.log(json);
    // } catch (error) {
    //   console.error(error.message);
    // }
    setQuote({
      texto: "Não foi possível implementar as funções de tradução pois a API utilizada no curso passou a ser paga."
    });
  }

  useEffect(() => {
    setQuote(data[quoteId]);
  }, [quoteId])

  return (
    <div className='container pt-4'>
      <Quote quote={quote} language={language} />
      <button className='btn btn-primary me-2' onClick={translateToEn}>Traduzir para o Inglês</button>
      <button className='btn btn-secondary' onClick={translateToEn}>Traduzir para o Espanhol</button>
      <button className='btn btn-success d-block mt-2' onClick={nextQuote}>Próxima citação</button>
    </div>
  )
}

export default App
