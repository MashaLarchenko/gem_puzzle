/* eslint-disable no-plusplus */
import Puzzle from './puzzleItem';


export default function renderGameField(puzzles) {
  const puzzleContainer = document.querySelector('.puzzle_container');
  if (puzzleContainer) {
    const list = puzzles.map((puzzle, index) => {
      const puzzleEl = new Puzzle({ id: index, number: puzzle });
      return puzzleEl.render();
    });
    puzzleContainer.innerHTML = list.join('');
  }

  //   document.body.appendChild(puzzleContainer);
  // return puzzleContainer;
}
