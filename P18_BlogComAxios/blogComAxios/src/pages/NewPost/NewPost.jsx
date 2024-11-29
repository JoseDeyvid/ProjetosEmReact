import React, { useState } from 'react'
import FormControl from '../../components/FormControl/FormControl'
import api from '../../api'
import { useNavigate } from 'react-router-dom'

const NewPost = () => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [isFetching, setIsFetching] = useState(false);

  const navigate = useNavigate();

  const createPostHandler = async (e) => {
    e.preventDefault();

    if (title.trim() && body.trim()) {
      try {
        setIsFetching(true);
        const res = await api.post('/posts', {
          title,
          body,
          userId: 1

        })
        confirm("Post criado com sucesso!")
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
    <form onSubmit={(e) => createPostHandler(e)}>
      <h1>Inserir novo post: </h1>
      <FormControl id={"titleNewPost"} labelTitle={"Título: "} setValue={(e) => setTitle(e.target.value)} value={title} />
      <FormControl id={"bodyNewPost"} labelTitle={"Descrição: "} setValue={(e) => setBody(e.target.value)} value={body} />
      <button type='submit' disabled={isFetching}>Criar post</button>
    </form>
  )
}

export default NewPost