import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOptions from './AddOptions';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };
  // indecision methdos
  handleDeleteOptions = () => {
    // wrap object in braces to use arrow function syntax shorthand
    this.setState(() => ({ options: [] }));
  };
  handleDeleteOption = (optionsToRemove) => {
    // put braces around object when returning implicitly
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionsToRemove !== option;
      })
    }));
  };
  handlePick = () => {
    const randomNum = Math.floor((Math.random() * this.state.options.length));
    const option = this.state.options[randomNum];
    this.setState(() => ({
      selectedOption: option
    }));
  };
  handleAddOption = (option) => {
    // if there is an empty string
    if (!option) {
      return 'Valid value please';
    // if there is already the same option. indexOf returns index of option in array
    // - 1 indicates a new option. all other options already have an index
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists.';
    }
    // use concat return new array with merged content of original arrays
    this.setState((prevState) => ({ options: prevState.options.concat(option) }));
  };
  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };
  // Lifecycle methods
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // if json is invalid do nothing at all
    }
  }
  // store state to preserve data through updates
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  render() {
    const subtitle = 'Put your live in the hands of a computer';
    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
            />
          <div class="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
              />
            <AddOptions
              options={this.state.options}
              handleAddOption={this.handleAddOption}
              />
          </div>
          <OptionModal
            selectedOption={this.state.selectedOption}
            handleClearSelectedOption={this.handleClearSelectedOption}
            />
        </div>
      </div>
    );
  }
}
