import React, { Component } from 'react';
import PropTypes from 'prop-types';

class WeatherOptions extends Component {
  render() {
    return (
      <>
        <label htmlFor='weatherSelect'>Choose a weather variable: </label>
        <select onChange={this.handleChange} id='weatherSelect'>
          <option>Temperature</option>
          <option value={'precipitation'}>Precipitation</option>
        </select>
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
