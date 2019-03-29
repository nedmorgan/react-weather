import React, { Component } from 'react'
import axios from 'axios'
const WEATHER_KEY = process.env.REACT_APP_KEY


export default class WeatherSearch extends Component {


  

  render() {
    return (
      <div>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Zip Code</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Please enter a 5-digit zip code"></input>
            <small id="emailHelp" class="form-text text-muted">We do not store any of your location information.</small>
          </div>
          <button type="submit" class="btn btn-primary">Get Weather</button>
        </form>
      </div>
    )
  }
}
