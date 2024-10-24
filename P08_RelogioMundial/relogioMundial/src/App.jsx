
import { useEffect, useState } from 'react';
import './App.css'
import Hour from './components/Hour';

function App() {

  const timeZones = [
    "UTC",
    "GMT",
    "America/New_York",
    "America/Chicago",
    "America/Denver",
    "America/Los_Angeles",
    "Europe/London",
    "Europe/Berlin",
    "Asia/Tokyo",
  ];
  const currentTimeZone = new Intl.DateTimeFormat().resolvedOptions().timeZone
  const [timeZonesOnScreen, setTimeZonesOnScreen] = useState([currentTimeZone]);

  const addTimeZone = (e) => {

    const alreadyHasTimeZone = timeZonesOnScreen.find((timeZone) => timeZone === e.target.value)
    if (!alreadyHasTimeZone) {
      setTimeZonesOnScreen([...timeZonesOnScreen, e.target.value])
    }
  }


  return (
    <div className='container'>
      <header>
        <h1>Relógio Mundial</h1>
      </header>
      <main>
        <select name="fusos" id="fusos" onChange={(e) => addTimeZone(e)}>
          {timeZones.map((timeZone, i) => (
            <option key={i} value={timeZone}>{timeZone}</option>
          ))}
        </select>

        {timeZonesOnScreen.length > 0 &&
          <>
            {timeZonesOnScreen.map((timeZone, i) => (
              <div key={i} className='time-zones-on-screen'>
                <h2>{timeZone}</h2>
                <Hour timeZone={timeZone} />
              </div>
            ))}
          </>
        }
        <button onClick={() => updateHour()}>Test</button>
      </main>
    </div>
  )
}

export default App
