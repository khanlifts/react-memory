class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      show: false
    }
  }
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        show: !prevState.show
      };
    });
  }
  render() {
    return (
      <div>
       <h1>Visibility Toggle</h1>
       <button onClick={this.handleToggleVisibility}>{this.state.show ? 'Hide Details' : 'Show Details'}</button>
       {this.state.show && (
              <div>
                <p>You can now see this</p>
              </div>
            )}
      </div>
    );
  }
}

const appRoot = document.getElementById('app');

ReactDOM.render(<VisibilityToggle />, appRoot);


// let show = false;
//
// const onShowDetails = () => {
//   show = !show;
//   renderTemplate();
// };
//
// const renderTemplate = () => {
//    const jsx = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={onShowDetails}>{show ? 'Hide Details' : 'Show Details'}</button>
//       {show && (
//         <div>
//           <p>You can now see this</p>
//         </div>
//       )}
//     </div>
//   );
//
//   ReactDOM.render(jsx, appRoot);
// };
//
// renderTemplate();
