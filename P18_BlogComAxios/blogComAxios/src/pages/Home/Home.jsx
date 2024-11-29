import "./Home.css"
import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { PostContext } from "../../contexts/PostContext";

const Home = () => {
  const { posts, isLoading } = useContext(PostContext)
  return (
    <div>
      {isLoading ?
        <h3>Carregando posts...</h3>
        :
        <>
          {posts.length === 0 ?
            <h3>Falha ao carregar os posts...</h3>
            :
            <>
              <h1>ÚLTIMOS POSTS</h1>
              {posts.map((post) => (
                <div key={post.id}>
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                  <Link to={`/posts/${post.id}`}>Ler mais</Link>
                </div>
              ))}
            </>
          }
        </>

      }
    </div>
  )
}

export default Home