import React from 'react';

export default class Card extends React.Component {
  state = {
    active: false
  };
  handleFlip = () => {
    const currentState = this.state.active
    this.setState(() => ({ active: !currentState }));
  };
  render() {
    return (
      <div>
        <p>{this.props.title}</p>
          <section className="container">
          <div
            id="card"
            className={this.state.active ? 'flipped' : null}
            onClick={this.handleFlip}>
            <figure className="front"><span>1</span></figure>
            <figure className="back"><span>2</span></figure>
          </div>
        </section>
      </div>
    );
  }
};


// setting default props
Card.defaultProps = {
  title: 'React Memory'
};
