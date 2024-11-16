import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)

  window.addEventListener('scroll', () => {
    console.log('Ta scrollando')
  })

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
        setPosts(res.data)
      } catch (error) {
        console.log(error)
      }

    }

    loadPosts()
  }, [])

  return (
    <div className='container'>
      <h1>Infinite Scroll</h1>
      {posts.length > 0 ? posts.map((post) => (
        <div className='post' key={post.id}>
          <h5>{post.title}</h5>
          <p>{post.body}</p>
        </div>
      )) : <p>Carregando posts...</p>}
    </div>
  )
}

export default App
