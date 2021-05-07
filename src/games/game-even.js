import { getRandomInt, play } from '../index.js';

const parityCheck = (num) => (num % 2 === 0 ? 'yes' : 'no');
const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const f = () => {
  const value = getRandomInt(99);
  console.log(`Question: ${value}`);
  return parityCheck(value);
};

export default () => play(rule, f);
