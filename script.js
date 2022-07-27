// SETS STARTING SCORE FOR PLAYER & COMPUTER
let computerScore = 0;
let playerScore = 0;

// GENERATES RANDOM RESPONSE FROM COMPUTER - "ROCK", "PAPER", OR "SCISSORS"
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
      break;
  }
}

// PLAYS 1 ROUND OF GAME
function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a draw";
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    playerScore++;
    return "You won!";
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    return "You lost!";
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    playerScore++;
    return "You won!";
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    return "You lost!";
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    playerScore++;
    return "You won!";
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    return "You lost!";
  }
}

// LOOPS ROUND FOR 5 TIMES
const game = () => {
  for (let i = 0; i < 5; i++) {
    const playerChoice = prompt("Enter either rock, paper or scissors, bitch!");
    const computerChoice = getComputerChoice();

    console.log("You chose: " + playerChoice);
    console.log("Computer chose: " + computerChoice);
    console.log(playRound(playerChoice, computerChoice));
  }
};

// CALLS THE "GAME" FUNCTION
game();

// LOGS PLAYER SCORE
console.log("Your score is " + playerScore);
// LOGS COMPUTER SCORE
console.log("Computer score is " + computerScore);

// COUNTS BOTH PLAYERS SCORE
function gameScore(playerScore, computerScore) {
  if (playerScore > computerScore) {
    return "Congratulations! You Won!";
  } else if (computerScore > playerScore) {
    return "You got beat by the computer! You SUCK!";
  } else return "You tied!";
}

// LOGS THE RESULTS OF GAME SCORE
console.log(gameScore(playerScore, computerScore));
