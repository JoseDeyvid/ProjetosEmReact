import React from 'react'
import { data } from '../data/data'

const RankingTable = () => {
  return (
    <table>
        <thead>
            <tr>
                <th>IMC</th>
                <th>Classificação</th>
                <th>Obesidade</th>
                
            </tr>
        </thead>
        <tbody>
            {data.map((info) => (
                <tr>
                    <td>{info.classification}</td>
                    <td>{info.info}</td>
                    <td>{info.infoClass}</td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default RankingTable