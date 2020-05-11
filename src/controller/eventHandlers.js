import {
  startGame, stopGame, resetGame, closeFinishWindow,
} from '../model/controlls';
import clickPuzzle from '../model/puzzles';
import startApp from '../model/startApp';

const state = {
  isStarted: false,
};

const listenEvents = () => {
  const startGameBtn = document.querySelector('.start_btn');
  const stopGameBtn = document.querySelector('.stop_btn');
  const resetGameBtn = document.querySelector('.reset_btn');
  const puzzlesContainer = document.querySelector('.puzzle_container');
  const isStartGame = document.querySelector('.main_window');

  const start = () => {
    if (state.isStarted === false) {
      startGame();
    }
    state.isStarted = true;
    puzzlesContainer.addEventListener('click', (event) => {
      if (event.target.classList.contains('puzzle_item') && state.isStarted) {
        clickPuzzle(event.target);
      }
    });
  };

  if (isStartGame) {
    startGameBtn.addEventListener('click', start);
    stopGameBtn.addEventListener('click', () => {
      state.isStarted = false;
      stopGame();
    });
    resetGameBtn.addEventListener('click', () => {
      state.isStarted = false;
      resetGame();
    });
  }
};

const closeFinishWindowListner = (event) => {
  if (event.target.classList.contains('solved_window_wrapper')) {
    closeFinishWindow(event.target);
    document.removeEventListener('click', closeFinishWindowListner);
    listenEvents();
    state.isStarted = false;
  }
};
document.body.addEventListener('click', closeFinishWindowListner);

const listenStartApp = () => {
  const startAppBtn = document.querySelector('.startApp_btn');
  startAppBtn.addEventListener('click', () => {
    startApp();
    listenEvents();
  });
};

export default { listenEvents, listenStartApp };
