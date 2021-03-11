import Component from '@glimmer/component';
import words from 'seconds/data/words';
import { task } from 'ember-concurrency-decorators';
import { timeout } from 'ember-concurrency';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { set } from '@ember/object';

function shuffleArray(input) {
  let array = [...input];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default class GameComponent extends Component {
  @service gameService;
  @tracked shuffledWords;
  @tracked card;
  @tracked time;
  @tracked playerReady = false;
  @tracked showScoreSelect = false;
  @tracked waiting = false;
  @tracked scores = [];

  constructor() {
    super(...arguments);
    this.shuffledWords = shuffleArray(words);
    this.gameService.currentPlayer = 0;
    this.scores = new Array(this.gameService.numberOfPlayers).fill(0);
    this.waiting = true;
  }

  get remainingTimePercentage() {
    return (this.time / 30.0) * 100;
  }

  get bgColor() {
    if (this.time > 15) {
      return 'bg-green-500';
    } else if (this.time > 5) {
      return 'bg-yellow-500';
    } else {
      return 'bg-red-500';
    }
  }

  @task *countdown() {
    document.querySelector('audio')?.play();
    for (let i = 30; i > 0; --i) {
      this.time = i;
      yield timeout(1000);
    }
    this.showScoreSelect = true;
  }

  @action ready() {
    this.card = [];
    for (let i = 0; i < 5 && i < this.shuffledWords.length; ++i) {
      this.card.push({ word: this.shuffledWords.pop(), correct: false });
    }
    this.waiting = false;
    this.showScoreSelect = false;
    this.countdown.perform();
  }

  @action addScore() {
    let score = this.card.filter((card) => card.correct).length;
    this.scores[this.gameService.currentPlayer] += score;
    this.nextPlayer();
  }

  @action toggleScore(item) {
    set(item, 'correct', !item.correct);
  }

  nextPlayer() {
    this.gameService.currentPlayer += 1;
    this.gameService.currentPlayer =
      this.gameService.currentPlayer % this.gameService.numberOfPlayers;
    this.waiting = true;
    this.showScoreSelect = false;
  }
}
