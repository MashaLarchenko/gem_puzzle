/* eslint-disable max-len */
import { getState, stopGame } from './controlls';
import updateGameField from '../view/puzzleContainer';
import { initialData } from './getData';
import solvedPuzzleWindow from '../view/solvedPuzzle';

const state = {
  voidCellId: 16,
  voidPuzzle: '',
  pickedPuzzle: '',
  currentId: 0,
  data: [],
  step: 0,
};

const updateStepsContainer = (step) => {
  const stepContainer = document.querySelector('.movesCount');
  stepContainer.innerHTML = `Step: ${step}`;
};

const isPuzzleSolved = () => {
  const dataToString = state.data.toString();
  const solvedData = initialData(16);
  const initDataToString = solvedData.toString();
  let isSolved = false;
  if (dataToString === initDataToString) isSolved = true;
  return isSolved;
};

const isSwipe = () => {
  const gameData = getState();
  const { data, time } = gameData;
  state.data = data;
  const id = +state.currentId;
  const voidCell = +state.voidCellId;

  if (id + 1 === voidCell || id - 1 === voidCell || id + 4 === voidCell || id - 4 === voidCell) {
    data[id - 1] = null;
    data[voidCell - 1] = state.pickedPuzzle;
    state.id = voidCell;
    state.voidCellId = id;
    updateGameField(state.data);
    const isSolved = isPuzzleSolved();
    state.step += 1;
    updateStepsContainer(state.step);
    const { step } = state;
    const localState = localStorage.getItem('state');
    const localData = JSON.parse(localState);
    localData.step = step;
    localStorage.state = JSON.stringify(localData);
    console.log(step, localData.step);
    if (isSolved) {
      solvedPuzzleWindow(time, step);
      stopGame();
    }
  }
};


export default function clickPuzzle(puzzle) {
  const id = puzzle.classList[1];
  const voidPuzzle = document.querySelector('.void_cell');
  const voidId = voidPuzzle.classList[1];
  state.voidPuzzle = voidPuzzle.innerText;
  state.voidCellId = voidId;
  state.currentId = id;
  if (puzzle.classList.contains('void_cell')) {
    return;
  }
  state.pickedPuzzle = puzzle.innerText;
  isSwipe();
}
