import React from 'react'
import './styles.css'

const Button = ({value, handleClick}) => {
  return (
    <button className='button' onClick={handleClick}>{value}</button>
  )
}

export default Button