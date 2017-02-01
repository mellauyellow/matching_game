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
      setTimeout(() => (this.checkforMatch()), 2000);
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
    if (this.state.board.isMatch(this.state.card1, this.state.card2)) {
     this.state.board.recordMatch(this.state.card1, this.state.card2);
     this.setState({board: this.state.board, card1: null, card2: null});
   } else {
     this.state.card1.toggleCardShown();
     this.state.card2.toggleCardShown();
     this.setState({board: this.state.board, card1: null, card2: null});
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
            <h2>You've won!</h2>
            <h3>Would you like to play again?</h3>
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
