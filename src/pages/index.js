import React from 'react';
import Layout from '../components/layout';

import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import { graphql } from 'gatsby';

class IndexPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div className={'body'}>
          <div id="wrapper">
            <Header />
          </div>
          <About />
          <Blog data={this.props.data} />
          <Contact />
          <Footer />
        </div>
      </Layout>
    );
  }
}

export default IndexPage;

export const pageQuery = graphql`
  query MyQuery {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          slug
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`;
