
import { useEffect, useState } from 'react';
import './App.css'

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
  const [timeZonesOnScreen, setTimeZonesOnScreen] = useState([]);

  useEffect(() => {
    const timeZoneInfos = Intl.DateTimeFormat().resolvedOptions();
    setTimeZonesOnScreen([...timeZonesOnScreen, timeZoneInfos.timeZone])
  }, [])

  return (
    <div>
      <header>
        <h1>Relógio Mundial</h1>
      </header>
      <main>
        <select name="fusos" id="fusos">
          {timeZones.map((timeZone, i) => (
            <option key={i}>{timeZone}</option>
          ))}
        </select>

        {timeZonesOnScreen.length > 0 &&
          <>
            {timeZonesOnScreen.map((timeZone) => (
              <div>
                <h2>{timeZone}</h2>
                <h3>Horário</h3>
              </div>
            ))}
          </>
        }
      </main>
    </div>
  )
}

export default App
