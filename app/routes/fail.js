import Route from '@ember/routing/route';

export default class FailRoute extends Route {
  model(){
    return "this doesn't matter";
  }
}
