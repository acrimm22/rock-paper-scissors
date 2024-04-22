//Function that plays the game 5 times
function playGame() {
  //Variables for Scoring
  let humanScore = 0;
  let computerScore = 0;
  let roundCounter = 0;

  //variables for choosing values to compare
  let computerSelection = getComputerChoice();
  let humanSelection = getHumanChoice();

  //Function for the computer to choose rock, paper, or scissors
  function getComputerChoice(max) {
    max = 3;
    number = Math.floor(Math.random() * max);
    if (number === 0) {
      return "paper";
    } else if (number === 1) {
      return "rock";
    } else {
      return "scissors";
    }
  }

  //Function for the user to imput rock, paper, or scissors
  function getHumanChoice(){
    let choice = prompt("Type: Rock, Paper, or Scissors").toLowerCase();
    return choice;
  }

  while (roundCounter < 5) {
    playRound(humanSelection, computerSelection);
    roundCounter++;
  }

  //Function to play one round of rock, paper, scissors; increases the score and counts the game
  function playRound(playerChoice, computerChoice) {
      
    if (computerChoice == "rock" && playerChoice == "paper") {
      console.log("Paper beats Rock, you WIN!");
      return humanScore++;
      
      } else if (computerChoice == "rock" && playerChoice == "scissors") {
        console.log("Rock beats Scissors, you LOSE!");
        return computerScore++;
        
      } else if (computerChoice == "paper" && playerChoice == "rock") {
        console.log("Paper beats Rock, you LOSE!");
        return computerScore++;
        
      } else if (computerChoice == "paper" && playerChoice == "scissors") {
        console.log("Scissors beats Paper, you WIN!");
        return humanScore++;
        
      } else if (computerChoice == "scissors" && playerChoice == "rock") {
        console.log("Rock beats Scissors, you WIN!");
        return humanScore++;
        
      } else if (computerChoice == "scissors" && playerChoice == "paper") {
        console.log("Scissors beats Paper, you LOSE!");
        return computerScore++;
        
      } else {
          console.log("TIE");
          return;
    }
  }
}

playGame();