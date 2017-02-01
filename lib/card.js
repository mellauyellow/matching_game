class Card {
  constructor(value, suit) {
    this.value = value;
    this.suit = suit;
    this.shown = 'hidden';
    this.matched = 'unmatched';
    this.position = null;
  }

  toggleCardShown() {
    this.shown = this.shown === 'hidden' ? 'shown' : 'hidden';
  }

  declareMatch() {
    this.matched = 'matched';
  }
}

export default Card;
