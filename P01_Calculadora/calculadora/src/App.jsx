import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {

  const [equation, setEquation] = useState('0')

  const insertNumberOnEquation = (n) => {
    setEquation((prevEquation) => prevEquation + n);
  }

  return (
    <div className='container'>
      <div className="content">
        <input type="text" className='input-result' disabled />
        <div className='input-equation'>
          <input type="text" value={equation} disabled />
        </div>
        <div className="calc-keyboard">
          <Button value={'AC'} handleClick={() => insertNumberOnEquation(2)} />
          <Button value={'AC'} />
          <Button value={'AC'} />
          <Button value={'AC'} />
          <Button value={'AC'} />
          <Button value={'AC'} />
          <Button value={'AC'} />
          <Button value={'AC'} />
          <Button value={'AC'} />
          <Button value={'AC'} />
          <Button value={'AC'} />
          <Button value={'AC'} />
          <Button value={'AC'} />
          <Button value={'AC'} />
          <Button value={'AC'} />
          <Button value={'AC'} />
        </div>
      </div>
    </div>
  )
}

export default App
