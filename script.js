let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();

  const resultDiv = document.querySelector("#result");
  const scoreDiv = document.querySelector("#score");

  if (humanChoice === computerChoice) {
    resultDiv.textContent = `It's a tie! Both chose ${humanChoice}.`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    resultDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    resultDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
  }

  scoreDiv.textContent = `Score - You: ${humanScore} | Computer: ${computerScore}`;

  checkWinner();
}

function checkWinner() {
  const winnerDiv = document.querySelector("#winner");
  if (humanScore === 5) {
    winnerDiv.textContent = "Result: Congratulations! You won the game!";
    winnerDiv.style.color = "green";
    setTimeout(resetGame, 2000);
  } else if (computerScore === 5) {
    winnerDiv.textContent = "Result: Sorry, you lost the game.";
    winnerDiv.style.color = "red";
    setTimeout(resetGame, 2000);
  }
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  document.querySelector("#result").textContent = "";
  document.querySelector('#winner').textContent = "Result: ";
  document.querySelector("#winner").style.color = "#28a745";
  document.querySelector("#score").textContent = "Score - You: 0 | Computer: 0";
}

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector("#rock")
    .addEventListener("click", () => playRound("rock"));
  document
    .querySelector("#paper")
    .addEventListener("click", () => playRound("paper"));
  document
    .querySelector("#scissors")
    .addEventListener("click", () => playRound("scissors"));
  document.querySelector("#winner").textContent = "Result: ";
  document.querySelector("#reset").addEventListener("click", resetGame);
});
