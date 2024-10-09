import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"
import Search from './components/Search'
import Weather from './components/Weather'
import Forecast from './components/Forecast'

function App() {

  const [city, setCity] = useState();
  const [forecast, setForecast] = useState([]);
  const [cityName, setCityName] = useState("");
  const apiKey = import.meta.env.VITE_API_KEY

  const handleClickSearch = async () => {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&lang=pt_br&units=metric`);
    setCity({
      name: res.data.name,
      iconUrl: `https://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`,
      temp: res.data.main.temp,
      description: res.data.weather[0].description
    });
  }

  const handleChangeSearchInput = (e) => {
    setCityName(e.target.value)
  }

  return (
    <div>
      <Search handleChangeSearchInput={handleChangeSearchInput} handleClickSearch={handleClickSearch} />
      {city && <Weather city={city} />}
      {city && forecast.length > 0 && <Forecast forecastList={forecast}/>}
    </div>
  )
}

export default App
