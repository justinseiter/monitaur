import React from 'react';
import _ from 'underscore';
import helpers from '../utils/helpers';
import moment from 'moment';

_.mixin({
  capitalize: (string) => {
    return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
  },
});

function singleProvider(ary, name) {
  const sp = _.where(ary, { name: name });
  return _.chain(sp[0].activity).sortBy('activity_date').reverse().value();
}

function Provider(props) {
  const prov = singleProvider(props.providers, props.params.name);
  return (
    <div className="Provider">
      <div className="page-heading">
        <p className="title is-3">{_(props.params.name).capitalize()}</p>
        <p className="subtitle is-5">{_(props.params.name).capitalize()} Overview &amp; Stats</p>
      </div>
      <table className="table is-striped">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Message</th>
            <th>Date</th>
            <th>
              <span className="icon is-small">
                <i className="fa fa-heart-o"></i>
              </span>
            </th>
            <th>
              <span className="icon is-small">
                <i className="fa fa-retweet"></i>
              </span>
            </th>
            <th>
              <span className="icon is-small">
                <i className="fa fa-comment-o"></i>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {prov.map((act, index) => (
            <tr key={index}>
              <td>
                <figure className="image is-16x16">
                  <img src={act.actor_avator} />
                </figure>
              </td>
              <td>{act.actor_name}</td>
              <td>
                {act.activity_attachment
                  ? <span className="tag is-info is-small">Has Attachment</span>
                  : <span>{act.activity_message}</span>
                }
              </td>
              <td className="date">{moment(act.activity_date).format('MMM Do')}</td>
              <td className="has-text-right">{act.activity_likes}</td>
              <td className="has-text-right">{act.activity_shares}</td>
              <td className="has-text-right">{act.activity_comments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Provider;
