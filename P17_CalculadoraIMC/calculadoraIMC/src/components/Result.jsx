import React, { useEffect, useState } from 'react'
import RankingTable from './RankingTable'

const Result = ({ result, setResult }) => {
  const [txtColor, setTxtColor] = useState('');
  useEffect(() => {
    const { imc, info } = result;
    if (info === 'Normal') {
      setTxtColor("green");
    } else if (info === 'Obesidade') {
      setTxtColor("orange");
    } else if (info === 'Obesidade grave') {
      setTxtColor("red");
    } else if (info === 'Magreza' || info === 'Sobrepeso') {
      setTxtColor('yellow');
    }

  }, [])
  return (
    <div className='resultContainer'>
      <h2>
        Seu IMC:
        <span className={txtColor}> {result.imc.toFixed(2)}</span>
      </h2>
      <h3>Situação atual:
        <span className={txtColor}> {result.info}</span>
      </h3>
      <h4>Confira as classificações</h4>
      <div className="rankingTable">
        <RankingTable />
      </div>
      <button className='btnBack' onClick={() => setResult('')}>VOLTAR</button>
    </div>
  )
}

export default Result