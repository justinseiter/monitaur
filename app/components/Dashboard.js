import React from 'react';
import { Link } from 'react-router';
import Scoreboard from './Partials/Scoreboard';
import helpers from '../utils/helpers';
import charts from '../utils/charts';
import { PolarArea, Radar } from 'react-chartjs';

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
                Posts Per Provider
              </p>
              <a className="card-header-icon">
                <i className="fa fa-angle-up"></i>
              </a>
            </header>
            <div className="card-content">
              <div className="content">
                <PolarArea data={charts.pieChartData(props.providers)} redraw width="380" height="380" />
              </div>
            </div>
          </div>
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
                <Radar data={charts.radarChartData(props.providers)} redraw width="370" height="370" />
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="dashboard-content">
            <h3 className="title is-4 section-head">Provider Breakdown</h3>
            <article className="media provider-break-card">
              <figure className="media-left">
                <span className="icon">
                  <i className="fa fa-instagram"></i>
                </span>
              </figure>
              <div className="media-content">
                <div className="content">
                  <h4 className="title is-5">Instagram</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                  </p>
                </div>
              </div>
            </article>
            <article className="media provider-break-card">
              <figure className="media-left">
                <span className="icon">
                  <i className="fa fa-facebook"></i>
                </span>
              </figure>
              <div className="media-content">
                <div className="content">
                  <h4 className="title is-5">Facebook</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                  </p>
                </div>
              </div>
            </article>
            <article className="media provider-break-card">
              <figure className="media-left">
                <span className="icon">
                  <i className="fa fa-twitter"></i>
                </span>
              </figure>
              <div className="media-content">
                <div className="content">
                  <h4 className="title is-5">Twitter</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                  </p>
                </div>
              </div>
            </article>
            <article className="media provider-break-card">
              <figure className="media-left">
                <span className="icon">
                  <i className="fa fa-tumblr"></i>
                </span>
              </figure>
              <div className="media-content">
                <div className="content">
                  <h4 className="title is-5">Tumblr</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

Dashboard.propTypes = {
  providers: React.PropTypes.array,
};

export default Dashboard;
