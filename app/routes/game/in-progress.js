import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class GameInProgressRoute extends Route {
  @service gameService;

  beforeModel() {
    if (isNaN(this.gameService.numberOfPlayers)) {
      this.transitionTo('game.player-select');
    }
  }
}
