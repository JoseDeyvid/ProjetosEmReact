import './App.css'
import AddTask from './components/AddTask'
import List from './components/List'

function App() {

  return (
    <div className='container'>
      <h1>Lista de tarefas com Redux</h1>
      <main className='main'>
        <AddTask />
        <List />
      </main>

    </div>
  )
}

export default App
