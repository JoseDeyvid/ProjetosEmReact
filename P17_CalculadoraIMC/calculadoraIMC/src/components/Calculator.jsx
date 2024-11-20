import React, { useState } from 'react'
import { data } from '../data/data';

const Calculator = ({ setResult }) => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');

    const clearHandler = () => {
        setHeight('')
        setWeight('')
    }

    const calculateHandler = () => {
        let imc;
        if (!weight || !height) {
            alert('Nenhum campo pode estar vazio!')
            return;
        }
        imc = weight / (height * height);
        data.forEach(imcInfo => {
            if(imc > imcInfo.min && imc <= imcInfo.max) {
                setResult({
                    imc,
                    info: imcInfo.info
                })
            }
        });

    }
    return (
        <div className='calculatorContainer'>
            <h1>Calculadora de IMC</h1>
            <div className="inputContainer">
                <label htmlFor="height">Altura:</label>
                <input
                    type="number"
                    name='height'
                    id='height'
                    placeholder='Exemplo 1,75'
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                />
            </div>
            <div className="inputContainer">
                <label htmlFor="weight">Peso:</label>
                <input
                    type="number"
                    name='weight'
                    id='weight'
                    placeholder='Exemplo 70,5'
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                />
            </div>
            <div className="buttons">
                <button onClick={calculateHandler}>CALCULAR</button>
                <button className='btnClear' onClick={clearHandler}>LIMPAR</button>
            </div>
        </div>
    )
}

export default Calculator