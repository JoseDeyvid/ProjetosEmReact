import './App.css'
import SelectCurrency from './components/SelectCurrency'

function App() {

  const options = ["USD", "EUR", "BRL"]

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
