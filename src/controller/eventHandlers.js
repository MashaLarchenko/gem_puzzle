import { startGame, stopGame, resetGame } from '../model/controlls';
import clickPuzzle from '../model/puzzles';

import startApp from '../model/startApp';

const state = {
  isStarted: false,
};

const listenEvents = () => {
  const startGameBtn = document.querySelector('.start_btn');
  const stopGameBtn = document.querySelector('.stop_btn');
  const resetGameBtn = document.querySelector('.reset_btn');
  // const puzzles = document.querySelectorAll('.puzzle_item');
  const puzzlesContainer = document.querySelector('.puzzle_container');


  const isStartGame = document.querySelector('.main_window');
  const start = () => {
    if (state.isStarted === false) {
      startGame();
    }
    state.isStarted = true;
    console.log(111111, puzzlesContainer);

    puzzlesContainer.addEventListener('click', (event) => {
      if (event.target.classList.contains('puzzle_item')) {
        console.log('clicked');
        clickPuzzle(event.target);
      }
    });
    // puzzles.forEach((puzzle) => {
    //   console.log(puzzle);
    //   puzzle.addEventListener('click', () => {
    //     console.log('clicked');
    //   });
    // return puzzle.addEventListener('click', (event) => {
    //   console.log(event);
    //   clickPuzzle(event.target);
    // });
    // });
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

  // if (state.isStarted) {
  //   console.log(111111);
  //   pussles.forEach((puzzle) => {
  //     puzzle.addEventListener('click', (event) => {
  //       clickPuzzle(event.target);
  //     });
  //   });
  // }
};

const listenStartApp = () => {
  const startAppBtn = document.querySelector('.startApp_btn');
  startAppBtn.addEventListener('click', () => {
    startApp();
    listenEvents();
  });
};

export default { listenEvents, listenStartApp };
