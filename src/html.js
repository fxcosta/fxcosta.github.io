import React from 'react';
import Helmet from 'react-helmet';

let stylesStr;
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`);
  } catch (e) {
    console.error(e);
  }
}

module.exports = props => {
  const head = Helmet.rewind();
  let css;
  if (process.env.NODE_ENV === `production`) {
    css = (
      <style
        id="gatsby-inlined-css"
        dangerouslySetInnerHTML={{ __html: stylesStr }}
      />
    );
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Felix Costa - Full-stack Developer"
        />
        {props.headComponents}
        {css}
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {head.link.toComponent()}

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="fxcosta.github.io"
          href="/rss.xml"
        />

        <link rel="icon" type="image/png" href="/favicons/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/favicons/favicon-16x16.png" sizes="16x16" />
      </head>
      <body>
        <div id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
      </body>
    </html>
  );
};
