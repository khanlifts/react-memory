import React from 'react';

export default class Action extends React.Component {
  state = {
    error: undefined
  };

  // factored out setErrorState to use it 3x below
  setErrorState = (error) => {
    this.setState(() => ({ error }));
    setTimeout(() => {
      this.setState(() => ({ error: undefined }));
    }, 3000);
  };

  handleAddContent = (e) => {
    e.preventDefault();
    const content = e.target.elements.content.value.trim();
    const error = this.props.handleAddContent(content);
    this.setErrorState(error);
    if (!error) {
      e.target.elements.content.value = '';
    }
  };

  handleDuplicateContent = () => {
    const error = this.props.handleDuplicateContent();
    this.setErrorState(error);
  };

  handleShuffleContent = () => {
    const error = this.props.handleShuffleContent();
    this.setErrorState(error);
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
          <button onClick={this.handleShuffleContent}>mischen</button>
        </div>
      </div>
    );
  }
}
