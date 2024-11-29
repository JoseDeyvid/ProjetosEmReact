import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../api';

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const res = await api.get(`/posts/${id}`)
        setPost(res.data)
      } catch (error) {
        setPost(null)
      }
    }
    loadPost();
  }, [])
  return (
    <div>
      {!post ?
        <h3>Não foi possível carregar esse post.</h3>
        :
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>

      }

    </div>
  )
}

export default Post