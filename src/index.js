import readlineSync from 'readline-sync';

const getUserName = () => readlineSync.question('May I have your name? ');
const userResponse = () => readlineSync.question('Your answer: ');
export const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const helloUser = (rule) => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);
  console.log(rule);
  return userName;
};

export const play = (rule, foo) => {
  const userName = helloUser(rule);

  const iter = (acc) => {
    if (acc === 0) {
      return console.log(`Congratulations, ${userName}!`);
    }

    const result = foo();
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
