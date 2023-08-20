#!/usr/bin/env node
import readlineSync from 'readline-sync';

const roundsQuantity = 3;
let points = 0;
console.log('Welcome to the Brain Games!');
const player = readlineSync.question('May I have your name? ');
console.log(`Hello, ${player}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 0; i < roundsQuantity; i += 1) {
  const question = Math.round(Math.random() * 101);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  console.log(`Question: ${question}`);
  const playerAnswer = readlineSync.question('You answer: ');

  if (correctAnswer === playerAnswer) {
    console.log('Correct!');
    points += 1;
  } else {
    console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${player}`);
    break;
  }
}
if (points === 3) console.log(`Congratulations, ${player}!`);
