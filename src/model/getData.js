/* eslint-disable no-plusplus */
// import renderGameField from '../view/puzzleContainer';

const getRandomData = (maxNumber) => {
  const sortedArray = [];
  const randomArray = [];
  const blankCell = Math.floor(Math.random() * sortedArray.length);

  for (let i = 1; i <= maxNumber; i++) {
    sortedArray.push(i);
  }

  while (sortedArray.length !== 0) {
    const randomNumber = Math.floor(Math.random() * sortedArray.length);
    randomArray.push(sortedArray[randomNumber]);
    sortedArray.splice(randomNumber, 1);
  }
  randomArray[blankCell] = null;
  //   renderGameField(randomArray);
  return randomArray;
};

const initialData = (maxNumber) => {
  const initialArray = [];
  for (let i = 1; i < maxNumber; i++) {
    initialArray.push(i);
  }
  initialArray.push(null);
  return initialArray;
};

export default { getRandomData, initialData };
