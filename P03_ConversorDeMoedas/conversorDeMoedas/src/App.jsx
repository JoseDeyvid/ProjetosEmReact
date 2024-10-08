import './App.css'

function App() {

  return (
    <div className="container">
      <div className="content">
        <h1>Conversor de moedas</h1>
        <input type="number" />
        <div className="input-group">
          <label htmlFor="currency-to-convert">Selecione a moeda:</label>
          <select name="currency-to-convert" id="currency-to-convert">
            <option value="USD">USD</option>
            <option value="BRL">BRL</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="currency-converted">para</label>
          <select name="currency-converted" id="currency-converted">
            <option value="USD">USD</option>
            <option value="BRL">BRL</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
        <h2>0.94 EUR</h2>
        <p>1 USD valem 0.94 EUR</p>
      </div>
    </div>
  )
}

export default App
