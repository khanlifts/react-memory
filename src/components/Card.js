import React from 'react';

export default class Card extends React.Component {
  state = {
    active: false
  };
  handleFlip = () => {
    const currentState = this.state.active
    this.setState(() => ({ active: !currentState }));
    this.props.handleSameContent(this.props.backContent);
  };
  render() {
    return (
      <div>
          <section className="container">
          <div
            id="card"
            className={this.state.active ? 'flipped' : null}
            onClick={this.handleFlip}>
            <figure className="front"><span>{this.props.count}</span></figure>
            <figure className="back"><span>{this.props.backContent}</span></figure>
          </div>
        </section>
      </div>
    );
  }
};
