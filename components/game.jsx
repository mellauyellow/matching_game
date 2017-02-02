import React from 'react';
import Board from '../lib/board';
import ReactBoard from './board';

class ReactGame extends React.Component {
  constructor(props) {
    super(props);
    const board = new Board();
    this.state = {
      board: board,
      card1: null,
      card2: null
    };
    this.updateGame = this.updateGame.bind(this);
    this.newGame = this.newGame.bind(this);
  }

  componentDidUpdate() {
    if (this.state.card1 && this.state.card2) {
      setTimeout(() => (this.checkforMatch()), 1500);
    }
  }

  updateGame(card) {
    card.toggleCardShown();
    if (!this.state.card1) {
      this.setState({card1: card});
    } else if (card === this.state.card1) {
      this.setState({card1: null});
    } else {
      this.setState({card2: card});
    }
  }

  checkforMatch() {
    const card1 = this.state.card1,
          card2 = this.state.card2,
          board = this.state.board;

    if (board.isMatch(card1, card2)) {
      board.recordMatch(card1, card2);
      this.setState({board: board, card1: null, card2: null});
    } else {
      card1.toggleCardShown();
      card2.toggleCardShown();
      this.setState({board: board, card1: null, card2: null});
    }
  }

  newGame() {
    const board = new Board();
    this.setState({board: board, card1: null, card2: null});
  }

  render() {
    let modal;
    if (this.state.board.isWon()) {
      modal = (
        <div className='modal'>
          <div className='modal-text'>
            <h3>You've won!</h3>
            <h4>Would you like to play again?</h4>
            <button onClick={this.newGame}>Play again</button>
          </div>
        </div>
      );
    }

    return (
      <div className='game'>
        <h2>Card Matching Game</h2>
        <h4>Number of Matches: {this.state.board.numMatches}</h4>
        {modal}
        <ReactBoard board={this.state.board} updateGame={this.updateGame}/>
      </div>
    );
  }
}

export default ReactGame;
