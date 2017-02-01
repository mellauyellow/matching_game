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

    suits.forEach(suit => {
      values.forEach(value => {
        cards.push(new Card(value, suit));
      });
    });

    return cards;
  }

  shuffleCards() {
    // using the Fisher-Yates shuffle algorithm to shuffle deck in place: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
    let currIndex = this.cards.length;

    while (currIndex > 0) {
      let randomIndex = Math.floor(Math.random() * currIndex);

      currIndex--;

      let temp = this.cards[currIndex];
      this.cards[currIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temp;
    }
  }
}

export default Deck;
