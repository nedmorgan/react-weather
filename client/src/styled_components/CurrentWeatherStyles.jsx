import styled from 'styled-components'

export const WeatherContainer = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;

.weather-info-container {
  display: flex;
  flex-direction: column;
  align-content: flex-start;

  h1 {
    color: whitesmoke;
  }

  .city-name, p {
    color: whitesmoke;
    font-family: 'Lato', sans-serif;
  }

  .city-name {
    font-size: 4vw;
  }

  p {
    font-size: 3vw;
  }
}
`