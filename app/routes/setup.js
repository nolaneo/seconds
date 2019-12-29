import Route from "@ember/routing/route";

export default class SetupRoute extends Route {
  beforeModel() {
    window.scrollTo(0, 1);
  }
}
