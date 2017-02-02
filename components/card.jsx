import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {card} = this.props;
    let icon;

    switch (card.suit) {
      case 'hearts':
        icon = <i className={`flaticon-heart ${card.shown}`}></i>;
        break;
      case 'spades':
        icon = <i className={`flaticon-spades ${card.shown}`}></i>;
        break;
      case 'clubs':
        icon = <i className={`flaticon-clover ${card.shown}`}></i>;
        break;
      default:
        icon = <i className={`flaticon-diamond ${card.shown}`}></i>;
    }

    if (card.shown === 'shown') {
      return (
        <div className={`card ${card.shown} ${card.matched}`}>
          <h3 className={card.shown}>{card.value}</h3>
          {icon}
        </div>
      );
    } else {
      return (
        <div className='card' onClick={() => (this.props.updateGame(card))}></div>
      );
    }
  }
}

export default Card;
