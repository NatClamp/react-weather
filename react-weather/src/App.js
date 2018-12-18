import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import CityOptions from './components/CityOptions';
import Chart from './components/Chart';
import data from './data/cityCodes.json';
import { WEATHER_KEY } from './config.js';

class App extends Component {
  state = {
    areaWeather: [],
    currentCityName: 'London',
    currentCityID: '2643743',
  };
  render() {
    return (
      <div className="App">
        <h1>Weather</h1>
        <CityOptions data={data} chooseArea={this.chooseArea} />
        {this.state.areaWeather.length > 0 && (
          <Chart areaWeather={this.state.areaWeather}/>
        )}
      </div>
    );
  }

  fetchWeather = () => {
    return axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?id=${
          this.state.currentCityID
        }&APPID=${WEATHER_KEY}`,
      )
      .then(({ data }) => {
        let result = data.list.map(measurement => {
          let obj = {};
          obj.city = this.state.currentCityName;
          obj.dt_txt = measurement.dt_txt;
          obj.temp = measurement.main.temp;
          return obj;
        });
        this.setState({
          areaWeather: result,
        });
      })
      .catch(console.log);
  };

  componentDidMount() {
    return this.fetchWeather();
  }

  chooseArea = chosenAreaName => {
    const area = data.filter(area => {
      return area.name === chosenAreaName;
    });
    this.setState(
      {
        currentCityName: chosenAreaName,
        currentCityID: area[0].id,
      },
      () => {
        this.fetchWeather();
      },
    );
  };
}
export default App;
