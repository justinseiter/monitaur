import React from 'react';
import axios from 'axios';
import _ from 'underscore';

const helpers = {
  dump: (obj) => {
    return <pre>{JSON.stringify(obj, null, ' ')}</pre>;
  },
  capitalize: (string) => {
    return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
  },
  providersList: (ary) => {
    // Get just the provider names.
    return _.pluck(ary, 'name');
  },
  singleProvider: (ary, name) => {
    const sp = _.where(ary, { name: name });
    return _.chain(sp[0].activity).sortBy('activity_date').reverse().value();
  },
  pieChartData: (ary) => {
    const res = [];
    ary.forEach((item) => {
      res.push(
        {
          value: item.activity.length,
          color: '#949FB1',
          highlight: '#A8B3C5',
          label: helpers.capitalize(item.name),
        }
      );
    });
    return res;
  },
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
  getActivity: () => {
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
