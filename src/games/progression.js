import startGame from '../index.js';
import { getRandomNum } from '../utilities.js';

const getArithmeticProgression = () => {
  let num = getRandomNum(0, 50);
  const step = getRandomNum(2, 5);
  const progressionArray = [];

  for (let i = 0; i < 10; i += 1) {
    progressionArray.push(num);
    num += step;
  }
  return progressionArray;
};

const answerAndQuestion = () => {
  const progressionArray = getArithmeticProgression(); // generate array of nums
  const index = getRandomNum(0, 10); // found index of random num

  const answer = String(progressionArray[index]); // random num selected
  progressionArray[index] = '..'; // num is hidden
  return [progressionArray.join(' '), answer];
};

export default () => {
  startGame('What number is missing in the progression?', answerAndQuestion);
};
