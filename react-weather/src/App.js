import React, { Component } from 'react';
import './App.css';
import CityOptions from './components/CityOptions';
import Chart from './components/Chart';
import data from './data/cityCodes.json'

class App extends Component {
  state = {
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
