import View from './view';
import listener from './controller';

export default class App {
  static async start() {
    View.renderStartWindow();
    listener.listenStartApp();
  }
}
