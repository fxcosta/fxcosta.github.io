import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';

import '../css/Footer.css';

const Footer = props => {
  const renderSelfie = get(props, 'location.pathname') !== '/';
  return (
    <footer>
      <div className="footer__container">
        {renderSelfie &&
          <img className="footer__selfie" src={selfie} title="Felix Costa" />}
        <p className="footer__paragraph">
          <strong>fxcosta was here</strong>
        </p>
        <p className="footer__paragraph">
          follow me on <a href="https://twitter.com/fxcosta/">twitter</a>{' '}
          &amp; <a href="https://github.com/fxcosta">github</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
