import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class PlayerSelectComponent extends Component {
  @service gameService;
  @service router;

  @action setPlayers(numberOfPlayers) {
    console.log('SET PLAYERS', numberOfPlayers);
    this.gameService.numberOfPlayers = numberOfPlayers;
    this.router.transitionTo('game.in-progress');
  }
}
