import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import CityOptions from './components/CityOptions';
import Chart from './components/Chart';
import data from './data/cityCodes.json';
import { WEATHER_KEY } from './config.js'

class App extends Component {
  state = {
    areaWeather: [],
    currentCityID : '',
  }

  render() {
    return (
      <div className="App">
        <h1>Weather</h1>
        <CityOptions data={data} chooseArea={this.chooseArea}/>
        <Chart />
      </div>
    );
  }



fetchWeather = () => {
if (this.state.currentCityID !== '') return axios.get(`api.openweathermap.org/data/2.5/forecast?id=${this.state.currentCityID}&APPID=${WEATHER_KEY}`).then(console.log)
}

componentDidMount() {
  this.fetchWeather();
}

chooseArea = (chosenAreaName) => {
  const area = data.filter(area => {
    return area.name === chosenAreaName
  })
  this.setState({
    currentCityID : area[0].id
  })
}


}

export default App;
