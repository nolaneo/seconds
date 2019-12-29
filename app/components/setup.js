import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class SetupComponent extends Component {
  @tracked setupProgress = "start";

  @action startSetup() {
    this.setupProgress = "select-teams";
  }
}
