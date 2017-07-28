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
                I'm <strong>Full-stack Developer</strong>, I live in Lauro de Freitas - BA,
                currently working at Sotero Tech and also as Freelancer.
              </p>

              <p className="description__resume">
                I'm passionate about code, the web, good practices and challenges.
                I follow with pleasure the following philosophy: Study -> learn -> share.
              </p>

              <p className="description__resume">
                Open source enthusiast, GDG Lauro de Freitas organizer,
                participant / listener from various communities and PHP "evangelist".
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
