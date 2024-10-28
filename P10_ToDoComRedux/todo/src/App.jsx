import './App.css'
import AddTask from './components/AddTask'
import List from './components/List'

function App() {

  return (
    <div>
      <h1>Lista de tarefas com Redux</h1>
      <AddTask/>
      <List/>
    </div>
  )
}

export default App
