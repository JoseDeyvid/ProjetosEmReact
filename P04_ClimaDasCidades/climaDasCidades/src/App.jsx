import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"

function App() {

  const [city, setCity] = useState("london");
  const [icon, setIcon] = useState("");
  // const [lat, setLat] = useState();
  // const [lon, setLon] = useState();

  const handleClick = () => {

    axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${import.meta.env.VITE_API_KEY}`).then((res) => {
      const lat = res.data[0].lat
      const lon = res.data[0].lon

      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}`).then((res) => {
        console.log(res.data)
      })
    })
  }

  return (
    <div className="container">
      <div className="content">
        <h1>Condições Climáticas</h1>
        <input type="search" name="search-city" id="search-city" value={city} onChange={(e) => setCity(e.target.value)} />
        <button onClick={handleClick}>Buscar</button>
        <p>{city}</p>
        <img src="" alt="" />
      </div>
    </div>
  )
}

export default App
