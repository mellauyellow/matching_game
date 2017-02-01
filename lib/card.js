class Card {
  constructor(value, suit) {
    this.value = value;
    this.suit = suit;
    this.shown = false;
    this.matched = false;
    this.position = null;
  }

  toggleCardShown() {
    this.shown = !this.shown;
  }

  declareMatch() {
    this.matched = true;
  }
}

export default Card;
