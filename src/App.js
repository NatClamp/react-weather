import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import CityOptions from './components/CityOptions';
import WeatherOptions from './components/WeatherOptions';
import Chart from './components/TempGraph';
import RainGraph from './components/RainGraph';
import CurrentCityDetails from './components/CurrentCityDetails';
import data from './data/cityCodes.json';
// import REACT_APP_API_KEY from './config';

class App extends Component {
  state = {
    areaWeather: [],
    currentCityName: 'London',
    currentCityID: '2643743',
    currentWeatherType: 'temperature',
  };
  render() {
    return (
      <div className="App">
        <h1 className="header">UK weather trends</h1>
        <section className="cityDropDown">
          <CityOptions data={data} chooseArea={this.chooseArea} />
        </section>
        <nav className="nav-weather-option">
          <WeatherOptions
            chooseWeather={this.chooseWeather}
            currentWeatherType={this.state.currentWeatherType}
          />
        </nav>
        <section className="currCityTemps">
          {this.state.areaWeather.length > 0 && (
            <CurrentCityDetails
              areaWeather={this.state.areaWeather}
              city={this.state.currentCityName}
            />
          )}
        </section>
        <section className="graphs">
          {this.state.areaWeather.length > 0 &&
            this.state.currentWeatherType === 'temperature' && (
              <Chart areaWeather={this.state.areaWeather} />
            )}
          {this.state.areaWeather.length > 0 &&
            this.state.currentWeatherType === 'precipitation' && (
              <RainGraph areaWeather={this.state.areaWeather} />
            )}
        </section>
      </div>
    );
  }

  fetchWeather = () => {
    return axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?id=${
          this.state.currentCityID
        }&APPID=${
          // process.env.REACT_APP_API_KEY !== undefined
            // ? 
            process.env.REACT_APP_API_KEY
            // : REACT_APP_API_KEY
        }`,
      )
      .then(({ data }) => {
        let result = data.list.map(measurement => {
          let time = '3h';
          let obj = {};
          obj.city = this.state.currentCityName;
          obj.dt_txt = measurement.dt_txt;
          obj.temp = measurement.main.temp;
          if (measurement.rain) {
            obj.rain = measurement.rain[time];
          }
          obj.mintemp = measurement.main.temp_min;
          obj.maxtemp = measurement.main.temp_max;
          obj.desc = measurement.weather[0].description;
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
    this.setState(
      {
        currentWeatherType: chosenWeatherType,
      },
      () => {
        this.fetchWeather();
      },
    );
  };
}
export default App;
