import { getRandomInt, play } from '../index.js';

const rule = 'What is the result of the expression?';

const resultExpression = (firstNumber, secondNumber, simbol) => {
  const operations = {
    '+': String(firstNumber + secondNumber),
    '-': String(firstNumber - secondNumber),
    '*': String(firstNumber * secondNumber),
  };
  return operations[simbol];
};

const getSimbol = () => {
  const arr = ['+', '-', '*'];
  const simbol = (coll) => coll[getRandomInt(arr.length)];
  return simbol(arr);
};

const addGameData = () => {
  const firstNumber = getRandomInt(20);
  const secondNumber = getRandomInt(10);
  const simbol = getSimbol();
  console.log(`Question: ${firstNumber} ${simbol} ${secondNumber}`);
  return resultExpression(firstNumber, secondNumber, simbol);
};

export default () => play(rule, addGameData);
