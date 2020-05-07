import View from '../view';
import getData from './getData';

export default function startApp() {
  const startWindow = document.querySelector('.start_container');
  const dataArray = getData.initialData(16);
  const puzzle = new View(dataArray);
  View.hide(startWindow);
  puzzle.renderMainWindow();
}
