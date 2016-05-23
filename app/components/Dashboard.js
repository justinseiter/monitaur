import React from 'react';
import { Link } from 'react-router';
import Scoreboard from './Partials/Scoreboard';
import helpers from '../utils/helpers';
import { PolarArea, Radar } from 'react-chartjs';

function rand(min, max, num) {
          var rtn = [];
          while (rtn.length < num) {
            rtn.push(Math.floor((Math.random() * (max - min)) + min));
          }
          return rtn;
        }

function data2() {
          return {
            labels: ["Posts", "Likes", "Shares", "Comments", "Sentiment"],
            datasets: [
                {
                    label: "Twitter",
                    fillColor: "rgba(255,59,106,0.2)",
                    strokeColor: "rgba(255,59,106,0.5)",
                    pointColor: "rgba(255,59,106,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: rand(32, 100, 5)
                },
                {
                    label: "Instagram",
                    fillColor: "rgba(147,155,176,0.2)",
                    strokeColor: "rgba(147,155,176,0.5)",
                    pointColor: "rgba(147,155,176,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: rand(32, 100, 5)
                },
                {
                    label: "Tumblr",
                    fillColor: "rgba(255, 110, 59,0.2)",
                    strokeColor: "rgba(255, 110, 59,0.5)",
                    pointColor: "rgba(255, 110, 59,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: rand(32, 100, 5)
                },
                {
                    label: "Facebook",
                    fillColor: "rgba(59, 204, 255,0.2)",
                    strokeColor: "rgba(59, 204, 255,0.5)",
                    pointColor: "rgba(59, 204, 255,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: rand(32, 100, 5)
                }
            ]
          };
        }

function Dashboard(props) {
  const providersScoreboard = helpers.getProviderTotals(props.providers);
  return (
    <div>
      <div className="level page-heading">
        <p className="title is-3">Dashboard</p>
      </div>
      <Scoreboard providers={providersScoreboard} />
      <br />
      <br />
      <div className="columns">
        <div className="column is-narrow">
          <div className="card is-fullwidth">
            <header className="card-header">
              <p className="card-header-title">
                Activity Analysis
              </p>
              <a className="card-header-icon">
                <i className="fa fa-angle-up"></i>
              </a>
            </header>
            <div className="card-content">
              <div className="content">
                <Radar data={data2()} redraw width="400" height="400" />
              </div>
            </div>
          </div>
          <div className="card is-fullwidth">
            <header className="card-header">
              <p className="card-header-title">
                Posts Per Provider
              </p>
              <a className="card-header-icon">
                <i className="fa fa-angle-up"></i>
              </a>
            </header>
            <div className="card-content">
              <div className="content">
                <PolarArea data={helpers.pieChartData(props.providers)} redraw width="380" height="380" />
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <h3 className="title is-4 ">Provider Breakdown</h3>
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
