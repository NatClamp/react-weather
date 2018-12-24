import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class RainGraph extends Component {
  render() {
    const { areaWeather } = this.props;
    return (
      <div className='graph'>
        <Line
          data={this.createGraph(areaWeather)}
          options={this.createOptions()}
          height={350}
          width={600}
        />
      </div>
    );
  }
  formatData = areaWeather => {
    return areaWeather.reduce((acc, measurement) => {
      if (measurement.rain) acc[measurement.dt_txt] = measurement.rain;
      return acc;
    }, {});
  };

  createGraph = areaWeather => {
    const graphData = this.formatData(areaWeather);
    const graph = {
      labels: Object.keys(graphData),
      datasets: [
        {
          label: areaWeather[0].city,
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
          data: Object.values(graphData),
        },
      ],
    };
    return graph;
  };

  createOptions = () => {
    return {
      scales: {
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: 'Time',
            },
          },
        ],
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: 'Rainfall (mm)',
            },
          },
        ],
      },
    };
  };
}

export default RainGraph;
