//Return a value for the computer's choice variable:
//Ask the computer to return either a 0, 1, or 2
function getComputerChoice(max) {
  number = Math.floor(Math.random() * max);
  if (number === 0) {
    return "Paper";
  } else if (number === 1) {
    return "Rock";
  } else {
    return "Scissors";
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice(3);

  //If the value = 0 the computer's choice is Paper
  //If the value = 1 the computer's choice is Rock
  //If the value = 2 the computer's choice is Scissors

//Prompt the player to enter a value and return that into
//the player's choice variable

//Compare the computer's choice with the player's choice

  //If the computer picks rock and the player picks paper
  //the player wins; increase player count by 1 and game count by 1
  //return "Paper beats Rock, you WIN!"

  //If the computer picks rock and the player picks scissors
  //the player loses; increase computer count by 1 and game count by 1
  //return "Rock beats Scissors, you LOSE!"

  //If the computer picks paper and the player picks rock
  //the player loses; increase computer count by 1 and game count by 1
  //return "Paper beats Rock, you LOSE!"

  //If the computer picks paper and the player picks scissors
  //the player wins; increase player count by 1 and game count by 1
  //return "Scissors beats Paper, you WIN!"

  //If the computer picks scissors and the player picks rock
  //the player wins; increase player count by 1 and game count by 1
  //return "Rock beats Scissors, you WIN!"

  //If the computer picks scissors and the player picks paper
  //the player loses; increase computer count by 1 and game count by 1
  //return "Scissors beats Paper, you LOSE!"

  //Else, if the two values are equal, it is a tie.
  //Retry the turn and game count by 1

//When the game count is 5, compare the win count
//of the computer to the player
  //If the player's count > computer, return "You WIN the GAME!"
  
  //If the player's count < computer, return "You LOSE the GAME! TRY AGAIN"

  //If the player's count = computer, return "It's a DRAW GAME! PLAY AGAIN"


  