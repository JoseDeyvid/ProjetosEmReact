import "./Home.css"
import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { PostContext } from "../../contexts/PostContext";

const Home = () => {
  const { posts, isLoading } = useContext(PostContext)
  return (
    <div className="homeContainer">
      {isLoading ?
        <h3>Carregando posts...</h3>
        :
        <>
          {posts.length === 0 ?
            <h3>Falha ao carregar os posts...</h3>
            :
            <>
              <h1>Últimos posts</h1>
              <div className="posts">
                {posts.map((post) => (
                  <div key={post.id} className="post">
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <Link to={`/posts/${post.id}`} className="btn">Ler mais</Link>
                  </div>
                ))}
              </div>
            </>
          }
        </>

      }
    </div>
  )
}

export default Home