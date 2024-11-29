import React, { useContext, useEffect, useState } from 'react'
import { PostContext } from '../../contexts/PostContext'
import { Link } from 'react-router-dom'

const Admin = () => {
  const { posts } = useContext(PostContext)


  return (
    <div>
      <h1>Gerenciar posts</h1>
      {posts.map((post) => (
        <div className="managePost" key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <Link to={`/edit/${post.id}`}>Editar</Link>
          <button>Excluir</button>
        </div>
      ))}

    </div>
  )
}

export default Admin