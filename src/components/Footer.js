import React from 'react';
import PropTypes from 'prop-types';

const Footer = props => (
  <footer id="footer">
    <p className="copyright">
      Built with:{' '}
      <a href="https://www.gatsbyjs.org/" target="_blank" rel="noreferrer">
        Gatsby.js
      </a>
    </p>
    <p className="copyright">
      Art used with permission from artist:{' '}
      <a href="https://twitter.com/lennsan_" target="_blank" rel="noreferrer">
        Lennart Butz
      </a>
    </p>
  </footer>
);

Footer.propTypes = {
  timeout: PropTypes.bool,
};

export default Footer;
