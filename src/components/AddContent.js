import React from 'react';

export default class AddContent extends React.Component {
  state = {
    error: undefined
  };

  handleAddContent = (e) => {
    e.preventDefault();
    const content = e.target.elements.content.value.trim();
    const error = this.props.handleAddContent(content);
    console.log(error);
    console.log(content);
    this.setState(() => ({ error }));
    if (!error) {
      e.target.elements.content.value = '';
    }
  };
  render() {
    return (
      // {this.state.error && <p className="add-content-error">{this.state.error}</p>}
      <form className="add-content" onSubmit={this.handleAddContent}>
        <input className="add-content__input" type="text" name="content"/>
        <button className="button">Add Content</button>
      </form>
    );
  }
}
