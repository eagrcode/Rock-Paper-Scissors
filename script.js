// LOOPS ENTIRE GAME 5*
for (let i = 0; i < 5; i++) {
  // SETS STARTING SCORE FOR PLAYER & COMPUTER
  let computerScore = 0;
  let playerScore = 0;
  // SETS STARTING ROUND
  let roundCount = 1;

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

  // LOOPS ROUND for 5*
  const game = () => {
    for (let i = 0; i < 5; i++) {
      alert("Get ready it's round " + roundCount + "!");

      const playerChoice = prompt(
        "Enter either rock, paper or scissors, bitch!"
      ).toLowerCase();

      const computerChoice = getComputerChoice();

      console.log("Round " + roundCount);
      roundCount++;
      console.log("You chose: " + playerChoice);
      console.log("Computer chose: " + computerChoice);
      console.log(playRound(playerChoice, computerChoice));
    }
  };

  // CALLS"GAME" FUNCTION
  game();

  // LOGS PLAYER SCORE
  console.log("Your score is " + playerScore);
  // LOGS COMPUTER SCORE
  console.log("Computer score is " + computerScore);

  // RETURNS GAME RESULTS
  function gameScore(playerScore, computerScore) {
    if (playerScore > computerScore) {
      return "Congratulations! You Won!";
    } else if (computerScore > playerScore) {
      return "You got beat by the computer! You SUCK!";
    } else return "You tied!";
  }

  // LOGS RESULTS OF GAME
  console.log(gameScore(playerScore, computerScore));
  alert(gameScore(playerScore, computerScore));
  confirm("Would you like to play again?");

  // CLEARS CONSOLE FOR NEXT GAME
  console.clear();
}
