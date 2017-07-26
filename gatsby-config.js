// const siteUrl = process.env.NODE_ENV === 'production'
//   ? 'http://fxcosta.com'
//   : 'http://localhost:8000';


const config = {
  pathPrefix: `/`,
  siteMetadata: {
    title: 'Felix Costa | Full-stack Developer',
    description: 'Felix Costa - Full-stack Developer',
    author: 'Felix Costa',
    site_url: 'https://fxcosta.github.io'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts',
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-responsive-image`,
            options: {
              maxWidth: 600
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants'
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-glamor`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-85050778-1`
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                site_url
              }
            }
          }
        `,
        feeds: [
          {
            query: `
              {
                allMarkdownRemark(
                  limit: 20,
                  sort: {order: DESC, fields: [frontmatter___date]},
                  filter:{
                    frontmatter: {draft: {ne: true}},
                    fields: {collection: {eq: "posts"}}
                  }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields {
                        slug
                      }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml'
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Felix Costa",
        short_name: "fxcosta",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#a2466c",
        display: "fullscreen",
        orientation: "portrait",
        icons: [
          {
            // Everything in /static will be copied to an equivalent
            // directory in /public during development and build, so
            // assuming your favicons are in /static/favicons,
            // you can reference them here
            src: `/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicons/android-chrome-384x384.png`,
            sizes: `384x384`,
            type: `image/png`,
          },
        ],
      },
    },
    // `gatsby-plugin-offline`
    // TODO: wait for https://github.com/gatsbyjs/gatsby/issues/1189
  ]
};

module.exports = config;
