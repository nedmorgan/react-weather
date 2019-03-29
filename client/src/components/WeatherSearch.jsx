import React, { Component } from 'react'
import { SearchContainer } from '../styled_components/WeatherSearchStyles'
import axios from 'axios'
const WEATHER_KEY = process.env.REACT_APP_KEY


export default class WeatherSearch extends Component {

  state = {
    currentWeather: {},
    currentZip: '',
  }

  componentDidMount() {
    this.getWeatherData()
  }

  getWeatherData = () => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${this.state.currentZip.currentZip},us&units=imperial&appid=${WEATHER_KEY}`).then(res => {
      console.log(res.data)
      this.setState({ currentWeather: res.data })
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
        <form className="form-container" onSubmit={(e) => this.handleNewWeather(e)}>
          <div class="form-group">
            <label for="exampleInputEmail1">Zip Code</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="currentZip"
              placeholder="Please enter a 5-digit zip code"
              onChange={this.handleChange}
              value={this.state.currentZip.currentZip}>
            </input>
            <small id="emailHelp" class="form-text text-muted">We do not store any of your location information.</small>
          </div>
          <button type="submit" class="btn btn-primary">Get Weather</button>
        </form>
      </SearchContainer>
    )
  }
}
