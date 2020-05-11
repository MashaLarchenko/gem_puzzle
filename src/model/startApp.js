import View from '../view';
import { initialData } from './getData';

export default function startApp() {
  const startWindow = document.querySelector('.start_container');
  View.hide(startWindow);
  const dataArray = initialData(16);
  const puzzle = new View(dataArray);
  puzzle.renderMainWindow();
}
