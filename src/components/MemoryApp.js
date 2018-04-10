import React from 'react';
import Card from './Card';
import AddContent from './AddContent';

export default class MemoryApp extends React.Component {
  state = {
    content: []
  };
  handleAddContent = (content) => {
    // use concat to return new array with merged content of original arrays
    this.setState((prevState) => ({ content: prevState.content.concat(content) }));
    console.log(this.state.content);
  };
  render() {
    return (
      <div className="app__container">
        <h2>This renders correctly</h2>
        <AddContent
          content={this.state.content}
          handleAddContent={this.handleAddContent}
          />
        {
          this.state.content.map((backContent, index) => (
            <Card
              key={backContent}
              backContent={backContent}
              count={index+1}
            />
          ))
        }
      </div>
    );
  }
}
