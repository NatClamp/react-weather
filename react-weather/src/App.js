import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import CityOptions from './components/CityOptions';
import WeatherOptions from './components/WeatherOptions';
import Chart from './components/Chart';
import RainGraph from './components/RainGraph';
import data from './data/cityCodes.json';
import { WEATHER_KEY } from './config.js';

class App extends Component {
  state = {
    areaWeather: [],
    currentCityName: 'London',
    currentCityID: '2643743',
    currentWeatherType: 'temperature'
  };
  render() {
    return (
      <div className="App">
        <h1>UK City 5-day temperature Trends</h1>
        <CityOptions data={data} chooseArea={this.chooseArea} />
        <WeatherOptions chooseWeather={this.chooseWeather}/>
        {this.state.areaWeather.length > 0 && this.state.currentWeatherType === 'temperature' && (<Chart areaWeather={this.state.areaWeather}/>)}
        {this.state.areaWeather.length > 0 && this.state.currentWeatherType === 'precipitation' && <RainGraph areaWeather={this.state.areaWeather}/>}
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
          let time = '3h'
          let obj = {};
          obj.city = this.state.currentCityName;
          obj.dt_txt = measurement.dt_txt;
          obj.temp = measurement.main.temp;
          if (measurement.rain[time]) {
            obj.rain = measurement.rain[time];
          }
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

  chooseWeather = chosenWeatherType => {
    this.setState({
      currentWeatherType: chosenWeatherType
    },
    () => {
      this.fetchWeather();
    }
    )
  }
}
export default App;
