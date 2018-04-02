import React from 'react';
// function based Components

const Header = (props) => (
  <div>
    <h1>{props.title}</h1>
    {props.subtitle && (<h2>{props.subtitle}</h2>)}
  </div>
);


// setting default props
Header.defaultProps = {
  title: 'Indecision'
};

export default Header;
