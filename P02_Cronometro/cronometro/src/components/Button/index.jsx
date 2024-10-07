import React from 'react'
import "./styles.css"

const Button = ({title, handleClick}) => {
  return (
    <button className='btn-component' onClick={handleClick}>{title}</button>
  )
}

export default Button