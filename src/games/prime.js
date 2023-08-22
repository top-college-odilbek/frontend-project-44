import startGame from '../index.js';
import { getRandomNum } from '../utilities.js';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const answerAndQuestion = () => {
  const question = getRandomNum(2, 100);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => {
  startGame('Answer "yes" if given number is prime. Otherwise answer "no"', answerAndQuestion);
};
