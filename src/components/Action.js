import React from 'react';

export default class Action extends React.Component {
  state = {
    error: undefined
  };

  handleAddContent = (e) => {
    e.preventDefault();
    const content = e.target.elements.content.value.trim();
    const error = this.props.handleAddContent(content);
    this.setState(() => ({ error }));
    if (!error) {
      e.target.elements.content.value = '';
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p className="add-content-error">{this.state.error}</p>}
        <form className="add-content" onSubmit={this.handleAddContent}>
          <input className="add-content__input" type="text" name="content"/>
          <div class="add-content__buttons">
            <button>Add Content</button>
            <button onClick={this.props.handleDeleteAllContent}>Remove All</button>
            <button onClick={this.props.handleDuplicateContent}>Duplicate All</button>
            <button onClick={this.props.handleShuffleContent}>Shuffle</button>
          </div>
        </form>
      </div>
    );
  }
}
