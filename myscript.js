//Function that contains the materials to play the game
function playGame() {
  //Variables for Scoring and counting rounds
  let humanScore = 0;
  let computerScore = 0;
  //let roundCounter = 0;

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
    const rockBtn = document.querySelector('#rock');
      rockBtn.addEventListener("click", () => {
        return "rock";
      });
    const paperBtn = document.querySelector('#paper');
      paperBtn.addEventListener("click", () => {
        return "paper";
      });
    const scissorsBtn = document.querySelector('#scissors');
      scissorsBtn.addEventListener("click", () => {
        return "scissors";
      });
  }

  //Loops the round 5 times while also asking for new inputs for choices
  //while (roundCounter < 5) {
    let computerSelection = getComputerChoice();
    let humanSelection = getHumanChoice();
    playRound(humanSelection, computerSelection);
   // roundCounter++;
  //}

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
  //Compares the scores and displays who won to the console and the scores
  if (humanScore > computerScore) {
    console.log(`You WON ${humanScore} to ${computerScore}. Nice RPS skills!`);
    return;
  } else if (computerScore > humanScore) {
    console.log(`You LOST ${humanScore} to ${computerScore}. Better luck next time.`);
    return;
  } else {
    console.log(`TIE GAME: ${humanScore} to ${computerScore}. Try Again.`);
    return;
  }
}
//Initializes the gameplay
playGame();