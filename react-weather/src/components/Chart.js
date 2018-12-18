import React, { Component } from 'react';
// import {Line} from 'react-chartjs-2'
// import PropTypes from 'prop-types';

class Chart extends Component {
  render() {
 // {data && <List data={this.createGraph}/>
    return <div />;
  }

formatData = ({data}) => {
   return data.reduce((acc, measurement) => {
       acc[measurement.dt_txt] = measurement.temp;
       return acc;
    }, {})
}

createGraph = () => {
    const graphData = formatData(this.props);
    const data = {
     labels: Object.keys(graphData),
        datasets: [
        {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: Object.values(graphData)
    }
  ]
};
}
}

// Chart.propTypes = {};

export default Chart;


