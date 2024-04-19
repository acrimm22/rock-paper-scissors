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

function playGame() {
  let roundCount = 0;
  let playerScore = 0;
  let computerScore = 0;

  function playRound(playerSelectionCaseSensitive, computerSelection) {
    if (computerSelection === "rock" && playerSelectionCaseSensitive === "paper") {
      return "Paper beats Rock, you WIN!";
      
      } else if (computerSelection === "rock" && playerSelectionCaseSensitive === "scissors") {
        return "Rock beats Scissors, you LOSE!";
        
      } else if (computerSelection === "paper" && playerSelectionCaseSensitive === "rock") {
        return "Paper beats Rock, you LOSE!";
        
      } else if (computerSelection === "paper" && playerSelectionCaseSensitive === "scissors") {
        return "Paper beats Scissors, you WIN!";
        
      } else if (computerSelection === "scissors" && playerSelectionCaseSensitive === "rock") {
        return "Rock beats Scissors, you WIN!";
        
      } else if (computerSelection === "scissors" && playerSelectionCaseSensitive === "paper") {
        return "Scissors beats Paper, you LOSE!";
        
      } else {
        return "TIE";
    }
  }
}
//variables
const computerSelection = getComputerChoice(3);

const playerSelection = prompt("Type: Rock, Paper, or Scissors");
const playerSelectionCaseSensitive = playerSelection.toLowerCase(playerSelection.trim());

console.log(playRound(playerSelectionCaseSensitive, computerSelection));


  