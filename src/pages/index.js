import React from 'react';
import Layout from '../components/layout';

import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

class IndexPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div className={'body'}>
          <div id="wrapper">
            <Header />
          </div>
          <About />
          <Blog />
          <Contact />
          <Footer />
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
