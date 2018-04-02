import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
      <h5>Option Component is running</h5>

      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>Please enter option to get started</p>}
      {
        props.options.map((option) => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
      <Option/>
    </div>
);


export default Options;
