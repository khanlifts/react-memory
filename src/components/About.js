import React from 'react';

const About = (props) => (
  <div className="about">
    <p>Hi this is {props.name}</p>
    <p>{props.text}</p>
    <p>My email is: {props.email}</p>
  </div>
);

export default About;
