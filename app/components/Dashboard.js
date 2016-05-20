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


function Dashboard(props) {
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
      <PolarArea data={pieChartData(props.providers)} redraw width="300" height="300" />
    </div>
  )
}

export default Dashboard;
