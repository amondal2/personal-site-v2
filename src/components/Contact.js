import React from 'react';

const Contact = () => {
  return (
    <div className="contactWrapper">
      <h2 id="contact">Contact</h2>
      <p>
        Please drop a line if you'd like to chat! I'm available on these
        platforms:
      </p>
      <ol>
        <li>
          <a href="mailto:amondal13@gmail.com" target="_blank" rel="noreferrer">
            Email
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/AgastyaMondal"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            href="https://github.com/amondal2"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/agastyamondal"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/agastya.mondal"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </li>
      </ol>
    </div>
  );
};

export default Contact;
