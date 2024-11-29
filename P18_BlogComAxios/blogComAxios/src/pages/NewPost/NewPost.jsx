import "./NewPost.css"
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
        await api.post('/posts', {
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
    <div className="newPostContainer">
      <h1>Inserir novo post: </h1>
      <form onSubmit={(e) => createPostHandler(e)}>
        <FormControl id={"titleNewPost"} labelTitle={"Título: "} setValue={(e) => setTitle(e.target.value)} value={title} placeholder={"Digite o título..."} />
        <FormControl id={"bodyNewPost"} labelTitle={"Descrição: "} setValue={(e) => setBody(e.target.value)} value={body} placeholder={"Digite a descrição..."} />
        <button className="btn" type='submit' disabled={isFetching}>Criar post</button>
      </form>
    </div>
  )
}

export default NewPost