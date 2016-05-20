import React from 'react';

const Nav = ({ providers }) => {
  return (
    <div className="column is-narrow sidebar">
      <aside className="menu">
        <p className="menu-label">
          General
        </p>
        <ul className="menu-list">
          <li>
            <a className="is-active" href="#">
              <span className="icon is-small"><i className="fa fa-dashboard"></i></span>
              Dashboard
            </a>
          </li>
        </ul>
        <p className="menu-label">
          Providers
        </p>
        <ul className="menu-list">
          {providers.map((provider, index) => (
            <li key={index}>
              <a>
                <span className="icon is-small"><i className={`fa fa-${provider}`}></i></span>
                <span>{provider}</span>
              </a>
            </li>
          ))}
        </ul>
        <p className="menu-label">
            Administration
          </p>
          <ul className="menu-list">
            <li><a href="#">Team Settings</a></li>
            <li><a href="#">Invitations</a></li>
            <li><a href="#">Authentication</a></li>
          </ul>
      </aside>
    </div>
  );
};

Nav.propTypes = {
  providers: React.PropTypes.array.isRequired,
};

export default Nav;
