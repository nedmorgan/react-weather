import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'

export const fade = keyframes`${fadeIn}`

export const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .weather-info-container {
    display: flex;
    flex-direction: column;
    align-content: flex-start;
  }

  .metric {
    animation: 1s ${fade};
  }

  .freedom-units {
    animation: 1s ${fade};
  }

  h1 {
    color: whitesmoke !important;
  }

  h1, p {
    color: whitesmoke;
    font-family: 'Lato', sans-serif;
  }

  h1 {
    font-size: 5vw !important;
  }

  .button-div {
    display: flex;
    justify-content: center;
  }

  p {
    font-size: 3vw;
  }
}
`