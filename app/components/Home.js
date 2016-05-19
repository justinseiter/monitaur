import React from 'react';
import Logo from '../img/bull.svg';

const Home = () => {
  return (
    <div className="">
      <nav className="nav">
        <div className="container">
        <div className="nav-left">
          <a className="nav-item logo" href="#">
            <img src={Logo} /><span>Monitaur</span>
          </a>
        </div>

        <span className="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>

        <div className="nav-right nav-menu">
          <a className="nav-item" href="#">
            Documentation
          </a>
          <a className="nav-item" href="#">
            Support
          </a>
        </div>
        </div>
      </nav>
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
    </div>
  );
};

export default Home;
