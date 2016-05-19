import axios from 'axios';
import _ from 'underscore';

function getActivity() {
  return axios.get('https://nuvi-challenge.herokuapp.com/activities')
  .then((response) => {
    // Organize response by provider (ie, Twitter, Facebook, Instagram, etc)
    const byProvider = _.chain(response.data).groupBy('provider').value();

    // Loop through response to extract totals for likes, shares, and comments.
    return _.mapObject(byProvider, (item) => {
      const provider = {};
      provider.activity = [];
      provider.stats = {};
      provider.stats.likes = 0;
      provider.stats.shares = 0;
      provider.stats.comments = 0;
      provider.stats.sentiment = 0;

      _.each(item, (act) => {
        provider.stats.likes += act.activity_likes;
        provider.stats.shares += act.activity_shares;
        provider.stats.comments += act.activity_comments;
        provider.stats.sentiment += act.activity_sentiment;
        provider.activity.push(act);
      });
      return provider;
    });
  })
  .catch((error) => {
    console.log(error);
  });
}

export default getActivity;
