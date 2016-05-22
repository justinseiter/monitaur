import React from 'react';
import axios from 'axios';
import _ from 'underscore';

const helpers = {
  // Utility to show objects in browser as React gets grumpy otherwise
  dump: (obj) => {
    return <pre>{JSON.stringify(obj, null, ' ')}</pre>;
  },
  capitalize: (string) => {
    return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
  },
  // Get just the provider names.
  providersList: (ary) => {
    return _.pluck(ary, 'name');
  },
  // Get all data for a specific provider
  singleProviderActivity: (ary, name) => {
    const sp = _.where(ary, { name: name });
    return _.chain(sp[0].activity)
      .sortBy('activity_date')
      .reverse()
      .value();
  },
  singleProviderScoreboard: (ary, name) => {
    const sp = _.where(ary, { name: name });
    const stats = sp[0].stats
    if (stats.sentiment === 0) {
      stats.sentiment = 'meh';
    } else if (stats.sentiment > 0) {
      stats.sentiment = 'smile';
    } else {
      stats.sentiment = 'frown';
    }
    return stats;
  },
  // Get and rework data for chart.js Pie chart
  pieChartData: (ary) => {
    const res = [];
    const providerColors = {
      twitter: '#b9bdc2',
      instagram: '#abb0b7',
      tumblr: '#9ea3ab',
      facebook: '#90969f',
    }
    ary.forEach((item) => {
      res.push(
        {
          value: item.activity.length,
          color: providerColors[item.name],
          highlight: '#fdeea5',
          label: helpers.capitalize(item.name),
        }
      );
    });
    return res;
  },
  // Get the totals of stats across all providers
  getProviderTotals: (ary) => {
    const sum = {
      likes: 0,
      comments: 0,
      shares: 0,
      sentiment: 0,
    };
    const totals = _.pluck(ary, 'stats');
    _.each(totals, (item) => {
      sum.likes += item.likes;
      sum.comments += item.comments;
      sum.shares += item.shares;
      sum.sentiment += item.sentiment;
    });
    if (sum.sentiment === 0) {
      sum.sentiment = 'meh';
    } else if (sum.sentiment > 0) {
      sum.sentiment = 'smile';
    } else {
      sum.sentiment = 'frown';
    }
    return sum;
  },
  // Use axios to fetch all activity from server
  getAllActivity: () => {
    return axios.get('https://gist.githubusercontent.com/justinseiter/cbe5733b69cacf0fd42ba2afae9f13a8/raw/c451a0bf17c991f4d0180e235f5d9d5a2332635e/monitaur.json')
    .then((response) => {
      // Organize response by provider (ie, Twitter, Facebook, Instagram, etc)
      const byProvider = _.chain(response.data).groupBy('provider').value();

      // Loop through response to extract totals for likes, shares, and comments.
      const providers = _.mapObject(byProvider, (item, it) => {
        const provider = {
          name: it,
          activity: [],
          stats: {
            likes: 0,
            shares: 0,
            comments: 0,
            sentiment: 0,
          },
        };
        _.each(item, (act) => {
          provider.stats.likes += act.activity_likes;
          provider.stats.shares += act.activity_shares;
          provider.stats.comments += act.activity_comments;
          provider.stats.sentiment += act.activity_sentiment;
          provider.activity.push(act);
        });
        return provider;
      });
      return _.toArray(providers);
    })
    .catch((error) => {
      console.log(error);
    });
  },
};

export default helpers;
