let choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice(choices) {
  let computerSelection = Math.floor(Math.random() * choices.length);
  console.log(computerSelection, choices[computerSelection]);
  return computerSelection;
}

let playerSelection = "";
let computerSelection = getComputerChoice(choices);
alert(getComputerChoice());

function playRound(computerSelection, playerSelection) {

}