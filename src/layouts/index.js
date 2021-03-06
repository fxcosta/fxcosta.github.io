import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import NavHeader from '../components/NavHeader';
import ContentHeader from '../components/ContentHeader';
import Footer from '../components/Footer';
// require('offline-plugin/runtime').install();


import '../css/Layout.css';
import 'typeface-lato';

class Layout extends React.Component {
  render() {
    const { location, children } = this.props;
    // add Header and Footer, pass props
    return (
      <div className="container-grid">
        <NavHeader {...this.props} />
        <div className="container-content">
          {children()}
        </div>
        {/* <Footer ...this.props /> */}
      </div>
    );
  }
}

export default Layout;
