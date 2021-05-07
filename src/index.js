import readlineSync from 'readline-sync';

const getUserName = () => readlineSync.question('May I have your name? ');
const userResponse = () => readlineSync.question('Your answer: ');
export const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

export const getBrainGames = (rule) => {
  if (rule === undefined) {
    console.log('Welcome to the Brain Games!');
    const userName = getUserName();
    return console.log(`Hello, ${userName}!`);
  }
  console.log('Welcome to the Brain Games!');
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);
  console.log(rule);
  return userName;
};

export const play = (rule, addGameData) => {
  const userName = getBrainGames(rule);

  const iter = (acc) => {
    if (acc === 0) {
      return console.log(`Congratulations, ${userName}!`);
    }

    const result = addGameData();
    const response = userResponse();

    if (result === response) {
      console.log('Correct!');
      return iter(acc - 1);
    }
    console.log(`'${response}' is wrong answer ;(. Correct answer was '${result}'.`);
    return console.log(`Let's try again, ${userName}!`);
  };

  return iter(3);
};
