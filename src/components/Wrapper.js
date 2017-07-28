import React from 'react';
import '../css/Layout.css';

const Wrapper = ({tag, ...props}) => {
  const Element = tag || 'div';

  return (
    <Element className="wrapper" {...props}/>
  );
};

export default Wrapper;
