import React from 'react';
import '../css/Layout.css';

const Wrapper = ({tag, ...props}) => {
  const element = tag || 'div';
  
  return (
    <tag className="wrapper" {...props}/>
  );
};

export default Wrapper;
