import React from 'react';
import { Link } from 'react-router';
import helpers from '../utils/helpers';
import { PolarArea } from 'react-chartjs';
import numeral from 'numeral';

function Dashboard(props) {
  const providerActivity = helpers.getProviderTotals(props.providers);
  return (
    <div>
      <div className="page-heading">
        <p className="title is-3">Dashboard</p>
        <p className="subtitle is-5">An overview of activity across providers</p>
      </div>
      <nav className="level scoreboard">
        <div className="level-item has-text-centered">
          <p className="heading">Likes</p>
          <p className="title">{numeral(providerActivity.likes).format('0,0')}</p>
        </div>
        <div className="level-item has-text-centered">
          <p className="heading">Shares</p>
          <p className="title">{numeral(providerActivity.shares).format('0,0')}</p>
        </div>
        <div className="level-item has-text-centered">
          <p className="heading">Comments</p>
          <p className="title">{numeral(providerActivity.comments).format('0,0')}</p>
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
          <PolarArea data={helpers.pieChartData(props.providers)} redraw width="340" height="340" />
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
