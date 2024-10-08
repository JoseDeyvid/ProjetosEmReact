import { useEffect, useState } from 'react'
import './App.css'
import SelectCurrency from './components/SelectCurrency'
import axios from "axios";
function App() {

  const [options, setOptions] = useState([]);
  const [valueToConvert, setValueToConvert] = useState(1);
  const [valueConverted, setValueConverted] = useState(1);
  const [currencyToConvert, setCurrencyToConvert] = useState("USD");
  const [currencyConverted, setCurrencyConverted] = useState("USD");

  const handleChangeCurrencyToConvert = () => {

  }

  const handleChangeCurrencyConverted = (e) => {
    setCurrencyConverted(e.target.value);
    
    const newValue = valueToConvert * options[e.target.value]
    setValueConverted(newValue);
  }

  useEffect(() => {
    console.log("Teste")
    axios.get(`https://v6.exchangerate-api.com/v6/cec3c9f9369a5769492c8c92/latest/${currencyToConvert}`).then((response) => {
      // const currencies = Object.keys();
      setOptions(response.data.conversion_rates);
    })
  }, [currencyToConvert])

  return (
    <div className="container">
      <div className="content">
        <h1>Conversor de moedas</h1>
        <input type="number" value={valueToConvert} onChange={(e) => setValueToConvert(e.target.value)} />
        <SelectCurrency title={"Selecione a moeda:"} options={options} optionSelected={currencyToConvert} handleChangeOption={handleChangeCurrencyConverted} />
        <SelectCurrency title={"para"} options={options} optionSelected={currencyConverted} handleChangeOption={handleChangeCurrencyConverted} />
        <h2>{valueToConvert} {currencyToConvert}</h2>
        <p>{valueToConvert} {currencyToConvert} valem {valueConverted} {currencyConverted}</p>
      </div>
    </div>
  )
}

export default App
