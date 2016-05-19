import React from 'react';

const Nav = () => {
  return (
    <div className="container">
      <div className="tabs is-centered">
        <ul>
          <li className="is-active">
            <a>
              <span className="icon is-small"><i className="fa fa-dashboard "></i></span>
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a>
              <span className="icon is-small"><i className="fa fa-twitter"></i></span>
              <span>Twitter</span>
            </a>
          </li>
          <li>
            <a>
              <span className="icon is-small"><i className="fa fa-instagram"></i></span>
              <span>Instagram</span>
            </a>
          </li>
          <li>
            <a>
              <span className="icon is-small"><i className="fa fa-tumblr"></i></span>
              <span>Tumblr</span>
            </a>
          </li>
          <li>
            <a>
              <span className="icon is-small"><i className="fa fa-facebook"></i></span>
              <span>Facebook</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
