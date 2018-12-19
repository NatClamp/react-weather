import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class CityOptions extends Component {
  render() {
    return (
      <select onChange={this.handleChange}>
        <option>Choose a city</option>
        {this.props.data.map(area => {
          return (
            <option key={area.id} value={area.name}>
              {area.name}
            </option>
          );
        })}
      </select>
    );
  }
  handleChange = event => {
    return this.props.chooseArea(event.target.value);
  };
}

// CityOptions.propTypes = {};

export default CityOptions;
