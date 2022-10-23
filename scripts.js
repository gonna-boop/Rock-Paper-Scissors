//let choices = ['Rock', 'Paper', 'Scissors'];\

// Get computer choice from random selection of rock-paper-scissors string array
// Completes by ... 

function getComputerChoice() {
  let choices = ['rock', 'paper', 'scissors'];
  let computerSelection = Math.floor(Math.random() * choices.length);
  return choices[computerSelection];
}

let playScore = 0;
let computerScore = 0;

// play round of rock paper scissors

function playRound(playerSelection, computerSelection) {
  console.log(playerSelection);
  console.log(computerSelection);
  if (computerSelection === playerSelection) {
    return 'Tie!';
  } else if (computerSelection === 'rock' && playerSelection === 'paper') {
    playScore += 1;
    return 'Paper beats rock.  You win this round!';
  } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
    playScore += 1;
    return 'Scissors beats Paper.  You win this round!';
  } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
    playScore += 1;
    return 'Rock beats scissors.  You win this round!';
  } else
    computerScore += 1;
  return 'You lose this round.';
}

let playerSelection = "";
let computerSelection = "";

// game() runs playRound five times, counts up score of each round, returns winner

function game() {
  for (let i = 0; i < 5; i++) {
    playerSelection = prompt();
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    console.log(i + " " + "Computerscore: " + computerScore + " " + "playscore: " + playScore);
  }
  if (computerScore > playScore) return "Computer wins";
  if (computerScore == playScore) return "Tie!";
  return "Player wins";
}

// Player picks rock-paper-scissors choice, then runs game against computer for 5 tries
// ENTRY 
function play() {
  console.log("Now starting RPS game... good luck!")
  const winner = game();
  console.log(winner);
}