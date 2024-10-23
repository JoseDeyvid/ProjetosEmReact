
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
    const currentTimeZone = new Intl.DateTimeFormat('pt-BR', {
      timeStyle: 'medium',
      timeZone: timeZoneInfos.timeZone,
    }).format();
    setTimeZonesOnScreen([...timeZonesOnScreen, {region: timeZoneInfos.timeZone, clock: currentTimeZone}])
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
            {timeZonesOnScreen.map((timeZone, i) => (
              <div key={i}>
                <h2>{timeZone.region}</h2>
                <h3>{timeZone.clock}</h3>
              </div>
            ))}
          </>
        }
      </main>
    </div>
  )
}

export default App
