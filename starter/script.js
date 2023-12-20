'use strict';
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number🙌';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;*/

const secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guesss = Number(document.querySelector('.guess').value);
  console.log(typeof guesss);
  // When there is no or 0 input
  if (!guesss) {
    document.querySelector('.message').textContent = 'Wrong Number😒';
  }
  // when player win
  else if (guesss === secretnumber) {
    document.querySelector('body').style.backgroundColor = '#60b437';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.message').textContent = 'Correct Number🙌';
    if (score > highscore) {
      highscore = score;
    }
    document.querySelector('.highscore').textContent = highscore;

    // when guess is  high
  } else if (guesss > secretnumber) {
    score = score - 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Too  High🤷‍♂️';
  }
  // when guess is  low
  else if (guesss < secretnumber) {
    score--;
    document.querySelector('.score').textContent = score;

    document.querySelector('.message').textContent = 'Too  Low🤷‍♂️';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = null;
});
