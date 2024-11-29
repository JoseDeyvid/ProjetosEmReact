import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './pages/Layout'
import Home from './pages/Home'
import Admin from './pages/Admin'
import NewPost from './pages/NewPost'
import Post from './pages/Post'
import EditPost from './pages/EditPost'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='admin' element={<Admin/>}/>
          <Route path='edit/:id' element={<EditPost/>}/>
          <Route path='new' element={<NewPost/>}/>
          <Route path='/posts/:id' element={<Post/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
