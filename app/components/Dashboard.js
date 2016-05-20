import React, { PropTypes } from 'react';
import Nav from './Partials/Nav';
import _ from 'underscore';
import { PolarArea } from 'react-chartjs';

_.mixin({
  capitalize: function(string) {
    return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
  }
});

function providersList(ary) {
  // Get just the provider names.
  return _.pluck(ary, 'name');
}

function pieChartData(ary) {
  const res = [];
  ary.forEach((item) => {
    res.push(
      {
        value: item.activity.length,
        color: '#949FB1',
        highlight: '#A8B3C5',
        label: _(item.name).capitalize(),
      }
    );
  });
  return res;
}

function getProviderTotals(ary) {
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
}

function Dashboard(props) {
  const providerActivity = getProviderTotals(props.providers);
  return (
    <div>
      <div className="page-heading">
        <p className="title is-3">Dashboard</p>
        <p className="subtitle is-5">An overview of activity across providers</p>
      </div>
      <nav className="level scoreboard">
        <div className="level-item has-text-centered">
          <p className="heading">Likes</p>
          <p className="title">{providerActivity.likes}</p>
        </div>
        <div className="level-item has-text-centered">
          <p className="heading">Shares</p>
          <p className="title">{providerActivity.shares}</p>
        </div>
        <div className="level-item has-text-centered">
          <p className="heading">Comments</p>
          <p className="title">{providerActivity.comments}</p>
        </div>
        <div className="level-item has-text-centered">
          <p className="heading">Sentiment</p>
          <p className="title">
            <span className="icon is-medium">
              <i className={`fa fa-${providerActivity.sentiment}-o`}></i>
            </span>
          </p>
        </div>
      </nav>
      <div className="columns">
        <div className="column is-narrow">
          <PolarArea data={pieChartData(props.providers)} redraw width="340" height="340" />
          <p className="has-text-centered">
            <br />
            <span className="tag">Posts Per Provider</span>
          </p>
        </div>
        <div className="column">
          <h3 className="title is-5">Provider Breakdown</h3>
          <table className="table breakdown">
            <thead>
              <tr>
                <th></th>
                <th className="name">Provider</th>
                <th>Posts</th>
                <th>Likes</th>
                <th>Shares</th>
                <th>Comments</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span className="icon is-small"><i className="fa fa-facebook"></i></span></td>
                <td className="name">Facebook</td>
                <td>23</td>
                <td>23</td>
                <td>23</td>
                <td>23</td>
              </tr>
              <tr>
                <td><span className="icon is-small"><i className="fa fa-twitter"></i></span></td>
                <td className="name">Twitter</td>
                <td>23</td>
                <td>23</td>
                <td>23</td>
                <td>23</td>
              </tr>
              <tr>
                <td><span className="icon is-small"><i className="fa fa-instagram"></i></span></td>
                <td className="name">Instagram</td>
                <td>23</td>
                <td>23</td>
                <td>23</td>
                <td>23</td>
              </tr>
              <tr>
                <td><span className="icon is-small"><i className="fa fa-tumblr"></i></span></td>
                <td className="name">Tumblr</td>
                <td>23</td>
                <td>23</td>
                <td>23</td>
                <td>23</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
