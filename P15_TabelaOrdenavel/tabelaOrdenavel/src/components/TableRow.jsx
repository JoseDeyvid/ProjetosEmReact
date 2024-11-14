import React from 'react'

const TableRow = ({user}) => {
  return (
    <tr>
        <td>{user.nome}</td>
        <td>{user.idade}</td>
        <td>{user.cargo}</td>
    </tr>
  )
}

export default TableRow