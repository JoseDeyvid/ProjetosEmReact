import React from 'react'

const Quote = ({quote, language}) => {
  return (
    <div className='d-flex flex-column'>
      <p className='m-0'>{quote.texto}</p>
      <p className='text-body-secondary '>⎯ {quote.autor}</p>
    </div>
  )
}

export default Quote