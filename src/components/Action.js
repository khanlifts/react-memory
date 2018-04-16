import React from 'react';

export default class Action extends React.Component {
  state = {
    error: undefined,
    duplicates: undefined
  };

  handleAddContent = (e) => {
    e.preventDefault();
    const content = e.target.elements.content.value.trim();
    const error = this.props.handleAddContent(content);
    this.setState(() => ({ error }));
    setTimeout(() => {
      this.setState(() => ({ error: undefined }));
    }, 3000);
    if (!error) {
      e.target.elements.content.value = '';
    }
  };

  handleDuplicateContent = () => {
    const error = this.props.handleDuplicateContent();
    this.setState(() => ({ error }));
    setTimeout(() => {
      this.setState(() => ({ error: undefined }));
    }, 2000);
  };

  render() {
    return (
      <div>
        {this.state.error && <p className="add-content-error">{this.state.error}</p>}
        <form className="add-content" onSubmit={this.handleAddContent}>
          <input className="add-content__input" type="text" name="content"/>
        </form>
        <div className="add-content__buttons">
          <button onClick={this.props.handleDeleteAllContent}>alle löschen</button>
          <button onClick={this.handleDuplicateContent}>duplizieren</button>
          <button onClick={this.props.handleShuffleContent}>mischen</button>
        </div>
      </div>
    );
  }
}
