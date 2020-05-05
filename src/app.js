import View from './view';
import listener from './controller';
// import random from './model/getData';

export default class App {
  static async start() {
    View.renderStartWindow();
    listener.listenStartApp();

    //  const dataArray = random(16);
  }
}
