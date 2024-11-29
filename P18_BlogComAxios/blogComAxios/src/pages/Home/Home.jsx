import "./Home.css"
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import api from "../../api";
const Home = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const res = await api.get("posts")
        setPosts(res.data);
      } catch (error) {
        setPosts([])
      } finally {
        setIsLoading(false)
      }
    }
    loadPosts();
  }, [])

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