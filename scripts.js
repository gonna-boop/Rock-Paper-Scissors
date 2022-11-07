//let choices = ['Rock', 'Paper', 'Scissors'];\

// Get computer choice from random selection of rock-paper-scissors string array
// Completes by ... 

let playerSelection = "";
let computerSelection = "";

function getComputerChoice() {
  let choices = ['rock', 'paper', 'scissors'];
  let computerSelection = Math.floor(Math.random() * choices.length);
  return choices[computerSelection];
}

//add something here to record a click on one of the buttons
//the click will take that choice, record it into the playerselection
//and then run the playRound function
let btn = document.querySelector('#rock');
btn.addEventListener('click', () => {
  playerSelection = 'rock';
  matchResult.textContent = playRound(playerSelection, computerSelection);
})

btn = document.querySelector('#paper');
btn.addEventListener('click', () => {
  playerSelection = 'paper';
  matchResult.textContent = playRound(playerSelection, computerSelection);
})

btn = document.querySelector('#scissors');
btn.addEventListener('click', () => {
  playerSelection = 'scissors';
  // console.log(playRound(playerSelection, computerSelection));
  matchResult.textContent = playRound(playerSelection, computerSelection);
})

{/* <p id="playerScore">Player Score: 0 </p>
<p id="compScore">Computer Score: 0</p> */}

// play round of rock paper scissors

let playScore = 0;
let computerScore = 0;


//the following function plays a round, adds the score to the screen and displays 
//the appropriate messages
//it also disables the buttons once someone hits 5
function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();
  console.log(playerSelection);
  console.log(computerSelection);
  
  if (computerSelection === playerSelection) {
    return 'Tie!';
  } else if (computerSelection === 'rock' && playerSelection === 'paper') {
    playerScore.textContent =  ("Player Score: " )+ (playScore += 1);
      if (playScore >= 5){
        document.querySelector('#rock').disabled = true;
        document.querySelector('#paper').disabled = true;
        document.querySelector('#scissors').disabled = true;
        return 'You won the game!  Reload the page to play another round.';
      } else 
    return 'Paper beats rock.  You win this round!';
  } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
    playerScore.textContent =  ("Player Score: " )+ (playScore += 1);
    if (playScore >= 5){
        document.querySelector('#rock').disabled = true;
        document.querySelector('#paper').disabled = true;
        document.querySelector('#scissors').disabled = true;
      return 'You won the game!  Reload the page to play another round.';
    } else 
    return 'Scissors beats Paper.  You win this round!';
  } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
    playerScore.textContent =  ("Player Score: " )+ (playScore += 1);
    if (playScore >= 5){
        document.querySelector('#rock').disabled = true;
        document.querySelector('#paper').disabled = true;
        document.querySelector('#scissors').disabled = true;
      return 'You won the game!  Reload the page to play another round.';
    } else 
    return 'Rock beats scissors.  You win this round!';
  } else
    compScore.textContent =  ("Computer Score: " )+ (computerScore += 1);
    if (computerScore >= 5){
        document.querySelector('#rock').disabled = true;
        document.querySelector('#paper').disabled = true;
        document.querySelector('#scissors').disabled = true;
      return 'You lost the game.  Reload the page to play again.';
    } else 
  return 'You lose this round.';
}

// game() runs playRound five times, counts up score of each round, returns winner

// function game() {
//   // for (let i = 0; i < 5; i++) {
//   //   playerSelection = prompt();
//   //   computerSelection = getComputerChoice();
//   //   playRound(playerSelection, computerSelection);
//   //   console.log(i + " " + "Computerscore: " + computerScore + " " + "playscore: " + playScore);
//   // }
//   if (computerScore > playScore) return "Computer wins";
//   if (computerScore == playScore) return "Tie!";
//   return "Player wins";
// }

// // Player picks rock-paper-scissors choice, then runs game against computer for 5 tries
// // ENTRY 
// function play() {
//   console.log("Now starting RPS game... good luck!")
//   const winner = game();
//   console.log(winner);
// }
