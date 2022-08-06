const choices = document.querySelectorAll(".choice");
const score = document.getElementById("score");
const result = document.getElementById("result");
const restart = document.getElementById("restart");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const roundCounter = document.getElementById("round-counter");
let round = 1;

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
    <h1 id="modal-text">You Win!</h1>
    <p id="modal-text">Computer Chose ${computerChoice}</p>
    `;
  } else if (winner === "computer") {
    scoreboard.computer++;
    result.innerHTML = `
    <h1 id="modal-text">You Lost!</h1>
    <p id="modal-text">Computer Chose ${computerChoice}</p>
    `;
  } else {
    result.innerHTML = `
    <h1 id="modal-text">It's a Draw!</h1>
    <p id="modal-text">Computer Chose ${computerChoice}</p>
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
    round++;
    roundCounter.innerHTML = `
  <h3>Round ${round}... FIGHT!</h3>`;
  } else if (e.target === result) {
    modal.style.display = "none";
    round++;
    roundCounter.innerHTML = `
  <h3>Round ${round}... FIGHT!</h3>`;
  } else if (e.target.id === "modal-text") {
    modal.style.display = "none";
    round++;
    roundCounter.innerHTML = `
  <h3>Round ${round}... FIGHT!</h3>`;
  }
}

function restartGame(e) {
  if (e.target === restart) {
    round = 1;
    scoreboard.player = 0;
    scoreboard.computer = 0;
    score.innerHTML = `
    <p>Player: ${scoreboard.player}</p>
    <p>Computer: ${scoreboard.computer}</p>
    `;

    roundCounter.innerHTML = `
    <h3>Round ${round}... FIGHT!</h3>`;
  }
}

// PLAYER SELECTION
choices.forEach((choice) => choice.addEventListener("click", play));
// CLEARS MODAL ON CLICK
window.addEventListener("click", clearModal);
// RESTAR BUTTON - SETS SCORE AND ROUND TO 0
restart.addEventListener("click", restartGame);
