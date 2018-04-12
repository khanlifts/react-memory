import React from 'react';
import Card from './Card';
import Action from './Action';
import Grid from './Grid';
import GithubCorner from 'react-github-corner';

export default class MemoryApp extends React.Component {
  state = {
    content: [],
    duplicates: []
  };
  handleAddContent = (item) => {
    // if there is an empty string
    if (!item) {
      return 'Bitte Inhalt hinzufügen';
    // if there is already the same option. indexOf returns index of option in array
    // - 1 indicates a new option. all other options already have an index
  } else if (this.state.content.indexOf(item) > -1) {
      return 'Diese Karte gibt es bereits';
    }
    // use concat to return new array with merged content of original arrays
    this.setState((prevState) => ({ content: prevState.content.concat(item) }));
  };
  handleDeleteContent = (itemToRemove) => {
    this.setState((prevState) => ({
      content: prevState.content.filter((item) => {
        return itemToRemove !== item;
      })
    }));
    console.log(this.state.content);
  };
  handleDeleteAllContent = () => {
    this.setState(() => ({ content: [] }));
  };
  handleDuplicateContent = () => {
    if (this.state.content.length > 0) {
      const dupArray = this.state.content.reduce((res, current, index, array) => {
        return res.concat([current, current]);
      }, []);
      this.setState(() => ({ content: dupArray }));
    } else if (this.state.content.length === 0) {
      alert('Please enter items first');
    }
  };
  handleSameContent = (item) => {
    if (this.state.duplicates.length < 2) {
      this.setState((prevState) => ({ duplicates: prevState.duplicates.concat(item) }));
      console.log('duplicates: ', this.state.duplicates);
      return
    }
    this.setState(() => ({ duplicates: [] }));
    console.log('duplicates: ', this.state.duplicates);
  };
  handleShuffleContent = () => {
    let shuffArray = this.state.content;
    let currentIndex = shuffArray.length;
    let temporaryValue;
    let randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

     // Pick a remaining element...
     randomIndex = Math.floor(Math.random() * currentIndex);
     currentIndex -= 1;

     // And swap it with the current element.
     temporaryValue = shuffArray[currentIndex];
     shuffArray[currentIndex] = shuffArray[randomIndex];
     shuffArray[randomIndex] = temporaryValue;
   }
    this.setState(() => ({ content: shuffArray }));
  };
  render() {
    return (
      <div className="app__container">
        <h1>Reactive Memory</h1>
        <GithubCorner
          href="https://github.com/khanlifts/react-memory"
          size="100"
          className="gitHubCorner"
          />
        <Action
          content={this.state.content}
          handleAddContent={this.handleAddContent}
          handleDeleteAllContent={this.handleDeleteAllContent}
          handleDuplicateContent={this.handleDuplicateContent}
          handleShuffleContent={this.handleShuffleContent}
          />
        <Grid
          content={this.state.content}
          handleSameContent={this.handleSameContent}
          handleDeleteContent={this.handleDeleteContent}
          />
      </div>
    );
  }
}
