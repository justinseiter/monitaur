import helpers from './helpers';

const getProviderColor = (provider, opacity) => {
  const providerColors = {
    twitter: '255, 110, 59',
    instagram: '255, 59, 106',
    tumblr: '147, 155, 176',
    facebook: '59, 204, 255',
  };
  return 'rgba(' + providerColors[provider] + ',' + opacity + ')';
};

const charts = {
  radarChartData: (ary) => {
    const chartData = {
      labels: ['Likes', 'Shares', 'Sentiment', 'Posts', 'Comments'],
      datasets: [],
    };
    ary.forEach(item => {
      chartData.datasets.push({
        label: helpers.capitalize(item.name),
        fillColor: getProviderColor(item.name, 0.1),
        strokeColor: getProviderColor(item.name, 0.5),
        pointColor: getProviderColor(item.name, 0.5),
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(151,187,205,1)',
        data: [
          item.stats.likes,
          item.stats.shares,
          item.stats.sentiment,
          item.stats.posts,
          item.stats.comments,
        ],
      });
    });
    return chartData;
  },
  // Get and rework data for chart.js Pie chart
  pieChartData: (ary) => {
    return ary.map(item => {
      return {
        value: item.activity.length,
        color: getProviderColor(item.name, 0.3),
        highlight: 'rgba( 61, 67, 83, 0.6)',
        label: helpers.capitalize(item.name),
      };
    });
  },

};

export default charts;
