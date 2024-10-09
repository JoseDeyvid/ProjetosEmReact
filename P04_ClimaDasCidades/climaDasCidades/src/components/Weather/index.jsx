

const Weather = ({city}) => {

  return (
    <div>
        <h2>{city.name}</h2>
        <img src={city.iconUrl} alt={city.description} />
        <p>{city.temp}ºC</p>
        <p>{city.description}</p>
    </div>
  )
}

export default Weather