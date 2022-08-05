const choices = document.querySelectorAll(".choice");
const score = document.getElementById("score");
const result = document.getElementById("result");
const restart = document.getElementById("restart");
const modal = document.querySelector(".modal");

const scoreboard = {
  player: 0,
  computer: 0,
};

// PLAYS GAME
function play(e) {
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  showWinner(winner, computerChoice);
}

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
function getWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a draw";
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    return "player";
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    return "computer";
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    return "player";
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    return "computer";
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    return "player";
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    return "computer";
  }
}

function showWinner(winner, computerChoice) {
  if (winner === "player") {
    scoreboard.player++;
    result.innerHTML = `
    <h1>You Win!</h1>
    <p>Computer Chose ${computerChoice}</p>
    `;
  } else if (winner === "computer") {
    scoreboard.computer++;
    result.innerHTML = `
    <h1>You Lost!</h1>
    <p>Computer Chose ${computerChoice}</p>
    `;
  } else {
    result.innerHTML = `
    <h1>It's a Draw!</h1>
    <p>Computer Chose ${computerChoice}</p>
    `;
  }
  score.innerHTML = `
    <p>Player: ${scoreboard.player}</p>
    <p>Computer: ${scoreboard.computer}</p>
    `;

  modal.style.display = "flex";
}

function clearModal(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  } else if (e.target === result) {
    modal.style.display = "none";
  }
}

// PLAYER SELECTION
choices.forEach((choice) => choice.addEventListener("click", play));

window.addEventListener("click", clearModal);
