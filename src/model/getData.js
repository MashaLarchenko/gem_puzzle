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

export default { getRandomData, initialData };
