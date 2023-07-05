function getComputerChoice() {
  let computerChoice = Math.trunc(Math.random() * 3);
  switch (computerChoice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

// console.log(getComputerChoice());

function playGame(userChoice) {
  let computerChoice = getComputerChoice();

  let result = "";
  let userScore = "0";
  let compScore = "0";

  if (userChoice === "rock") {
    if (computerChoice === "rock") {
      result = "draw";
    } else if (computerChoice === "paper") {
      result = "lost";
      compScore = compScore + 1;
    } else if (computerChoice === "scissors") {
      result = "won";
      userScore = userScore + 1;
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "rock") {
      result = "won";
      userScore = userScore + 1;
    } else if (computerChoice === "paper") {
      result = "draw";
    } else if (computerChoice === "scissors") {
      result = "lost";
      compScore = compScore + 1;
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      result = "lost";
      compScore = compScore + 1;
    } else if (computerChoice === "paper") {
      result = "won";
      userScore = userScore + 1;
    } else if (computerChoice === "scissors") {
      result = "draw";
    }
  }

  console.log(`userchoice : ${userChoice}`);
  console.log(`computerChoice : ${computerChoice}`);
  console.log(`gameresult : ${result}`);

  userChooseEl.innerText = userChoice;
  compChooseEl.innerText = computerChoice;
}
// playGame("rock")
// playGame("paper")
// playGame("scissors")
// playGame("paper")
// playGame("rock")
// playGame("scissors")
// playGame("scissors")
// playGame("rock")
// playGame("rock")
// playGame("scissors")

const userScoreEl = document.getElementById("user-score");
const compScoreEl = document.getElementById("comp-score");
const userChooseEl = document.getElementById("user-choose");
const compChooseEl = document.getElementById("comp-choose");
const gameResultEl = document.getElementById("game-result");

// userScoreEl.innerText= 20

// gameResultEl.style.width='5rem'
// gameResultEl.style.backgroundColor= '#12ad15'
// gameResultEl.style.padding='.5rem'

// gameResultEl.classList.add('won')
