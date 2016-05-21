import React from 'react';
import helpers from '../utils/helpers';
import moment from 'moment';

function Provider(props) {
  const prov = helpers.singleProvider(props.providers, props.params.name);
  return (
    <div className="Provider">
      <div className="page-heading">
        <p className="title is-3">
          {helpers.capitalize(props.params.name)}
        </p>
        <p className="subtitle is-5">
          {helpers.capitalize(props.params.name)} Overview &amp; Stats
        </p>
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
                  <img role="presentation" src={act.actor_avator} />
                </figure>
              </td>
              <td>{act.actor_name}</td>
              <td>
                {act.activity_attachment
                  ? <span>
                      <span className="icon"><i className="fa fa-image"></i></span>
                      <small>&nbsp;{act.activity_attachment_type}</small>
                    </span>
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

Provider.propTypes = {
  params: React.PropTypes.object,
  providers: React.PropTypes.array,
};

export default Provider;
