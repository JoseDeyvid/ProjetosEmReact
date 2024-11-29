import React, { useState } from 'react'
import FormControl from '../../components/FormControl/FormControl'

const NewPost = () => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  return (
    <div>
      <h1>Inserir novo post: </h1>
      <FormControl id={"titleNewPost"} labelTitle={"Título: "} setValue={(e) => setTitle(e.target.value)} value={title} />
      <FormControl id={"bodyNewPost"} labelTitle={"Descrição: "} setValue={(e) => setBody(e.target.value)} value={body} />
      <button>Criar post</button>
    </div>
  )
}

export default NewPost