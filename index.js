// Import stylesheets
import './style.css';

// Write Javascript code!


/* Players*/
// var player1 = 'Danilo';
// var player2 = 'Ivan';
var player1 = prompt('Player 1');
var player2 = prompt('Player 2');

/* Round */
var round = 0;

/* Player score */
var player1Score = 0;
var player2Score = 0;

function throwingDice() {

  /* Eliminate console jumping */
  console.clear();

  /* Round count */
  round++;

  /* Dice */
  // var dice1 = Math.floor(Math.random() * 6);
  // var dice2 = Math.floor(Math.random() * 6);
  var dice1 = Math.ceil(Math.random() * 6);
  var dice2 = Math.ceil(Math.random() * 6);

  /* Player score */
  player1Score += dice1;
  player2Score += dice2;

  /* Dice trowed */
  //console.log(dice1, dice2);
  console.log('*** ROUND ' + round + ' ***');
  console.log(player1 + ':' + dice1 + ' --- ' + dice2 + ':' + player2);

  /* Current score */
  console.log(
    player1 +
      '(' +
      player1Score +
      ')' +
      ' : ' +
      '(' +
      player2Score +
      ')' +
      player2
  );

  /* Game ends after 10 rounds */
  if (round === 10) {
    winner();
  } else {
    setTimeout(throwingDice, 3000);
  }
}

throwingDice();

function winner() {
  if (player1Score > player2Score) {
    console.log('Winner: ' + player1 + '!');
  } else if (player1Score < player2Score) {
    console.log('Winner: ' + player2 + '!');
  } else {
    console.log('Draw: no winner!');
  }
}
