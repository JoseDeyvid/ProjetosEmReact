import { useState } from 'react'
import './App.css'
import Calculator from './components/Calculator'
import Result from './components/Result'


function App() {
  const [result, setResult] = useState()
  {

  }
  return (
    <div className='container'>
      {!!result ? <Result result={result} setResult={setResult} /> : <Calculator setResult={setResult} />}
    </div>
  )
}

export default App
