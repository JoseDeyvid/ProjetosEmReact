import React, { useEffect, useState } from 'react'
import api from '../../api'

const Admin = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const res = await api.get("posts")
        setPosts(res.data);
      } catch (error) {
        setPosts([])
      }
    }
    loadPosts();
  }, [])

  return (
    <div>
      <h1>Gerenciar posts</h1>
      {posts.map((post) => (
        <div className="managePost" key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <button>Editar</button>
          <button>Excluir</button>
        </div>
      ))}

    </div>
  )
}

export default Admin