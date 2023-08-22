import startGame from '../index.js';
import { getRandomNum } from '../utilities.js';

const Gcd = (num1, num2) => {
  if (!num1 || !num2) return num1 + num2;
  if (num1 > num2) return Gcd(num1 - num2, num2);

  return Gcd(num1, num2 - num1);
};

const answerAndQuestion = () => {
  const num1 = getRandomNum(1, 50);
  const num2 = getRandomNum(1, 50);

  const question = `${num1} ${num2}`;
  const answer = String(Gcd(num1, num2));

  return [question, answer];
};

export default () => {
  startGame('Find the greatest common divisor of given numbers', answerAndQuestion);
};
