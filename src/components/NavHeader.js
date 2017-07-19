import React from 'react';
import Link from 'gatsby-link';
import logo from '../images/ewh.svg';

import '../css/navheader.css';

const css = {
  logoLink: {
    marginRight: 'auto'
  }
};

const NavHeader = props => {
  return (
    <aside className="container-sidebar">
      <div className="container-sidebar__avatar">
        <Link css={css.logoLink} to={'/'}>
          <img className="container-sidebar__selfie-mine" src={`https://s.gravatar.com/avatar/60591ae2bdb601f57648c8fcf7487aa5?s=160`} title="Felix Costa"/>
        </Link>
      </div>

      <section className="container-sidebar__social-media">
        <a className="container-sidebar__social-media-anchor" target="_blank"
          href="https://github.com/fxcosta">
          <i className="fa fa-2x fa-github-square" aria-hidden="true"></i>
        </a>

        <a className="container-sidebar__social-media-anchor" target="_blank"
          href="https://twitter.com/fxcosta">
          <i className="fa fa-2x fa-twitter-square" aria-hidden="true"></i>
        </a>

        <a className="container-sidebar__social-media-anchor" target="_blank"
          href="https://www.facebook.com/fx3costa">
          <i className="fa fa-2x fa-facebook-square" aria-hidden="true"></i>
        </a>
      </section>

      <nav className="container-sidebar__nav">
        <ul className="container-sidebar__menu">
          <li className="container-sidebar__menu-item">
            <Link className="container-sidebar__menu-anchor" to={'/'}>Home</Link>
          </li>
          <li className="container-sidebar__menu-item">
            <Link className="container-sidebar__menu-anchor" to={'/blog/'}>Blog</Link>
          </li>
          <li className="container-sidebar__menu-item">
            <Link className="container-sidebar__menu-anchor" to={'/projects/'}>Projects</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default NavHeader;
