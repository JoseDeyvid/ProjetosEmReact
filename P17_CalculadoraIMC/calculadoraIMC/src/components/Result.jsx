import React from 'react'
import RankingTable from './RankingTable'

const Result = ({ result }) => {
  return (
    <div className='resultContainer'>
      <h2>Seu IMC: {result.imc}</h2>
      <h3>Situação atual: {result.class}</h3>
      <h4>Confira as classificações</h4>
      <div className="rankingTable">
        <RankingTable />
      </div>
    </div>
  )
}

export default Result