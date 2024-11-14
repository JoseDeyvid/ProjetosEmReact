import SearchBar from './components/SearchBar'
import TableHeader from './components/TableHeader'
import TableRow from './components/TableRow'
import { useState } from 'react';

function App() {

  const [data] = useState([
    { nome: "Ana", idade: 25, cargo: "Engenheira" },
    { nome: "João", idade: 30, cargo: "Desenvolvedor" },
    { nome: "Maria", idade: 22, cargo: "Designer" },
    { nome: "Carlos", idade: 40, cargo: "Gerente" },
    { nome: "Sofia", idade: 28, cargo: "Analista" },
  ]);

  const [searchTxt, setSearchTxt] = useState('')

  return (
    <div className="container">
      <h1>Tabela de Usuários</h1>
      <SearchBar searchTxt={searchTxt} setSearchTxt={setSearchTxt} />
      <table>
        <TableHeader />
        <tbody>
          {data.map((user, i) => (
            <TableRow key={i} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
