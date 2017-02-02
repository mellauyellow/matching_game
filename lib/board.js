import Deck from './deck';

class Board {
  constructor(width = 13, height = 4) {
    // decided to make the board size configurable, just in case it needed to be changed
    this.width = width;
    this.height = height;
    this.grid = [];
    this.numMatches = 0;
    this.generateBoard();
  }

  generateBoard() {
    const deck = new Deck();

    for (let i = 0; i < this.height; i++) {
      this.grid.push([]);
      for (let j = 0; j < this.width; j++) {
        let card = deck.cards.pop();
        this.grid[i].push(card);
      }
    }
  }

  isWon() {
    return this.numMatches === this.width * this.height / 2;
  }

  isMatch(card1, card2) {
    return card1.value === card2.value;
  }

  recordMatch(card1, card2) {
    this.numMatches += 1;
    card1.declareMatch();
    card2.declareMatch();
  }
}

export default Board;
