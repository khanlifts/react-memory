import React from 'react';
import Card from './Card';

const Grid = (props) => (
      <div className="app__grid">
      {
        props.content.map((backContent, index) => (
          <Card
            key={index}
            backContent={backContent}
            count={index+1}
            handleSameContent={props.handleSameContent}
            handleDeleteContent={props.handleDeleteContent}
          />
        ))
      }
      </div>
);


export default Grid;
