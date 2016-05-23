import React from 'react';
import numeral from 'numeral';

function sentimentSmiley(num) {
  let face = num;
  if (face === 0) {
    face = 'meh';
  } else if (face > 0) {
    face = 'smile';
  } else {
    face = 'frown';
  }
  return face;
}

function Scoreboard({ providers }) {
  return (
    <nav className="level scoreboard">
      <div className="level-item has-text-centered">
        <p className="heading">Posts</p>
        <p className="title animated fadeIn">{numeral(providers.posts).format('0,0')}</p>
      </div>
      <div className="level-item has-text-centered">
        <p className="heading">Likes</p>
        <p className="title animated fadeIn">{numeral(providers.likes).format('0,0')}</p>
      </div>
      <div className="level-item has-text-centered">
        <p className="heading">Sentiment</p>
        <p className="title animated fadeIn">
          <span className="icon is-medium">
            <i className={`fa fa-${sentimentSmiley(providers.sentiment)}-o`}></i>
          </span>
        </p>
      </div>
      <div className="level-item has-text-centered">
        <p className="heading">Shares</p>
        <p className="title animated fadeIn">{numeral(providers.shares).format('0,0')}</p>
      </div>
      <div className="level-item has-text-centered">
        <p className="heading">Comments</p>
        <p className="title animated fadeIn">{numeral(providers.comments).format('0,0')}</p>
      </div>
    </nav>
  );
}

Scoreboard.propTypes = {
  providers: React.PropTypes.object.isRequired,
};

export default Scoreboard;
