import { getRandomInt, play } from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const commonDivisor = (num1, num2) => {
  if (num2 > num1) return commonDivisor(num2, num1);
  if (!num2) return String(num1);
  return commonDivisor(num2, num1 % num2);
};

const addGameData = () => {
  const firstNumber = getRandomInt(99);
  const secondNumber = getRandomInt(99);
  console.log(`Question: ${firstNumber} ${secondNumber}`);
  return commonDivisor(firstNumber, secondNumber);
};

export default () => play(rule, addGameData);
