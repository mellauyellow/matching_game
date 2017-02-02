import Deck from './deck';

class Board {
  constructor(width = 13, height = 4) {
    this.grid = [];
    this.width = width;
    this.height = height;
    this.numMatches = 0;
    this.matchedCards = [];
    this.generateBoard();
  }

  generateBoard() {
    const deck = new Deck();

    // decided to hard-code the size of the board as 4x13 given a deck of cards will always only have 52 cards in it
    for (let i = 0; i < this.height; i++) {
      this.grid.push([]);
      for (let j = 0; j < this.width; j++) {
        let card = deck.cards.pop();
        card.position = [i, j];
        this.grid[i].push(card);
      }
    }
  }

  isWon() {
    return this.numMatches === 26;
  }

  isMatch(card1, card2) {
    return card1.value === card2.value && card1 !== card2;
  }

  recordMatch(card1, card2) {
    this.numMatches += 1;
    card1.declareMatch();
    card2.declareMatch();
  }
}

export default Board;
