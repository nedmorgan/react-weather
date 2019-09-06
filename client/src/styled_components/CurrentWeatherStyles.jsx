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
    color: whitesmoke;
    margin: 0;
    margin-bottom: 1.5vw;
  }

  h1,
  p {
    color: whitesmoke;
    font-family: 'Lato', sans-serif;
  }

  h1 {
    font-size: 5vw;
  }

  .button-div {
    display: flex;
    justify-content: center;
  }

  p {
    font-size: 2em;
  }

  @media (max-width: 768px) {
    .metric,
    .freedom-units {
      height: 65vw;
    }

    h1 {
      font-size: 2.5em;
    }

    p {
      font-size: 1.25em;
    }

    margin-top: 10em;
  }
`
