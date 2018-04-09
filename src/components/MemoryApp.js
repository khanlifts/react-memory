import React from 'react';
import Card from './Card';
import AddContent from './AddContent';

export default class MemoryApp extends React.Component {
  state = {
    content: []
  };
  handleAddContent = (content) => {
    // if there is an empty string
    if (!content) {
      return 'Valid value please';
    // if there is already the same entry. indexOf returns index of option in array
    // - 1 indicates a new entry. all other entries already have an index
  } else if (this.state.content.indexOf(content) > -1) {
      return 'This option already exists.';
    }
    // use concat return new array with merged content of original arrays
    this.setState((prevState) => ({ content: prevState.content.concat(content) }));
  };
  render() {
    return (
      <div className="app__container">
        <h2>This renders correctly</h2>
        <AddContent
          options={this.state.content}
          handleAddContent={this.handleAddContent}
          />
        <Card />
      </div>
    );
  }
}
