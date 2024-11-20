import React from 'react'

const Calculator = () => {
  return (
    <div className='calculatorContainer'>
        <h1>Calculadora de IMC</h1>
        <div className="inputContainer">
            <label htmlFor="height">Altura:</label>
            <input type="number" name='height' id='height' placeholder='Exemplo 1,75' />
        </div>
        <div className="inputContainer">
            <label htmlFor="weight">Altura:</label>
            <input type="number" name='weight' id='weight' placeholder='Exemplo 70,5' />
        </div>
        <button>CALCULAR</button>
        <button>LIMPAR</button>
    </div>
  )
}

export default Calculator