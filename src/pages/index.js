import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import get from 'lodash/get';
import isArray from 'lodash/isArray';
import Helmet from 'react-helmet';
import formatDate from 'date-fns/format';

import Wrapper from '../components/Wrapper';
import Container from '../components/Container';

import '../css/Page.css';

const createTags = tags => {
  if (!tags) {
    return [];
  } else if (isArray(tags)) {
    return tags;
  }

  return tags.split(',').map(tag => tag.trim());
};

const css = {
  title: {
    fontSize: '2.14rem',
    margin: '0',
    fontWeight: '300',
    color: '#555'
  }
};

class BlogIndex extends React.Component {
  render() {
    return (
      <div className="description">
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
        <Wrapper tag="header">
          <Container size="large">
            <h1 css={css.title}>Hi, I'm Felix Costa</h1>
            <section className="description__section">
              <p className="description__resume">
                I'm <strong>Software Developer</strong>, I live in Lauro de Freitas - Bahia,
                currently working at&nbsp;
                <a className="no-underline" 
                  target="_blank" href="http://soterotech.com.br/">
                  Sotero Tech
                </a> and also as freelancer.
              </p>

              <p className="description__resume">
                I'm passionate about clean code, the web, good practices and challenges.
              </p>

              <p className="description__resume">
                Open source enthusiast, GDG Lauro de Freitas organizer,
                participant / listener from some communities and PHP "evangelist".
              </p>

              <p className="description__resume">
                The curiosity, the desire to always learn more and be
                up to date, and the challenges of projects that
                I already participated, motivate me and drives
                me to always seek my best. In short, I love my work.
              </p>
            </section>

          </Container>
        </Wrapper>
      </div>
    );
  }
}

BlogIndex.propTypes = {
  route: PropTypes.object
};

export default BlogIndex;

export const pageQuery = graphql`
query IndexQuery {
  site {
    siteMetadata {
      title
    }
  }
}
`;
