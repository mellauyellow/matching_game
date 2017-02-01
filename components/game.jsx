import React from 'react';
import Board from '../lib/board';
import ReactBoard from './board';


class ReactGame extends React.Component {
  constructor(props) {
    super(props);
    const board = new Board();
    this.state = {
      board: board
    };
  }
  render() {
    return (
      <div className='game'>
        <ReactBoard board={this.state.board}/>
      </div>
    );
  }
}

export default ReactGame;
