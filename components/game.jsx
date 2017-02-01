import React from 'react';
import Board from '../lib/board';
import ReactBoard from './board';


class ReactGame extends React.Component {
  constructor(props) {
    super(props);
    const board = new Board();
    this.state = {
      board: board,
      card1: null
    };
    this.updateGame = this.updateGame.bind(this);
  }

  updateGame(card) {
    card.toggleCardShown();

    if (!this.state.card1) {
      this.setState({card1: card});
    } else if (this.state.board.isMatch(card, this.state.card1)) {
      this.state.board.recordMatch(card, this.state.card1);
      this.setState({board: this.state.board, card1: null});
    } else {
      setTimeout(() => {
        card.toggleCardShown();
        this.state.card1.toggleCardShown();
        this.setState({card1: null});
      }, 3000);
    }
  }

  render() {
    return (
      <div className='game'>
        <ReactBoard board={this.state.board} updateGame={this.updateGame}/>
      </div>
    );
  }
}

export default ReactGame;
