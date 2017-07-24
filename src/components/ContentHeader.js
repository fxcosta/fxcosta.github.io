import React from 'react';
import Wrapper from './Wrapper';
import Container from './Container';

import '../css/ContentHeader.css';

const ContentHeader = ({title, date, tags, children}) => {
  return (
    <Wrapper tag="header">
      <Container size="large">
        { title && (
          <h1 className="content-header__title">{title}</h1>
        )}
        { date && (
          <p className="content-header__paragraph">
            Published on {date}
          </p>
        )}
        { tags && (
          <p className="content-header__tags">{tags}</p>
        )}
        {children}
      </Container>
    </Wrapper>
  );
};

export default ContentHeader;
