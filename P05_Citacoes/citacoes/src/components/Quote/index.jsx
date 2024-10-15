import React from 'react'

const Quote = ({quote}) => {
  return (
    <div>
      <p>{quote.texto}</p>
      <p>{quote.autor}</p>
    </div>
  )
}

export default Quote