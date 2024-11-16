import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)

  const checkIfUserIsEndOfPage = () => {
    const { scrollHeight } = document.documentElement;
    if (window.innerHeight + window.scrollY >= scrollHeight - 100) {
      setPage((prevPage) => {
        window.removeEventListener('scroll', checkIfUserIsEndOfPage);
        return prevPage + 1
      })
    }
  }

  useEffect(() => {
    if (posts.length > 0) {
      window.addEventListener('scroll', checkIfUserIsEndOfPage)
    }
  }, [posts])

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
        if (res.data.length > 0) {
          setPosts((prevPosts) => [...prevPosts, ...res.data]);
        }
      } catch (error) {
        console.log(error)
      }

    }

    loadPosts()
  }, [page])

  return (
    <div className='container'>
      <h1>Infinite Scroll</h1>
      {posts.length > 0 ? posts.map((post) => (
        <div className='post' key={post.id}>
          <p>{post.id}</p>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      )) : <p>Carregando posts...</p>}
    </div>
  )
}

export default App
