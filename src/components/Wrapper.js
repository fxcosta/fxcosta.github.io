import React from 'react';
import '../css/Layout.css';

const Wrapper = ({...props}) => {

  return (
    <div className="wrapper" {...props}/>
  );
};

export default Wrapper;
