import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  beforeModel(transition) {
    if (transition.intent.url == '/') {
      this.transitionTo('game.player-select');
    }
  }
}
