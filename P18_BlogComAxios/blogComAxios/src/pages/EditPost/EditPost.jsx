import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../../api';
import FormControl from '../../components/FormControl/FormControl';

const EditPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(false)
  const navigate = useNavigate();

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

  const editPostHandler = async (e) => {
    e.preventDefault();

    if (post.title.trim() && post.body.trim()) {
      try {
        setIsFetching(true);
        await api.patch(`posts/${post.id}`, {
          title: post.title,
          body: post.body,
        })
        confirm("Post editado com sucesso!")
        navigate("/")
      } catch (error) {
        alert(error)
      } finally {
        setIsFetching(false);
      }
    } else {
      alert("Necessário preencher todos os campos!")
    }

  }

  return (
    <div>
      {isLoading ?
        <h3>Carregando post...</h3>
        :
        <>
          {!post ?
            <h3>Não foi possível carregar esse post.</h3>
            :
            <form onSubmit={(e) => editPostHandler(e)}>
              <h1>Editando: {post.title}</h1>
              <FormControl id={"titleEditPost"} labelTitle={"Título: "} value={post.title} setValue={(e) => setPost({ ...post, title: e.target.value })} placeholder={"Digite o título..."} />
              <FormControl id={"bodyEditPost"} labelTitle={"Descrição: "} value={post.body} setValue={(e) => setPost({ ...post, body: e.target.value })} placeholder={"Digite a descrição..."} />
              <button type='submit' disabled={isFetching}>Editar Post</button>
            </form>

          }
        </>
      }


    </div>
  )
}

export default EditPost