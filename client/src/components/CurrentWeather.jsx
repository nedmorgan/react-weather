import React, { Component } from 'react'

export default class CurrentWeather extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.currentWeather.name}</h1>
        <p>Humidity: {`${this.props.currentWeather.main.humidity}%`}</p>
        <p>Temperature: {this.props.currentWeather.main.temp}</p>
      </div>
    )
  }
}
