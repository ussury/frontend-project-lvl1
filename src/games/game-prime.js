import { play, getRandomInt } from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const calculatePrimeNum = (num) => {
  for (let i = 2; i < Math.floor(num / 2) + 1; i += 1) {
    if (num % i === 0) return 'no';
  }
  return 'yes';
};

const addGameData = () => {
  const randomNumber = getRandomInt(98) + 2;
  console.log(`Question: ${randomNumber}`);
  return calculatePrimeNum(randomNumber);
};

export default () => play(rule, addGameData);
