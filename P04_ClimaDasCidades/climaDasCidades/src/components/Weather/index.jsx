import { Img, Title, Container, Info } from "./WeatherStyles"

const Weather = ({city}) => {

  return (
    <Container>
        <Title>{city.name}</Title>
        <Img src={city.iconUrl} alt={city.description} />
        <Info>{city.temp}ºC</Info>
        <Info>{city.description}</Info>
    </Container>
  )
}

export default Weather