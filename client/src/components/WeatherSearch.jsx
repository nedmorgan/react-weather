import React, { Component } from 'react'
import { SearchContainer } from '../styled_components/WeatherSearchStyles'
import axios from 'axios'
import CurrentWeather from './CurrentWeather'
const WEATHER_KEY = process.env.REACT_APP_KEY


export default class WeatherSearch extends Component {

  state = {
    currentWeather: {},
    currentZip: '',
    displayWeatherData: false,
  }

  componentDidMount() {
    this.getWeatherData()
  }

  getWeatherData = () => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${this.state.currentZip.currentZip},us&units=imperial&appid=${WEATHER_KEY}`).then(res => {
      this.setState({ currentWeather: res.data })
    }).then(res => {
      this.setState({ displayWeatherData: !this.state.displayWeatherData })
    })
  }

  handleChange = (e) => {
    const zipcode = { ...this.state.currentZip }
    zipcode[e.target.name] = e.target.value
    this.setState({ currentZip: zipcode })
  }

  handleNewWeather = (e) => {
    e.preventDefault()
    this.getWeatherData()
  }


  render() {
    return (
      <SearchContainer>
        {this.state.displayWeatherData ?
          <CurrentWeather
            currentWeather={this.state.currentWeather} />
          :
          <form className="form-container" onSubmit={(e) => this.handleNewWeather(e)}>
            <div class="form-group">
              <label for="exampleInputEmail1">Zip Code</label>
              <input
                required pattern="[0-9]{5}"
                type="text"
                class="form-control form-control-lg"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="currentZip"
                placeholder="Please enter a 5-digit zip code (U.S. Only)"
                onChange={this.handleChange}
                value={this.state.currentZip.currentZip}>
              </input>
              <small id="emailHelp" class="form-text text-muted">We do not store any of your location information.</small>
            </div>
            <div className="button-div">
              <button type="submit" class="btn btn-primary">Get Weather</button>
            </div>
          </form>
        }
      </SearchContainer>
    )
  }
}
