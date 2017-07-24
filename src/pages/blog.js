import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import get from 'lodash/get';
import sortBy from 'lodash/sortBy';
import isArray from 'lodash/isArray';
import Helmet from 'react-helmet';
import formatDate from 'date-fns/format';
import ContentHeader from '../components/ContentHeader';
import Wrapper from '../components/Wrapper';
import Container from '../components/Container';

import '../css/Blog.css';

const createTags = tags => {
  if (!tags) {
    return [];
  } else if (isArray(tags)) {
    return tags;
  }

  return tags.split(',').map(tag => tag.trim());
};


class BlogIndex extends React.Component {

  goToExternalPosts = (url) => {
    window.open(url, '_blank');
  }

  renderPosts = () => {
    const articles = [];
    const posts = get(this, 'props.data.allMarkdownRemark.edges', []);

    articles.push(
      <article className="posts-list__post" key={`https://blog.lfdev.tk/me-explica-96651fc2c105`}>
        <a
          onClick={() => this.goToExternalPosts('https://blog.lfdev.tk/me-explica-96651fc2c105')}
          href="#">
          <date className="posts-list__post-date">{`April 24, 2017`}</date>
          <h4 className="posts-list__post-title">
            {`First Class Objects, High-Order functions, Funções Anônimas e Closures no JavaScript`}
          </h4>
          <p className="posts-list__post-excerpt">{
            `As vezes em nossa rotina de estudo nos deparamos com certos
            termos e conceitos que não tínhamos visto ou mesmo que não
            conseguimos assimilar e trazer...`
          }</p>
        </a>
      </article>
    );

    articles.push(
      <article
        className="posts-list__post"
        key={`https://devheroes.io/webpack-2-para-iniciantes-o-que-e-porque-usar-e-como-iniciar/`}>
        <a
          onClick={() => this.goToExternalPosts('https://devheroes.io/webpack-2-para-iniciantes-o-que-e-porque-usar-e-como-iniciar/')}
          href="#">
          <date className="posts-list__post-date">{`January 30, 2017`}</date>
          <h4 className="posts-list__post-title">
            {`Webpack 2 para iniciantes – o que é, porque usar e como iniciar`}
          </h4>
          <p className="posts-list__post-excerpt">{
            `Desenvolver e configurar o ambiente para o
            desenvolvimento web moderno pode ser um problema,
            principalmente se você está iniciando...`
          }</p>
        </a>
      </article>
    );

    posts.forEach(post => {
      const title = get(post, 'node.frontmatter.title', 'missing title');
      const tags = createTags(get(post, 'node.frontmatter.tags'));
      const date = formatDate(get(post, 'node.frontmatter.date'), 'MMMM D, YYYY');
      articles.push(
        <article className="posts-list__post" key={post.node.fields.slug}>
          <Link to={post.node.fields.slug}>
            <date className="posts-list__post-date">{date}</date>
            <h4 className="posts-list__post-title">{post.node.frontmatter.title}</h4>
            <p className="posts-list__post-excerpt">{post.node.excerpt}</p>
          </Link>
        </article>
      );
    });

    return articles;
  }
  render() {
    const posts = this.renderPosts();

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
        <ContentHeader title="Posts" />
        <Wrapper tag="main">
          <Container size="small">
            <section className="posts-list">
              {posts}
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
query BlogQuery {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date] },
    filter: {
      frontmatter: { draft: { ne: true } },
      fields: { collection: { eq: "posts" }}
    }
  ) {
    edges {
      node {
        excerpt(pruneLength: 168),
        frontmatter {
          title,
          tags,
          date
        }
        fields {
          slug
        }
      }
    }
  }
}
`;
