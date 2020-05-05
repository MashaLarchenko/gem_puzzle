import View from '../view';
import getData from './getData';
// import listenEvent from '../controller/eventHandlers';


const startApp = () => {
  const startWindow = document.querySelector('.start_container');
  const dataArray = getData.initialData(16);
  const puzzle = new View(dataArray);
  View.hide(startWindow);
  puzzle.renderMainWindow();
};

const startGame = () => {
  const dataArray = getData.getRandomData(16);
  const puzzle = new View(dataArray);
  puzzle.renderPuzzle();
  console.log(puzzle);
};

export default { startApp, startGame };
