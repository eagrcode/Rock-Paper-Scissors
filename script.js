// SETS STARTING SCORE FOR PLAYER & COMPUTER
let computerScore = 0;
let playerScore = 0;
// SETS STARTING ROUND
let roundCount = 1;
let playerChoice;
let computerChoice;

// DECLARE VARIABLES FOR ROCK, PAPER, SCISSORS BUTTONS
const buttons = document.querySelectorAll(".btn");

// PLAYER CHOICE
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const playerChoice = btn.id.toLowerCase();
    playRound(playerChoice, computerChoice);
  });
});

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

// SETS CONDITIONS FOR ROUND
function playRound(playerChoice, computerChoice) {
  playerChoice = playerChoice;
  computerChoice = getComputerChoice();
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

// RETURNS GAME RESULTS
function gameScore(playerScore, computerScore) {
  if (playerScore > computerScore) {
    return "Congratulations! You Won!";
  } else if (computerScore > playerScore) {
    return "You got beat by the computer! You SUCK!";
  } else return "You tied!";
}

console.log(playRound(playerChoice, computerChoice));
