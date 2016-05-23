import React from 'react';
import { Link, IndexLink } from 'react-router';

import Logo from '../../img/bull.svg';

function Nav({ providers }) {
  return (
    <div className="sidebar">
      <div className="brand">
        <Link className="logo" to="/">
          <img alt="Logo" src={Logo} /><span>Monitaur</span>
        </Link>
      </div>
      <aside className="menu">
        <ul className="menu-list">
          <li>
            <IndexLink to="/" activeClassName="is-active">
              <span className="icon is-small"><i className="fa fa-dashboard"></i></span>
              Dashboard
            </IndexLink>
          </li>
        </ul>
        <p className="menu-label">
          Providers
        </p>
        <ul className="menu-list provider-menu">
          {providers.map((provider, index) => (
            <li key={index}>
              <Link activeClassName="is-active" to={`/provider/${provider}`}>
                <span className="icon is-small"><i className={`fa fa-${provider}`}></i></span>
                <span>{provider}</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="menu-label">
          Administration
        </p>
        <ul className="menu-list general-menu">
          <li><a href="#">Team Settings</a></li>
          <li><a href="#">Invitations</a></li>
          <li><a href="#">Authentication</a></li>
        </ul>
      </aside>
    </div>
  );
}

Nav.propTypes = {
  providers: React.PropTypes.array.isRequired,
};

export default Nav;
