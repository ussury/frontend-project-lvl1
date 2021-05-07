import { play, getRandomInt } from '../index.js';

const randomInt = (coll) => (coll[getRandomInt(coll.length - 1)]); // typeof String
const rule = 'What number is missing in the progression?';

const getProgressionArr = () => {
  const arr = [];
  let count = getRandomInt(5);
  const step = getRandomInt(4) + 1; // +1 что бы не было нулевого шага
  for (let i = 1; i < 11; i += 1) {
    arr.push(String(count));
    count += step;
  }
  return arr;
};

const consoleArr = (coll, random) => {
  const newColl = [];
  const val = '..';
  for (let i = 0; i < coll.length; i += 1) {
    if (coll[i] === random) {
      // eslint-disable-next-line no-param-reassign
      coll[i] = val;
    }
    newColl.push(coll[i]);
  }
  return newColl.join(' ');
};

const addGameData = () => {
  const progressColl = getProgressionArr();
  const result = randomInt(progressColl);
  const resultColl = consoleArr(progressColl, result);
  console.log(`Question: ${resultColl}`);
  return result;
};

export default () => play(rule, addGameData);
