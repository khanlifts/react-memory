import React from 'react';

export default class Card extends React.Component {
  state = {
    flipActive: false,
    deleteButtonActive: false
  };
  handleFlip = () => {
    const currentState = this.state.flipActive
    this.setState(() => ({ flipActive: !currentState }));
    this.props.handleSameContent(this.props.backContent);
  };
  handleDisappear = (e) => {
    e.stopPropagation();
    const deleteBtnState = this.state.deleteButtonActive;
    this.setState(() => ({ deleteButtonActive: !deleteBtnState }));
  };
  render() {
    return (
      <div>
        <div className={this.state.deleteButtonActive ? 'container-hide' : null}>
          <section className="container">
            <div
              id="card"
              className={this.state.flipActive ? 'flipped' : null}
              onClick={this.handleFlip}>
              <figure className="front"><span>{this.props.count}</span></figure>
              <figure className="back">
                <span>{this.props.backContent}</span>
                <button
                  className="card__button"
                  onClick={(e) => {
                    e.stopPropagation();
                    this.props.handleDeleteContent(this.props.backContent);
                  }}
                  >x
                </button>
              </figure>
            </div>
          </section>
        </div>
      </div>
    );
  }
};
