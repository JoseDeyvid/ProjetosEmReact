import SearchBar from './components/SearchBar'
import TableHeader from './components/TableHeader'
import TableRow from './components/TableRow'
import { useState } from 'react';

function App() {

  const [data, setData] = useState([
    { nome: "Ana", idade: 25, cargo: "Engenheira" },
    { nome: "João", idade: 30, cargo: "Desenvolvedor" },
    { nome: "Maria", idade: 22, cargo: "Designer" },
    { nome: "Carlos", idade: 40, cargo: "Gerente" },
    { nome: "Sofia", idade: 28, cargo: "Analista" },
    { nome: "Sofia", idade: 20, cargo: "Designer" },
  ]);
  const [reversed, setReversed] = useState(false);

  const [sortKey, setSortKey] = useState();

  const sortedData = reversed ? [...data].sort((a, b) => {
    if (sortKey) {
      if (b[sortKey] <= a[sortKey]) {
        return 1
      } else {
        return -1
      }
    }

  }).reverse()
    :
    [...data].sort((a, b) => {
      if (sortKey) {
        if (b[sortKey] <= a[sortKey]) {
          return 1
        } else {
          return -1
        }
      }

    })


  const [searchTxt, setSearchTxt] = useState('')

  const onColumnClick = (key) => {
    if (sortKey === key) {
      setReversed((prevReversed) => !prevReversed)
    } else {
      setSortKey(key);
      setReversed(false);
    }
  }

  return (
    <div className="container">
      <h1>Tabela de Usuários</h1>
      <SearchBar searchTxt={searchTxt} setSearchTxt={setSearchTxt} />
      <table>
        <TableHeader onColumnClick={onColumnClick} />
        <tbody>
          {sortedData.map((user, i) => (
            <TableRow key={i} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
