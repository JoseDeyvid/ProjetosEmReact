import { useState } from 'react'
import './App.css'
import Calculator from './components/Calculator'
import Result from './components/Result'


function App() {
  const [result, setResult] = useState(
    {
      imc: 22.9,
      class: "Normal"
    }
  )
  {

  }
  return (
    <div className='container'>
      {!!result ? <Result result={result}/> : <Calculator/>}
    </div>
  )
}

export default App
