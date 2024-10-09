import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"
import Search from './components/Search'
import Weather from './components/Weather'
import Forecast from './components/Forecast'

function App() {

  const [city, setCity] = useState();
  const [forecast, setForecast] = useState([]);

  return (
    <div>
      <Search />
      {city && <Weather city={city} />}
      {city && forecast && <Forecast />}
    </div>
  )
}

export default App
