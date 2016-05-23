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
    const stats = sp[0].stats;
    return stats;
  },
  // Get and rework data for chart.js Pie chart
  pieChartData: (ary) => {
    const res = [];
    const providerColors = {
      twitter: 'rgba(255, 110, 59,0.3)',
      instagram: 'rgba(255,59,106,0.3)',
      tumblr: 'rgba(147,155,176,0.3)',
      facebook: 'rgba(59, 204, 255,0.3)',
    };
    ary.forEach((item) => {
      res.push(
        {
          value: item.activity.length,
          color: providerColors[item.name],
          highlight: 'rgba( 61, 67, 83, 0.6)',
          label: helpers.capitalize(item.name),
        }
      );
    });
    return res;
  },
  // Get the totals of stats across all providers
  getProviderTotals: (ary) => {
    const sum = {
      posts: 0,
      likes: 0,
      comments: 0,
      shares: 0,
      sentiment: 0,
    };
    const totals = _.pluck(ary, 'stats');
    _.each(totals, (item) => {
      sum.posts += item.posts;
      sum.likes += item.likes;
      sum.comments += item.comments;
      sum.shares += item.shares;
      sum.sentiment += item.sentiment;
    });
    return sum;
  },
  // Use axios to fetch all activity from server
  getAllActivity: () => {
    // https://gist.githubusercontent.com/justinseiter/cbe5733b69cacf0fd42ba2afae9f13a8/raw/c451a0bf17c991f4d0180e235f5d9d5a2332635e/monitaur.json
    // https://nuvi-challenge.herokuapp.com/activities
    return axios.get('https://nuvi-challenge.herokuapp.com/activities')
    .then((response) => {
      // Organize response by provider (ie, Twitter, Facebook, Instagram, etc)
      const byProvider = _.chain(response.data).groupBy('provider').value();

      // Loop through response to extract totals for likes, shares, and comments.
      const providers = _.mapObject(byProvider, (item, it) => {
        const provider = {
          name: it,
          activity: [],
          stats: {
            posts: 0,
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
        provider.stats.posts = _.size(provider.activity);
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
