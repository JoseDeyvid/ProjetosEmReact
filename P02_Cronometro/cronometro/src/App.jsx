import { useEffect, useState } from "react"
import "./App.css"
import Button from "./components/Button"

function App() {

  const [timerIsActive, setTimerIsActive] = useState(false);
  const [timer, setTimer] = useState(0);
  const [laps, setLaps] = useState([]);


  // const minutes = Math.floor((timer / 60000) % 60);
  // const seconds = Math.floor((timer / 1000) % 60);
  // const centiseconds = Math.floor((timer / 10) % 100);


  useEffect(() => {
    let intervalId;
    if (timerIsActive) {
      intervalId = setInterval(() => {
        setTimer((prev) => prev + 10);
      }, 10);
    }
    return () => clearInterval(intervalId);
  }, [timerIsActive])

  const startAndStopStopwatch = () => {
    setTimerIsActive((prevState) => !prevState);
  }

  const resetStopwatch = () => {
    setTimerIsActive(false);
    setTimer(0);
    setLaps([]);
  }

  const markLap = () => {
    setLaps([...laps, formatTime()])
  }

  const formatTime = () => {
    const minutes = ("0" + Math.floor((timer / 60000) % 60)).slice(-2);
    const seconds = ("0" + Math.floor((timer / 1000) % 60)).slice(-2);
    const centiseconds = ("0" + ((timer / 10) % 100)).slice(-2);

    return `${minutes}:${seconds}:${centiseconds}`;
  };


  return (
    <div className="container">
      <div className="content">
        <label className="label-timer">{formatTime()}</label>
        {timerIsActive ?
          <div className="group-btns">
            <Button title="Parar" handleClick={() => startAndStopStopwatch()} />
            <Button title="Volta" handleClick={() => markLap()} />
            <Button title="Zerar" handleClick={() => resetStopwatch()} />
          </div>
          :
          <div className="group-btns">
            <Button title="Iniciar" handleClick={() => startAndStopStopwatch()} />
            <Button title="Zerar" handleClick={() => resetStopwatch()} />
          </div>}

        <label className="label-laps">Voltas:</label>
        <div className="laps">
          {laps.map((lap, i) => (
            <label key={i}>Volta {i + 1}: {lap}</label>
          ))}
        </div>



      </div>
    </div>
  )
}

export default App
