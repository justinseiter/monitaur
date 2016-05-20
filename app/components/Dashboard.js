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

const Dashboard = ({ providers }) => {
  return (
    <div className="container">
    <div className="columns">
      <Nav providers={providersList(providers)} />
      <div className="column">
      <div className="box">
        <div className="page-heading">
          <p className="title is-3">Dashboard</p>
          <p className="subtitle is-5">An overview of activity across providers</p>
        </div>
        <nav className="level scoreboard">
          <div className="level-item has-text-centered">
            <p className="heading">Likes</p>
            <p className="title">3,456</p>
          </div>
          <div className="level-item has-text-centered">
            <p className="heading">Shares</p>
            <p className="title">123</p>
          </div>
          <div className="level-item has-text-centered">
            <p className="heading">Comments</p>
            <p className="title">456K</p>
          </div>
          <div className="level-item has-text-centered">
            <p className="heading">Sentiment</p>
            <p className="title">
              <span className="icon is-medium"><i className="fa fa-smile-o"></i></span>
            </p>
          </div>
        </nav>
        <PolarArea data={pieChartData(providers)} redraw width="300" height="300" />
      </div>
      </div>
    </div>
    </div>
  );
};

Dashboard.propTypes = {
  providers: PropTypes.array.isRequired,
};

export default Dashboard;
