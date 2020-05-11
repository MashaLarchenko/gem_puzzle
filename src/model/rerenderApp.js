import renderGameField from '../view/puzzleContainer';
import renderGameController from '../view/gameController';

export default function rerenderApp(state) {
  const mainContainer = document.querySelector('.main_window');
  const controllerContainer = document.querySelector('.controller_container');
  controllerContainer.parentNode.removeChild(controllerContainer);
  renderGameController(state.time, state.move);
  mainContainer.appendChild(controllerContainer);
  renderGameField(state.data);
}
