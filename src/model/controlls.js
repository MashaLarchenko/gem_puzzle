import View from '../view';
import { initialData, checkforSolvingData } from './getData';

const state = {
  gameTimer: null,
  isPaused: false,
  isStarted: false,
  time: 0,
  data: [],
};

const updateStorage = () => {
  localStorage.state = JSON.stringify(state);
};

const updateGameData = ({ time }) => {
  const timeContainer = document.querySelector('.timer');
  timeContainer.innerHTML = `Time: ${time}`;
};

const getTime = () => setInterval(() => {
  state.time += 1;
  updateGameData(state);
  updateStorage();
  return state.time;
}, 1000);

const startGame = () => {
  if (!localStorage.state) {
    localStorage.setItem('state', JSON.stringify(state));
  }

  state.isStarted = true;
  if (state.isPaused) {
    state.isPaused = false;
    state.gameTimer = getTime();
    updateStorage();
    return;
  }
  const dataArray = checkforSolvingData();
  const puzzle = new View(dataArray);
  puzzle.renderPuzzle();
  state.gameTimer = getTime();
  state.data = dataArray;
  updateStorage();
};

const stopGame = () => {
  state.isPaused = true;
  state.isStarted = false;
  clearInterval(state.gameTimer);
  updateStorage();
};


const resetGame = () => {
  state.isStarted = false;
  state.isPaused = false;
  clearInterval(state.gameTimer);
  state.time = 0;
  state.step = 0;
  updateGameData(state);
  const initialDataArray = initialData(16);
  const puzzle = new View(initialDataArray);
  puzzle.renderPuzzle();
  updateStorage();
};

const closeFinishWindow = (element) => {
  View.delete(element);
};

const getState = () => ({
  data: state.data,
  time: state.time,
  step: state.step,
});

export {
  startGame, stopGame, resetGame, getState, closeFinishWindow,
};
