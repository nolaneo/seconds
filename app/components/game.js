import Component from '@glimmer/component';
import words from 'seconds/data/words';
import { task } from 'ember-concurrency-decorators';
import { timeout } from 'ember-concurrency';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export default class GameComponent extends Component {
  @service gameService;
  @tracked shuffledWords;
  @tracked card;
  @tracked time;
  @tracked playerReady = false;
  @tracked showScoreSelect = false;

  constructor() {
    super(...arguments);
    this.shuffledWords = shuffleArray(words);
    this.gameService.currentPlayer = 0;
  }

  @task *countdown() {
    for (let i = 30; i > 0; --i) {
      this.time = i;
      yield timeout(1000);
    }
  }

  @action addScore(score) {
    console.log(score);
  }
}
