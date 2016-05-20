import React from 'react';
import axios from 'axios';
import _ from 'underscore';

const helpers = {
  dump: (obj) => {
    return <pre>{JSON.stringify(obj, null, ' ')}</pre>;
  },
  getActivity: () => {
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
