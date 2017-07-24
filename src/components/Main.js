import React from 'react';
import Wrapper from './Wrapper';

import '../css/Layout.css';

const Main = ({html, children}) => {
  return (
    <Wrapper tag="main">
      <div className="none">
        { html && (
          <article className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
        )}
        { children }
      </div>
    </Wrapper>
  );
};

export default Main;
