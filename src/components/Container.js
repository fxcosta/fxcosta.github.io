import React from 'react';
import '../css/Layout.css';

const Container = ({size = "none", ...props}) => {

  return (
    <div className={size} {...props}/>
  );
};

export default Container;
