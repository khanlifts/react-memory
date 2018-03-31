import React from 'react';
// function based Components

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && (<h2>{props.subtitle}</h2>)}
    </div>
  );
}

export default Header;
