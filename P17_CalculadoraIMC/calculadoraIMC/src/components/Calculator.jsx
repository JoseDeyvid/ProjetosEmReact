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
                <label htmlFor="weight">Peso:</label>
                <input type="number" name='weight' id='weight' placeholder='Exemplo 70,5' />
            </div>
            <div className="buttons">
                <button>CALCULAR</button>
                <button className='btnClear'>LIMPAR</button>
            </div>
        </div>
    )
}

export default Calculator