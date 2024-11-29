import React, { useContext, useEffect, useState } from 'react'
import api from '../../api'
import { PostContext } from '../../contexts/PostContext'

const Admin = () => {
  const { posts } = useContext(PostContext)

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