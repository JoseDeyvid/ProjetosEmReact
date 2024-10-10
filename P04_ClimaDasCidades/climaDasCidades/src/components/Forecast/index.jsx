import { Container, Title, ForecastDiv, Img} from "./ForecastStyles"

const Forecast = ({forecastList}) => {

  return (
    <Container>
        <Title>Previsão para as próximas horas</Title>
        {forecastList.map((forecast, i) => (
            <ForecastDiv key={i}>
                <Img src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} alt={forecast.weather[0].description} />
                <p>{forecast.main.temp}ºC - {forecast.weather[0].description}</p>
            </ForecastDiv>
        ))}
    </Container>
  )
}

export default Forecast