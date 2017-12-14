/* global Highcharts */
import Component from '@ember/component';
import { computed } from '@ember/object';

const totalData = 100000;

export default Component.extend({
  init() {
    this._super(...arguments);

    this.chartOptions = {
      chart: {
        zoomType: 'xy'
      },
      xAxis: {
        min: 0,
        max: 100,
        gridLineWidth: 1
      },
      yAxis: {
        // Renders faster when we don't have to compute min and max
        min: 0,
        max: 100,
        minPadding: 0,
        maxPadding: 0
      },
      title: {
        text: `Scatter chart with ${Highcharts.numberFormat(totalData, 0, ' ')} points`
      },
      legend: {
        enabled: false
      }
    };
  },

  chartData: computed(() => {
    const data = [];

    for (let i = 0; i < totalData; i += 1) {
      data.push([
        Math.pow(Math.random(), 2) * 100,
        Math.pow(Math.random(), 2) * 100
      ]);
    }

    return [{
      data,
      type: 'scatter',
      color: 'rgba(152,0,67,0.1)',
      marker: {
        radius: 1
      },
      tooltip: {
        followPointer: false,
        pointFormat: '[{point.x:.1f}, {point.y:.1f}]'
      }
    }];
  }),
});
