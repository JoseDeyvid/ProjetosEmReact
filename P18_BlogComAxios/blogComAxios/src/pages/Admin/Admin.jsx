import React, { useContext, useEffect, useState } from 'react'
import { PostContext } from '../../contexts/PostContext'
import { Link } from 'react-router-dom'
import api from '../../api'

const Admin = () => {
  const { posts } = useContext(PostContext)
  const [isFetching, setIsFetching] = useState(false)

  const deletePostHandler = async (id) => {
    try {
      setIsFetching(true)
      await api.delete(`posts/${id}`)
      confirm("Post removido com sucesso!")
    } catch (error) {
      alert("Não foi possível remover esse post!")
    } finally {
      setIsFetching(false);
    }
  }

  return (
    <div>
      <h1>Gerenciar posts</h1>
      {posts.map((post) => (
        <div className="managePost" key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <Link to={`/edit/${post.id}`} disabled={isFetching}>Editar</Link>
          <button onClick={() => deletePostHandler(post.id)} disabled={isFetching}>Excluir</button>
        </div>
      ))}

    </div>
  )
}

export default Admin