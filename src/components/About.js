import React from 'react';

const About = () => {
  return (
    <div className="aboutWrapper">
      <h2 id="about">About Me</h2>
      <p>
        Thanks for visiting my site! I'm an incoming epidemiology and
        computational biology PhD student to the University of California,
        Berkeley's School of Public Health. I'll be working in Professor John
        Marshall's{' '}
        <a href="https://www.marshalllab.com" target="_blank" rel="noreferrer">
          lab
        </a>
        , where I'll be studying computational models of infectious disease
        control (particularly vector-borne diseases). In a past life, I worked
        as a software engineer in the cancer genomics and humanitarian spaces. I
        graduated from Johns Hopkins University in 2016 with degrees in
        Biomedical Engineering and Applied Mathematics, and I'm primarily
        interested in the intersection of computation, medicine, and public
        health. On the side, I enjoy analog photography, jazz (my current
        favorite{' '}
        <a
          href="https://www.discogs.com/Bill-Evans-Trio-Portrait-In-Jazz/master/104371"
          target="_blank"
          rel="noreferrer"
        >
          album
        </a>
        ), archaeology, history, and espresso. You can find a copy of my CV{' '}
        <a
          href="https://drive.google.com/file/d/1Gg5DmOhip1b_D1XTNfCOcnV8TGLaKUtu/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        .
      </p>
      <p>Some projects I've been a part of (at work and elsewhere):</p>
      <ol>
        <li>
          Visualizing COVID-19 infection rate & death{' '}
          <a
            href="https://covid19.gleamproject.org/"
            target="_blank"
            rel="noreferrer"
          >
            projections
          </a>{' '}
          in the United States.
        </li>
        <li>
          Visualizing{' '}
          <a
            href="https://covid19.gleamproject.org/mobility"
            target="_blank"
            rel="noreferrer"
          >
            mobility & commuting
          </a>{' '}
          patterns during the COVID-19 pandemic.
        </li>
        <li>
          An automated{' '}
          <a
            href="https://patents.google.com/patent/US20190087475A1/"
            target="_blank"
            rel="noreferrer"
          >
            tool
          </a>{' '}
          for large-scale data normalization and processing.
        </li>
        <li>
          A blood-based, next-generation DNA sequencing{' '}
          <a
            href="https://www.foundationmedicine.com/genomic-testing/foundation-one-liquid"
            target="_blank"
            rel="noreferrer"
          >
            analysis pipeline
          </a>{' '}
          for patients with advanced cancers.
        </li>
      </ol>
    </div>
  );
};

export default About;
