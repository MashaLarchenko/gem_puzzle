/* eslint-disable no-plusplus */

const getRandomData = (maxNumber) => {
  const sortedArray = [];
  const randomArray = [];

  for (let i = 1; i <= maxNumber; i++) {
    sortedArray.push(i);
  }
  sortedArray[15] = null;
  while (sortedArray.length !== 0) {
    const randomNumber = Math.floor(Math.random() * sortedArray.length);
    randomArray.push(sortedArray[randomNumber]);
    sortedArray.splice(randomNumber, 1);
  }
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

const checkforSolvingData = () => {
  const checkingArray = initialData(16);
  const voidCell = checkingArray[checkingArray.length - 1];
  const lastCell = checkingArray[checkingArray.length - 2];
  checkingArray[checkingArray.length - 1] = lastCell;
  checkingArray[checkingArray.length - 2] = voidCell;
  return checkingArray;
};

export { getRandomData, initialData, checkforSolvingData };
