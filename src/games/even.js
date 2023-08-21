import startGame from '../index.js';
import { getRandomNum, isEven } from '../utilities.js';

const answerAndQuestion = () => {
  const question = getRandomNum(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => {
  startGame('Answer "yes" if the number is even, otherwise answer "no".', answerAndQuestion);
};
