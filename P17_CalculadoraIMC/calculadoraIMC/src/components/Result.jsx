import React, { useEffect, useState } from 'react'
import RankingTable from './RankingTable'

const Result = ({ result }) => {
  const [txtColor, setTxtColor] = useState('');
  useEffect(() => {
    const { imc, info } = result;
    if (info === 'Magreza' || info === 'Normal' || info === 'Sobrepeso') {
      setTxtColor("green");
    } else if (info === 'Obesidade') {
      setTxtColor("orange");
    } else if (info === 'Obesidade grave') {
      setTxtColor("red");
    }

  }, [])
  return (
    <div className='resultContainer'>
      <h2>
        Seu IMC:
        <span className={txtColor}> {result.imc}</span>
      </h2>
      <h3>Situação atual:
        <span className={txtColor}> {result.info}</span>
      </h3>
      <h4>Confira as classificações</h4>
      <div className="rankingTable">
        <RankingTable />
      </div>
      <button className='btnBack'>VOLTAR</button>
    </div>
  )
}

export default Result