import React from 'react';
import Helmet from 'react-helmet';
import get from 'lodash/get';

import Wrapper from '../components/Wrapper';
import Container from '../components/Container';
import ContentHeader from '../components/ContentHeader';

const ProjectsPage = (props) => {

  return (
    <div>
      <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
      <ContentHeader title="Oops... Under construction" />
      <Wrapper tag="main">
        <Container size="small">
          <section>
            Cooming soon
          </section>
        </Container>
      </Wrapper>
    </div>
  );
}

export default ProjectsPage;
