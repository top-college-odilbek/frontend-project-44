import readlineSync from 'readline-sync';

export default (description, questionAndAnswer) => {
  console.log('Welcome to the Brain Games!');

  const playerName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${playerName}!`);
  console.log(description);

  for (let i = 0; i < 3; i += 1) {
    const [question, answer] = questionAndAnswer();

    console.log(`Question: ${question}`);

    const playerAnswer = readlineSync.question('You answer: ');

    if (answer === playerAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${playerName}`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};
