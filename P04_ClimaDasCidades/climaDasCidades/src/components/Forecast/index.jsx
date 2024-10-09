import React from 'react'

const Forecast = ({forecastList}) => {
  return (
    <div>
        <h3>Previsão para as próximas horas</h3>
        {forecastList.map((forecast) => (
            <div>
                <img src={forecast.icon} alt={forecast.description} />
                <p>{forecast.temp}ºC - {forecast.description}</p>
            </div>
        ))}
    </div>
  )
}

export default Forecast