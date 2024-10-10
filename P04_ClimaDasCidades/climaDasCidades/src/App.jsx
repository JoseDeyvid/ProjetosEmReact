import { useEffect, useState } from 'react'
import './App.css'
import {Titulo, Container} from "./AppStyles"
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
    await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&lang=pt_br&units=metric`).then(async (res) => {
      setCity({
        name: res.data.name,
        iconUrl: `https://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`,
        temp: res.data.main.temp,
        description: res.data.weather[0].description
      });

      const resForecast = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&lang=pt_br&units=metric`);
      setForecast(resForecast.data.list.slice(0, 5));
      // console.log(resForecast.data);
    })

  }

  const handleChangeSearchInput = (e) => {
    setCityName(e.target.value)
  }

  return (
    <Container>
      <Titulo>Condições climáticas</Titulo>
      <Search handleChangeSearchInput={handleChangeSearchInput} handleClickSearch={handleClickSearch} />
      {city && <Weather city={city} />}
      {city && forecast.length > 0 && <Forecast forecastList={forecast} />}
    </Container>
  )
}

export default App
