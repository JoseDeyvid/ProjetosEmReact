import "./Post.css"
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../api';

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const res = await api.get(`/posts/${id}`)
        setPost(res.data)
      } catch (error) {
        setPost(null)
      } finally {
        setIsLoading(false)
      }
    }
    loadPost();
  }, [])
  return (
    <div>
      {isLoading ?
        <h3>Carregando post...</h3>
        :
        <>
          {!post ?
            <h3>Não foi possível carregar esse post.</h3>
            :
            <div className='postContainer'>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>

          }
        </>
      }


    </div>
  )
}

export default Post