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
          <div className="add-content__buttons">
            <button>hinzufügen</button>
            <button onClick={this.props.handleDeleteAllContent}>alle löschen</button>
            <button onClick={this.props.handleDuplicateContent}>duplizieren</button>
            <button onClick={this.props.handleShuffleContent}>mischen</button>
          </div>
        </form>
      </div>
    );
  }
}
