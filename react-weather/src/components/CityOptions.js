import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CityOptions extends Component {
  render() {
    return (
      <>
        <label htmlFor='citySelect'>Choose a city: </label>
        <select onChange={this.handleChange} id='citySelect'>
          <option>London</option>
          {this.props.data.map(area => {
            if (area.name !== 'London')
              return (
                <option key={area.id} value={area.name}>
                  {area.name}
                </option>
              );
            else return null;
          })}
        </select>
      </>
    );
  }
  handleChange = event => {
    return this.props.chooseArea(event.target.value);
  };
}

CityOptions.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  chooseArea: PropTypes.func.isRequired,
};

export default CityOptions;
