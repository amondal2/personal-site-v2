import React from 'react';

const About = () => {
  return (
    <div className="aboutWrapper">
      <h2>About Me</h2>
      <p>
        Thanks for visiting my site! I'm a software engineer based in Boston,
        MA. I currently work for Foundation Medicine, where I help patients and
        oncologists visualize complex genomic data to better help understand
        cancer. I graduated from Johns Hopkins University in 2016 with degrees
        in Biomedical Engineering and Applied Mathematics, and I'm primarily
        interested in the intersection of computation, medicine, and public
        health. On the side, I'm interested in analog photography, jazz (my
        current favorite album), archaeology, and espresso. You can find a copy
        of my CV here.
      </p>
      <p>Some projects I've been a part of (at work and elsewhere):</p>
      <ol>
        <li>
          Visualizing COVID-19 projections in the United States:
          https://covid19.gleamproject.org/
        </li>
        <li>
          Visualizing COVID-19 mobility & commuting data:
          https://covid19.gleamproject.org/mobility
        </li>
        <li>
          An automated tool for large-scale data normalization and processing:
          https://patents.google.com/patent/US20190087475A1/
        </li>
        <li>
          A blood-based, next-generation DNA sequencing analysis for patients
          with advanced cancers:
          https://www.foundationmedicine.com/genomic-testing/foundation-one-liquid
        </li>
      </ol>
    </div>
  );
};

export default About;
