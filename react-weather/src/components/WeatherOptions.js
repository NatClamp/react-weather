import React, { Component } from 'react';

class WeatherOptions extends Component {
    
    render() {        
        return (
            <select onChange={this.handleChange}>
            <option>Choose a weather type</option>
            <option value={'temperature'}>temperature</option>
            <option value={'precipitation'}>precipitation</option>
            </select>
        );

    }
    

    handleChange = event => {
        return this.props.chooseWeather(event.target.value)
    }
}

export default WeatherOptions;