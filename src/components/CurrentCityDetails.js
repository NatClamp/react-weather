import React, { Component } from 'react';

class CurrentCityDetails extends Component {
  render() {
    const { areaWeather, city } = this.props;
    return (
      <section className='currentDetails'>
        <p className='currCity'>{city}</p>
        <p className='desc'>{areaWeather[0].desc}</p>

        <section className='TempRange'>
          <p className='minTemp'>
            {(areaWeather[0].mintemp - 273).toFixed(0) + ' °c'}
          </p>
          <br />
          <p className='currTemp'>
            {(areaWeather[0].temp - 273).toFixed(0) + ' °c'}
          </p>
          <br />
          <p className='maxTemp'>
            {(areaWeather[0].maxtemp - 273).toFixed(0) + ' °c'}
          </p>
        </section>
      </section>
    );
  }
}

export default CurrentCityDetails;
