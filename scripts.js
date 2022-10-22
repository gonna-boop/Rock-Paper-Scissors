//let choices = ['Rock', 'Paper', 'Scissors'];
let playScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choices = ['rock', 'paper', 'scissors'];
  let computerSelection = Math.floor(Math.random() * choices.length);
  return choices[computerSelection];
}

function choose(choice) {
  playerSelection = choice;
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  return playerSelection;
}

function playRound(playerSelection, computerSelection) {
  console.log(playerSelection);
  console.log(computerSelection);
  if (computerSelection === playerSelection) {
    return 'Tie!';
} else if (computerSelection === 'rock' && playerSelection === 'paper') {
    return 'Paper beats rock.  You win this round!';
} else if (computerSelection === 'paper' && playerSelection === 'scissors') {
  return 'Scissors beats Paper.  You win this round!';
} else if (computerSelection === 'scissors' && playerSelection === 'rock') {
  return 'Rock beats scissors.  You win this round!';
} else 
  return 'You lose this round.';
}

function game() {
  for (let i = 0; i < 5; i++) {
    // your code here!
 }
}