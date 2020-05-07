/* eslint-disable no-plusplus */
import Puzzle from './puzzleItem';


export default function renderGameField(puzzles) {
  const puzzleContainer = document.querySelector('.puzzle_container');
  if (puzzleContainer) {
    const list = puzzles.map((puzzleItem, index) => {
      const puzzleEl = new Puzzle({ id: index, number: puzzleItem });
      return puzzleEl.render();
    });
    puzzleContainer.innerHTML = list.join('');
  }
}
