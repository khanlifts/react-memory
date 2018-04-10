import React from 'react';
import Card from './Card';
import AddContent from './AddContent';
import Row from './Row';

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
        <h2>Reactive Memory</h2>
        <AddContent
          content={this.state.content}
          handleAddContent={this.handleAddContent}
          />
        <Row
          content={this.state.content}
          />
      </div>
    );
  }
}
