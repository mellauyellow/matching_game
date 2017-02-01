import Card from './card';

const suits = [
  'hearts',
  'diamonds',
  'spades',
  'clubs'
];

const values = [
  'A',
  'K',
  'Q',
  'J',
  '10',
  '9',
  '8',
  '7',
  '6',
  '5',
  '4',
  '3',
  '2'
];

class Deck {
  constructor() {
    this.cards = this.createDeck();
    this.shuffleCards();
  }

  createDeck() {
    let cards = [];

    suits.forEach(value => {
      values.forEach(suit => {
        cards.push(new Card(value, suit));
      });
    });

    return cards;
  }

  shuffleCards() {
    // using the Fisher-Yates shuffle algorithm: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
    let counter = this.cards.length;

    while (counter > 0) {
      let randomIndex = Math.floor(Math.random * counter);

      counter--;

      let temp = this.cards[counter];
      this.cards[counter] = this.cards[randomIndex];
      this.cards[randomIndex] = temp;
    }
  }
}

export default Deck;
