import PropTypes from 'prop-types';
import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-code"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Hi, I'm Agastya</h1>
        <p>📍Boston, MA</p>
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
