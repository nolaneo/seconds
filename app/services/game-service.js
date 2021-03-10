import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class GameServiceService extends Service {
  numberOfPlayers = undefined;
  @tracked currentPlayer = undefined;
}
