import React, { PropTypes } from 'react';
import Nav from './Partials/Nav';
import _ from 'underscore';

function providersList(ary) {
  // Get just the provider names.
  return _.pluck(ary, 'name');
}

const Dashboard = ({ providers }) => {
  return (
    <div>
      <Nav providers={providersList(providers)} />
      <div className="container">
        {_.map(providers, (provider, index) => (
          <li key={index}>
            <a>
              <span>{provider.name}</span>
            </a>
          </li>
        ))}
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  providers: PropTypes.array.isRequired,
};

export default Dashboard;
