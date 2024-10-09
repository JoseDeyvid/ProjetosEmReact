import React from 'react'

const Weather = ({city}) => {
  return (
    <div>
        <h2>{city.name}</h2>
        <img src={city.icon} alt={city.description} />
        <p>{city.weather}ºC</p>
        <p>{city.description}</p>
    </div>
  )
}

export default Weather