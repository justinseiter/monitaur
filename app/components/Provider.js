import React from 'react';
import _ from 'underscore';
import helpers from '../utils/helpers';

_.mixin({
  capitalize: (string) => {
    return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
  },
});

function singleProvider(ary, name) {
  return _.where(ary, { name: name });
}

    // "id": "6323777844",
    // "actor_username": "lon_kilback",
    // "actor_description": "Upgradable zero administration orchestration",
    // "actor_name": "Hugh Ortiz",
    // "actor_avator": "https://robohash.org/lon_kilback.png?size=300x300&set=set1",
    // "actor_url": "https://tumblr.com/lon_kilback",
    // "provider": "tumblr",
    // "activity_url": "https://tumblr.com/lon_kilback/6323777844",
    // "activity_latitude": "2.22062170615294",
    // "activity_longitude": "62.294246238912166",
    // "activity_date": "2016-05-15",
    // "activity_message": "Numquam vulticulus turpis atqui.",
    // "activity_likes": 45,
    // "activity_shares": 20,
    // "activity_comments": 1,
    // "activity_attachment": null,
    // "activity_attachment_type": null,
    // "activity_sentiment": 0

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
          {prov[0].activity.map((act, index) => (
            <tr key={index}>
              <td>
                <figure className="image is-16x16">
                  <img src={act.actor_avator} />
                </figure>
              </td>
              <td>{act.actor_name}</td>
              <td>{act.activity_message}</td>
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
