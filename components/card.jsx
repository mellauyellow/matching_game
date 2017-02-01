import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {card} = this.props;
    return (
      <div className={`card ${card.shown} ${card.matched}`} onClick={() => (this.props.updateGame(card))}>
        <h3 className={card.shown}>{card.value}</h3>
      </div>
    );
  }
}

export default Card;
