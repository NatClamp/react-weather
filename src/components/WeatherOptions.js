import React, { Component } from 'react';
import PropTypes from 'prop-types';

class WeatherOptions extends Component {
  render() {
    return (
      <>
        <div className='weather-option'>
          <input
            className='app-nav__input'
            name='weather'
            type='radio'
            value='temperature'
            id='weather1'
            checked={this.props.currentWeatherType === 'temperature'}
            onChange={this.handleChange}
          />
          <label className='weather-option-label' htmlFor='weather1'>
            Temperature
          </label>
        </div>
        <div className='weather-option'>
          <input
            className='app-nav__input'
            name='weather'
            type='radio'
            value={'precipitation'}
            id='weather2'
            checked={this.props.currentWeatherType === 'precipitation'}
            onChange={this.handleChange}
          />
          <label className='weather-option-label' htmlFor='weather2'>
            Rainfall
          </label>
        </div>
        {/* <label htmlFor='weatherSelect'>Choose a weather variable: </label>
        <select
          onChange={this.handleChange}
          id='weatherSelect'
          className='weatherInput'
        >
          <option>Temperature</option>
          <option value={'precipitation'}>Precipitation</option>
        </select> */}
      </>
    );
  }

  handleChange = event => {
    return this.props.chooseWeather(event.target.value);
  };
}

WeatherOptions.propTypes = {
  chooseWeather: PropTypes.func.isRequired,
};

export default WeatherOptions;
