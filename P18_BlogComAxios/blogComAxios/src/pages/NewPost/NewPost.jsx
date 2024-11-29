import React from 'react'

const NewPost = () => {
  return (
    <div>
      <h2>Inserir novo post: </h2>
      <div className="formControl">
        <label htmlFor="postTitle">Título:</label>
        <input type="text" id='postTitle' name='postTitle' placeholder='Digite o título...' />
      </div>
      <div className="formControl">
        <label htmlFor="postBody">Descrição:</label>
        <input type="text" id='postBody' name='postBody' placeholder='Digite o conteúdo...' />
      </div>
      <button>Criar post</button>
    </div>
  )
}

export default NewPost