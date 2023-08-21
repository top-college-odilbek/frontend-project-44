import startGame from '../index.js';
import { getRandomNum } from '../utilities.js';

const getRandomOperation = (operations) => {
  const operationsLength = operations.length;
  const indexOfRandomSymbol = getRandomNum(0, operationsLength);
  return operations[indexOfRandomSymbol];
};

const getOperationAnswer = (operation, firstNum, secondNum) => {
  switch (operation) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    case '*':
      return firstNum * secondNum;
    default:
      return 'Error';
  }
};

const operationsArray = ['+', '-', '*'];

const answerAndQuestion = () => {
  const randomOperation = getRandomOperation(operationsArray);
  const firstNum = getRandomNum(0, 10);
  const secondNum = getRandomNum(0, 10);

  const question = `${firstNum} ${randomOperation} ${secondNum}`;
  const answer = String(getOperationAnswer(randomOperation, firstNum, secondNum));

  return [question, answer];
};

export default () => {
  startGame('What is the result of the expression?', answerAndQuestion);
};
