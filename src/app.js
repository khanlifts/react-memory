class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: props.options
    };
  }
  handleDeleteOptions() {
    // this.setState(() => {
    //   return {
    //     options: []
    //   };
    // });
    // wrap object in braces to use arrow function syntax shorthand
    this.setState(() => ({ options: [] }));
  }
  handlePick() {
    const randomNum = Math.floor((Math.random() * this.state.options.length));
    const options = this.state.options[randomNum];
    alert(options);
  }
  handleAddOption(option) {
    // if there is an empty string
    if (!option) {
      return 'Valid value please';
    // if there is already the same option
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists.';
    }
    this.setState((prevState) => ({ options: prevState.options.concat(option) }));
  }
  render() {
    const subtitle = 'Put your live in the hands of a computer';
    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
          />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          />
        <AddOptions
          options={this.state.options}
          handleAddOption={this.handleAddOption}
          />
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && (<h2>{props.subtitle}</h2>)}
    </div>
  );
}


const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
        >
        What should I do?</button>
    </div>
  );
}

// setting default props
IndecisionApp.defaultProps = {
  options: []
};

Header.defaultProps = {
  title: 'Indecision'
};


const Options = (props) => {
  return (
    <div>
      <h5>Option Component is running</h5>

      <button onClick={props.handleDeleteOptions}>Remove All</button>

      {
        props.options.map((option) => <Option key={option} optionText={option}/>)
      }
      <Option/>
    </div>
  );
}

const Option = (props) => {
  return (
    <div>
      Option: {props.optionText}
    </div>
  );
}


class AddOptions extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(() => ({ error }));
    e.target.elements.option.value = '';

  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}


ReactDOM.render(<IndecisionApp options={['Devils den', 'Second District']}/>, document.getElementById('app'));
