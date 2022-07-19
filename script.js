'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';
// document.querySelector('.number').textContent = 20;
// document.querySelector('.score').textContent = 30;

// document.querySelector('.guess').value = 50;

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let HighScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayHighscore = function (highscore) {
  document.querySelector('.highscore').textContent = HighScore;
};
const displayBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = '#222';
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('No Number');
  } else if (guess == number) {
    document.querySelector('.number').textContent = number;
    displayMessage('Correct Number');
    score++;
    displayScore(score);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > HighScore) {
      HighScore = score;
      displayHighscore(HighScore);
    }
  } else if (guess != number) {
    if (score > 1) {
      displayMessage(
        (document.querySelector('.message').textContent =
          guess > number ? 'To high' : 'to low')
      );
      score--;
      displayScore(score);
      displayBackgroundColor('#222');
      document.querySelector('.number').style.width = '20rem';
    } else {
      displayMessage('You lose the Game');
      document.querySelector('.score').textContent = 0;
    }
  }
  //  else if (guess > number) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'To high';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     document.querySelector('body').style.backgroundColor = '#222';
  //     document.querySelector('.number').style.width = '20rem';
  //   } else {
  //     document.querySelector('.message').textContent = 'You lose the Game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess < number) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'To low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     document.querySelector('body').style.backgroundColor = '#222';
  //     document.querySelector('.number').style.width = '20rem';
  //   } else {
  //     document.querySelector('.message').textContent = 'You lose the Game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  HighScore = score;
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  displayScore(score);
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  displayHighscore(HighScore);
  displayBackgroundColor('#222');
  document.querySelector('.guess').value = '';
});
