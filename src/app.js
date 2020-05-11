import View from './view';
import listener from './controller';
// import getLocalData from './model/localData';

export default class App {
  static async start() {
    // const data = await fetch('https://nameless-coast-13908.herokuapp.com/');
    // console.log(data);
    // const localData = getLocalData();
    // if (Object.keys(localData).length !== 0) {
    //   console.log('in l data');
    //   View.renderDataFromStorage(localData);
    //   listener.listenEvents();
    // } else {
    View.renderStartWindow();
    listener.listenStartApp();
    // }
  }
}
