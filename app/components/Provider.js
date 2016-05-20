import React from 'react';
import _ from 'underscore';
import helpers from '../utils/helpers';

_.mixin({
  capitalize: function(string) {
    return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
  }
});

function Provider(props) {
  return (
    <div className="Provider">
      <div className="page-heading">
        <p className="title is-3">{_(props.params.name).capitalize()}</p>
        <p className="subtitle is-5">{_(props.params.name).capitalize()} Overview &amp; Stats</p>
      </div>
      {helpers.dump(_.where(props.providers, {name: props.params.name}))}
    </div>
  );
}

export default Provider;
