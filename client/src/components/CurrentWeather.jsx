import React, { Component } from 'react'
import { WeatherContainer } from '../styled_components/CurrentWeatherStyles'

export default class CurrentWeather extends Component {
  state = {
    displayFreedomUnits: false,
  }

  changeToFreedomUnits = () => {
    this.setState((state, props) => {
      return ({ displayFreedomUnits: !state.displayFreedomUnits })
    })
  }

  render() {
    return (
      <WeatherContainer>
        {
          this.state.displayFreedomUnits ?
            <div>
              <h1 className="city-name display-4">{this.props.currentWeather.name}</h1>
              <div className="weather-info-container">
                <p>Humidity: {`${this.props.currentWeather.main.humidity}%`}</p>
                <p>Temperature: {`${(this.props.currentWeather.main.temp).toFixed(0)} ℉`}</p>
                <p>Max Temperature: {`${(this.props.currentWeather.main.temp_max).toFixed(0)} ℉`}</p>
                <p>Description: {`${this.props.currentWeather.weather[0].description.charAt(0).toUpperCase() + this.props.currentWeather.weather[0].description.slice(1)}`}</p>
              </div>
              <button onClick={this.changeToFreedomUnits} className="btn btn-primary">Change to Celcius</button>
            </div>
            :
            <div>
              <h1 className="city-name display-4">{this.props.currentWeather.name}</h1>
              <div className="weather-info-container">
                <p>Humidity: {`${this.props.currentWeather.main.humidity}%`}</p>
                <p>Temperature: {`${((this.props.currentWeather.main.temp - 32) / 1.8).toFixed(0)} ℃`}</p>
                <p>Max Temperature: {`${((this.props.currentWeather.main.temp_max - 32) / 1.8).toFixed(0)} ℃`}</p>
                <p>Description: {`${this.props.currentWeather.weather[0].description.charAt(0).toUpperCase() + this.props.currentWeather.weather[0].description.slice(1)}`}</p>
              </div>
              <button onClick={this.changeToFreedomUnits} className="btn btn-primary">Change to Freedom Units</button>
            </div>
        }

      </WeatherContainer>
    )
  }
}
