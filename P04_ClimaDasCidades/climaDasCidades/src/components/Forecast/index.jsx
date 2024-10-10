import { Container} from "./ForecastStyles"

const Forecast = ({forecastList}) => {

  return (
    <Container>
        <h3>Previsão para as próximas horas</h3>
        {forecastList.map((forecast, i) => (
            <div key={i}>
                <img src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} alt={forecast.weather[0].description} />
                <p>{forecast.main.temp}ºC - {forecast.weather[0].description}</p>
            </div>
        ))}
    </Container>
  )
}

export default Forecast