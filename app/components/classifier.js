import Component from '@glimmer/component';
import words from 'seconds/data/words';
import { tracked } from '@glimmer/tracking';
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
export default class ClassifierComponent extends Component {
  @tracked shuffledWords;
  @tracked word;

  @tracked results = {
    good: 0,
    bad: 0,
    meh: 0,
  };

  constructor() {
    super(...arguments);
    this.shuffledWords = shuffleArray(words);
    this.getNewWord();
  }

  getWords(key) {
    return JSON.parse(localStorage.getItem(key)) ?? [];
  }

  setWords(key, words) {
    localStorage.setItem(key, JSON.stringify(words));
  }

  getNewWord() {
    this.word = this.shuffledWords.pop();
  }

  @action classifyWord(word, classification) {
    console.log('classifyWord');
    set(this.results, classification, this.results[classification] + 1);
    let items = this.getWords(classification);
    items.push(word);
    this.setWords(classification, items);
    this.getNewWord();
  }

  @action keydown(event) {
    console.log('keydown', event);
    event.preventDefault();
    event.stopPropagation();
    if (event.key === 'Enter') {
      this.classifyWord(this.word, 'good');
    } else if (event.code === 'Backspace') {
      this.classifyWord(this.word, 'bad');
    } else if (event.code === 'Space') {
      this.classifyWord(this.word, 'meh');
    }
  }
}
