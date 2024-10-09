// Hooks
import { useEffect, useState } from 'react'
// Css
import './App.css'
// Terceiros
import axios from "axios";
// Components
import SelectCurrency from './components/SelectCurrency'

function App() {

  //  Todas as opções de moedas com seus respectivos valores baseados em alguma moeda específica.
  //  Ex: {"USD": 1, "BRL": 5.4997, "EUR": 0.9113} - Nesse exemplo o Dólar está como a moeda base.
  const [options, setOptions] = useState([]);
  //  Valor digitado pelo usuário
  const [valueToConvert, setValueToConvert] = useState(1);
  //  Valor que aparece para o usuário após a conversão feita
  const [valueConverted, setValueConverted] = useState(1);
  //  Opção do primeiro select
  const [currencyToConvert, setCurrencyToConvert] = useState("USD");
  //  Opção do segundo select
  const [currencyConverted, setCurrencyConverted] = useState("USD");

  //  Chamada sempre que o usuário altera o valor da moeda base.
  const handleChangeValueToConvert = (e) => {
    const newValue = e.target.value;
    setValueToConvert(newValue);
    setValueConverted(newValue * options[currencyConverted]);
  }

  //  Chamada sempre que alterar a moeda base.
  const handleChangeCurrencyToConvert = (e) => {
    setCurrencyToConvert(e.target.value);
  }

  //  Chamada sempre que alterar a moeda para a qual o valor será convertido.
  const handleChangeCurrencyConverted = (e) => {
    setCurrencyConverted(e.target.value);
    const newValue = valueToConvert * options[e.target.value];
    setValueConverted(newValue);
  }

  //  Chama a api passando a moeda base como parâmetro, salva todas as opções de moeda e seus valores baseado na moeda base.
  // Atualiza o valor da moeda o qual está sendo convertida.
  useEffect(() => {
    axios.get(`https://v6.exchangerate-api.com/v6/cec3c9f9369a5769492c8c92/latest/${currencyToConvert}`).then((response) => {
      setOptions(response.data.conversion_rates);
      setValueConverted(valueToConvert * response.data.conversion_rates[currencyConverted]);
    })
  }, [currencyToConvert])

  return (
    <div className="container">
      <div className="content">
        <h1>Conversor de moedas</h1>
        <input type="number" value={valueToConvert} onChange={handleChangeValueToConvert} />
        <SelectCurrency name="currency-to-convert" title={"Selecione a moeda:"} options={options} optionSelected={currencyToConvert} handleChangeOption={handleChangeCurrencyToConvert} />
        <SelectCurrency name="currency-converted" title={"para"} options={options} optionSelected={currencyConverted} handleChangeOption={handleChangeCurrencyConverted} />
        <h2>{valueToConvert} {currencyToConvert}</h2>
        <p>{valueToConvert} {currencyToConvert} valem {valueConverted} {currencyConverted}</p>
      </div>
    </div>
  )
}

export default App
