import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {card} = this.props;
    return (
      <div className='card'>
        <h3>{card.value}</h3>
      </div>
    );
  }
}

export default Card;
