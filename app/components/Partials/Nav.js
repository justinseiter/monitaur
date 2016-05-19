import React from 'react';

const Nav = ({ providers }) => {
  return (
    <div className="container">
      <div className="tabs is-centered">
        <ul>
          {providers.map((provider, index) => (
            <li key={index}>
              <a>
                <span className="icon is-small"><i className={`fa fa-${provider}`}></i></span>
                <span>{provider}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Nav.propTypes = {
  providers: React.PropTypes.array.isRequired,
};

export default Nav;
