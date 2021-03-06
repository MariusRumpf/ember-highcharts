import Component from '@ember/component';
import { copy } from '@ember/object/internals';
import { inject } from '@ember/service';
import stockData from '../data/stock';

export default Component.extend({
  dynamicChart: inject('dynamic-chart'),

  init() {
    this._super(...arguments);

    this.chartOptions = {
      rangeSelector: {
        selected: 1
      },
      title: {
        text: 'Highstock: AAPL Stock Price'
      }
    };

    this.chartData = copy(stockData, true);
  },

  actions: {
    updateSeriesData() {
      const newChartData = this.get('dynamicChart').updateSeriesData(stockData, 100, 514);
      this.set('chartData', newChartData);
    },

    setSeriesCount(numSeries) {
      const newChartData = this.get('dynamicChart').updateSeriesCount(stockData, numSeries);
      this.set('chartData', newChartData);
    }
  }
});
