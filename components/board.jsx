import React from 'react';
import ReactCard from './card';

class ReactBoard extends React.Component {
  constructor(props) {
    super(props);
  }

  renderCards(row, rowIndex) {
    return row.map((card, cardIndex) => {
      return (
        <ReactCard
          card={card}
          key={`${rowIndex}-${cardIndex}`}
          updateGame={this.props.updateGame}
          hasTwoCardsShowing={this.props.hasTwoCardsShowing}/>
      );
    });
  }

  renderRows() {
    const grid = this.props.board.grid;

    return grid.map((row, i) => {
      return (
        <div className="row" key={`row${i}`}>
          {this.renderCards(row, i)}
        </div>
      );
    });
  }

  render() {
    return (
      <div className='board'>
        {this.renderRows()}
      </div>
    );
  }
}

export default ReactBoard;
