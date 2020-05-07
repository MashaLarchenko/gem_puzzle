/* eslint-disable no-param-reassign */
import renderGameField from './puzzleContainer';
import renderGameController from './gameController';

export default class View {
  constructor(number) {
    this.number = number;
  }

  static renderStartWindow() {
    const headerNav = document.createElement('header');
    headerNav.innerText = 'Gem puzzle';
    headerNav.classList.add('header');
    const startWindow = document.createElement('div');
    startWindow.classList.add('start_container');
    const startBtn = document.createElement('button');
    startBtn.innerText = 'Start game';
    startBtn.classList.add('startApp_btn');
    document.body.appendChild(headerNav);
    document.body.appendChild(startWindow);
    startWindow.appendChild(startBtn);
  }

  renderMainWindow() {
    const wrapper = document.createElement('div');
    const mainContainer = document.createElement('div');
    const puzzleContainer = document.createElement('div');
    puzzleContainer.classList.add('puzzle_container');
    wrapper.classList.add('wrapper');
    mainContainer.classList.add('main_window');

    document.body.appendChild(wrapper);
    wrapper.appendChild(mainContainer);
    const gameController = renderGameController(0, 0);
    mainContainer.appendChild(gameController);
    mainContainer.appendChild(puzzleContainer);
    renderGameField(this.number);
  }

  renderPuzzle() {
    renderGameField(this.number);
  }

  static show(element, display = 'block') {
    element.style.display = display;
  }

  static hide(element) {
    element.style.display = 'none';
  }
}
