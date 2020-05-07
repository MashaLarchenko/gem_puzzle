/* eslint-disable max-len */
import { getDataArray } from './controlls';
import updateGameField from '../view/puzzleContainer';

const state = {
  voidCellId: 16,
  voidPuzzle: '',
  pickedPuzzle: '',
  currentId: 0,
};

const isSwipe = () => {
  const data = getDataArray();
  state.data = data;
  const id = +state.currentId;
  const voidCell = +state.voidCellId;

  if (id + 1 === voidCell || id - 1 === voidCell || id + 4 === voidCell || id - 4 === voidCell) {
    data[id - 1] = null;
    data[voidCell - 1] = state.pickedPuzzle;
    state.id = voidCell;
    state.voidCellId = id;
    updateGameField(state.data);
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
