import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking';

export default class TestCompComponent extends Component {
  @tracked json;

  constructor(){
    super(...arguments);
    this.loadJSON();
  }

  async loadJSON(){
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let json = await response.json();
    this.json = JSON.stringify(json);
    console.log(typeof(json));
  }
}
