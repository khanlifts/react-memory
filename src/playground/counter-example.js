class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }
  // Lifecycle Methods
  componentDidMount() {
    try {
      const stringCount = localStorage.getItem('count');
      // turn string into number
      const count = parseInt(stringCount, 10);
      // if count is a number
      if (!isNaN(count)) {
        this.setState(() => ({ count }));
      }
    } catch (e) {
      // if json is invalid do nothing at all
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      // will store count as string
      localStorage.setItem('count', this.state.count);
    }
  }
  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
          <button onClick={this.handleAddOne}>+1</button>
          <button onClick={this.handleMinusOne}>-1</button>
          <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

// let count = 0;
//
// const addOne = () => {
//   count++;
//   renderTemplateTwo();
// }
//
// const minusOne = () => {
//   count--;
//   renderTemplateTwo();
//
// }
// const reset = () => {
//   count = 0;
//   renderTemplateTwo();
// }
//
//
// const renderTemplateTwo = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>minusOne</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );
//   ReactDOM.render(templateTwo, appRoot);
// }
//
// renderTemplateTwo();
