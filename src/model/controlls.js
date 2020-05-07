import View from '../view';
import getData from './getData';

const state = {
  gameTimer: null,
  isPaused: false,
  isStarted: false,
  time: 0,
  data: [],
};

const updateTimerContainer = (time) => {
  const timeContainer = document.querySelector('.timer');
  timeContainer.innerHTML = `Time: ${time}`;
};

const getTime = () => setInterval(() => {
  state.time += 1;
  updateTimerContainer(state.time);
  return state.time;
}, 1000);

const startGame = () => {
  state.isStarted = true;
  if (state.isPaused) {
    state.isPaused = false;
    state.gameTimer = getTime();
    return;
  }
  const dataArray = getData.getRandomData(16);
  const puzzle = new View(dataArray);
  puzzle.renderPuzzle();
  state.gameTimer = getTime();
  state.data = dataArray;
};

const stopGame = () => {
  state.isPaused = true;
  state.isStarted = false;
  clearInterval(state.gameTimer);
};


const resetGame = () => {
  state.isStarted = false;
  state.isPaused = false;
  clearInterval(state.gameTimer);
  state.time = 0;
  updateTimerContainer(state.time);
  const initialDataArray = getData.initialData(16);
  const puzzle = new View(initialDataArray);
  puzzle.renderPuzzle();
};

const getDataArray = () => state.data;

export {
  startGame, stopGame, resetGame, getDataArray,
};
