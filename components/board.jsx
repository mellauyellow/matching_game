import React from 'react';
import ReactCard from './card';

class ReactBoard extends React.Component {
  constructor(props) {
    super(props);
  }

  renderCards(row) {
    return row.map((card) => {
      return (
        <ReactCard
          card={card}
          key={`${card.value}${card.suit}`}
          updateGame={this.props.updateGame} />
      );
    });
  }

  renderRows() {
    const grid = this.props.board.grid;

    return grid.map((row, i) => {
      return (
        <div className="row" key={`row${i}`}>
          {this.renderCards(row)}
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
