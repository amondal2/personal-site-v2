import PropTypes from 'prop-types';
import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <img
      className="logo"
      src="https://s.gravatar.com/avatar/0de41d327f8852a19eadfb222599b956?size=496&default=retro"
      alt="headshot"
    ></img>
    <div className="content">
      <div className="inner">
        <h1>Hi, I'm Agastya</h1>
        <p>
          <span role="img" aria-label="pin">
            📍
          </span>
          San Francisco, CA
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              scrollTo('#about');
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              scrollTo('#blog');
            }}
          >
            Blog
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              scrollTo('#contact');
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
};

export default Header;
