import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../api';
import FormControl from '../../components/FormControl/FormControl';

const EditPost = () => {
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
            <div>
              <h1>Editando: {post.title}</h1>
              <FormControl id={"titleEditPost"} labelTitle={"Título: "} value={post.title} setValue={(e) => setPost({ ...post, title: e.target.value })} />
              <FormControl id={"bodyEditPost"} labelTitle={"Descrição: "} value={post.body} setValue={(e) => setPost({ ...post, body: e.target.value })} />
            </div>

          }
        </>
      }


    </div>
  )
}

export default EditPost