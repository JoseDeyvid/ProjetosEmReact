import { useEffect, useState } from 'react'
import './App.css'
import SelectCurrency from './components/SelectCurrency'
import axios from "axios";
function App() {

  const [options, setOptions] = useState([]);

  useEffect(() => {
    axios.get("https://v6.exchangerate-api.com/v6/cec3c9f9369a5769492c8c92/latest/USD").then((response) => {
      const currencies = Object.keys(response.data.conversion_rates);
      setOptions(currencies);
    })
  }, [])

  return (
    <div className="container">
      <div className="content">
        <h1>Conversor de moedas</h1>
        <input type="number" />
        <SelectCurrency title={"Selecione a moeda:"} options={options} />
        <SelectCurrency title={"para"} options={options} />
        <h2>0.94 EUR</h2>
        <p>1 USD valem 0.94 EUR</p>
      </div>
    </div>
  )
}

export default App
