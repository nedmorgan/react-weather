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
        <h1 className="city-name">{this.props.currentWeather.name}</h1>
        {
          this.state.displayFreedomUnits ?
            <div className="freedom-units">
              <div className="weather-info-container">
                <p><strong>Humidity:</strong> {`${this.props.currentWeather.main.humidity}%`}</p>
                <p><strong>Temperature:</strong> {`${(this.props.currentWeather.main.temp).toFixed(0)} ℉`}</p>
                <p><strong>Max Temperature:</strong> {`${(this.props.currentWeather.main.temp_max).toFixed(0)} ℉`}</p>
                <p><strong>Wind Speed:</strong> {`${(this.props.currentWeather.wind.speed).toFixed(0)} MPH`}</p>
                <p><strong>Pressure:</strong> {`${(this.props.currentWeather.main.pressure).toFixed(0)} MB`}</p>
                <p><strong>Current Conditions:</strong> {`${this.props.currentWeather.weather[0].description.charAt(0).toUpperCase() + this.props.currentWeather.weather[0].description.slice(1)}`}</p>
              </div>
              <div className="button-div">
                <button onClick={this.changeToFreedomUnits} className="btn btn-primary">Change to Celcius</button>
              </div>
            </div>
            :
            <div className="metric">
              <div className="weather-info-container">
                <p><strong>Humidity:</strong> {`${this.props.currentWeather.main.humidity}%`}</p>
                <p><strong>Temperature:</strong> {`${((this.props.currentWeather.main.temp - 32) / 1.8).toFixed(0)} ℃`}</p>
                <p><strong>Max Temperature:</strong> {`${((this.props.currentWeather.main.temp_max - 32) / 1.8).toFixed(0)} ℃`}</p>
                <p><strong>Wind Speed:</strong> {`${(this.props.currentWeather.wind.speed * 1.609344).toFixed(0)} KPH`}</p>
                <p><strong>Pressure:</strong> {`${(this.props.currentWeather.main.pressure).toFixed(0)} MB`}</p>
                <p><strong>Current Conditions:</strong> {`${this.props.currentWeather.weather[0].description.charAt(0).toUpperCase() + this.props.currentWeather.weather[0].description.slice(1)}`}</p>
              </div>
              <div className="button-div">
                <button onClick={this.changeToFreedomUnits} className="btn btn-primary">Change to Freedom Units</button>
              </div>
            </div>
        }

      </WeatherContainer>
    )
  }
}
