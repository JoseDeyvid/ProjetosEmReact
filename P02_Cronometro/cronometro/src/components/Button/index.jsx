import React from 'react'
import "./styles.css"

const Button = ({title}) => {
  return (
    <button className='btn-component'>{title}</button>
  )
}

export default Button