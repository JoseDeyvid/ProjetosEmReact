import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './pages/Layout/Layout'
import Home from './pages/Home/Home'
import Admin from './pages/Admin/Admin'
import NewPost from './pages/NewPost/NewPost'
import Post from './pages/Post/Post'
import EditPost from './pages/EditPost/EditPost'

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
