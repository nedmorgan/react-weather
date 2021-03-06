import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import WeatherSearch from './components/WeatherSearch'
import Footer from './components/Footer'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <Router>
        <div id="app">
          <Header />
          <Switch>
            <Route path="/" component={WeatherSearch} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
