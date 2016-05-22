import React from 'react';
import { Link } from 'react-router';
import Scoreboard from './Partials/Scoreboard';
import helpers from '../utils/helpers';
import { PolarArea } from 'react-chartjs';

function Dashboard(props) {
  const providersScoreboard = helpers.getProviderTotals(props.providers);
  return (
    <div>
      <div className="level page-heading">
        <p className="title is-3">Dashboard</p>
      </div>
      <Scoreboard providers={providersScoreboard} />
      <div className="columns">
        <div className="column is-narrow">
          <PolarArea data={helpers.pieChartData(props.providers)} redraw width="340" height="340" />
          <p className="has-text-centered">
            <br />
            <span className="tag is-dark">Posts Per Provider</span>
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
                <td className="name"><Link to="/provider/facebook">Facebook</Link></td>
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
  );
}

Dashboard.propTypes = {
  providers: React.PropTypes.array,
};

export default Dashboard;
