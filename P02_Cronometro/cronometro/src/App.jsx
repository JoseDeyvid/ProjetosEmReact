import { useState } from "react"
import "./App.css"
import Button from "./components/Button"

function App() {

  const [timerIsActive, setTimerIsActive] = useState(true);

  return (
    <div className="container">
      <div className="content">
        <label className="label-timer">00:00:00</label>
        {timerIsActive ?
          <div>
            <Button title="Parar" />
            <Button title="Volta" />
            <Button title="Zerar" />
          </div>
          :
          <div>
            <Button title="Iniciar" />
            <Button title="Zerar" />
          </div>}

        <label>Voltas:</label>
        {timerIsActive &&
          <div>
            <label>Volta 1: 00:02:42</label>
            <label>Volta 2: 00:04:42</label>
            <label>Volta 3: 01:07:42</label>
          </div>

        }

      </div>
    </div>
  )
}

export default App
