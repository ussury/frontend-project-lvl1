import { getRandomInt, play } from '../index.js';

const rule = 'What is the result of the expression?';

// eslint-disable-next-line consistent-return
const resultExpression = (one, two, simbol) => {
  if (simbol === '+') return String(one + two);
  if (simbol === '-') return String(one - two);
  if (simbol === '*') return String(one * two);
};

const getSimbol = () => {
  const arr = ['+', '-', '*'];
  const simbol = (coll) => (coll[getRandomInt(arr.length)]);
  return simbol(arr);
};

const addGameData = () => {
  const one = getRandomInt(20);
  const two = getRandomInt(10);
  const simbol = getSimbol();
  console.log(`Question: ${one} ${simbol} ${two}`);
  return resultExpression(one, two, simbol);
};

export default () => play(rule, addGameData);
