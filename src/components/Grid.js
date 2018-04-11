import React from 'react';
import Card from './Card';

const Grid = (props) => (
      <div className="app__row--grid">
      {
        props.content.map((backContent, index) => (
          <Card
            key={index}
            backContent={backContent}
            count={index+1}
          />
        ))
      }
      </div>
);


export default Grid;
