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

//variables
const computerSelection = getComputerChoice(3);

const playerSelection = prompt("Type: Rock, Paper, or Scissors");
const playerSelectionCaseSensitive = playerSelection.toLowerCase(playerSelection.trim());



/Round and Score Counters
function increaseRoundCount(roundCount) {
  return roundCount = roundCount + 1;
}
function increaseComputerScore(computerScore) {
  return computerScore = computerScore + 1;
}
function increasePlayerScore(playerScore) {
  return playerScore = playerScore + 1;
}


  