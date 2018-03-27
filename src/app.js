class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your live in the hands of a computer';
    const options = ['One', 'Two', 'Three', 'Four'];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Actions />
        <Options options={options}/>
        <AddOptions options={options}/>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Actions extends React.Component {
  handlePick() {
    alert('handlePick')
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );
  }
}



class Options extends React.Component {
  handleRemoveAll() {
    console.log(this.props.options);
  }
  render() {
    return (
      <div>
        <h5>Option Component is running</h5>

        <button onClick={this.handleRemoveAll.bind(this)}>Remove All</button>

        {
          this.props.options.map((option) => <Option key={option} optionText={option}/>)
        }
        <Option/>
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        Options: {this.props.optionText}
      </div>
    );
  }
}

class AddOptions extends React.Component {
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    if (option) {
      // this.props.options.push(option);
      e.target.elements.option.value = '';
      alert(this.props.options);
      alert(option);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption.bind(this)}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
