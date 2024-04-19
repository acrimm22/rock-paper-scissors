//Function for the computer to choose rock, paper, or scissors
function getComputerChoice(max) {
  number = Math.floor(Math.random() * max);
  if (number === 0) {
    return "paper";
  } else if (number === 1) {
    return "rock";
  } else {
    return "scissors";
  }
}

//Round and Score Counters
function increaseRoundCount(roundCount) {
  return roundCount = roundCount + 1;
}
function increaseComputerScore(computerScore) {
  return computerScore = computerScore + 1;
}
function increasePlayerScore(playerScore) {
  return playerScore = playerScore + 1;
}


function playRound(computerSelection, playerSelectionCaseSensitive) {
  if (computerSelection === "rock" && playerSelectionCaseSensitive === "paper") {
    alert ("Paper beats Rock, you WIN!");
    } else if (computerSelection === "rock" && playerSelectionCaseSensitive === "scissors") {
      alert ("Rock beats Scissors, you LOSE!");
    } else if (computerSelection === "paper" && playerSelectionCaseSensitive === "rock") {
      alert ("Paper beats Rock, you LOSE!");
    } else if (computerSelection === "paper" && playerSelectionCaseSensitive === "scissors") {
      alert ("Scissors beats Paper, you WIN!");
    } else if (computerSelection === "scissors" && playerSelectionCaseSensitive === "rock") {
      alert ("Rock beats Scissors, you WIN!");
    } else if (computerSelection === "scissors" && playerSelectionCaseSensitive === "paper") {
      alert ("Scissors beats Paper, you LOSE!");
    } else {
      alert ("TIE");
  }
}

//variables
const computerSelection = getComputerChoice(3);

const playerSelection = prompt("Type: Rock, Paper, or Scissors");
const playerSelectionCaseSensitive = playerSelection.toLowerCase(playerSelection.trim());

let roundCount = 0;
let playerScore = 0;
let computerScore = 0;

if (roundCount <= 6) {
  playRound(computerSelection, playerSelectionCaseSensitive);
  increaseRoundCount
}





  