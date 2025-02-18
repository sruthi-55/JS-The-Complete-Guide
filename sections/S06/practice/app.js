const startBtn = document.getElementById("start-game-btn");
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

let isGameActive = false;

// arrow function
const getUserChoice = () => {
  const choice = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, "").toUpperCase();
  if (choice != ROCK && choice != PAPER && choice != SCISSORS) {
    alert(`Invalid Choice!. We chose ${DEFAULT_CHOICE} for you`);
    return DEFAULT_CHOICE;
  }
  return choice;
};

const getComputerChoice = () => {
  const randomVal = Math.random(); //return val from [0,1)
  if (randomVal < 0.34) return ROCK;
  else if (randomVal < 0.68) return PAPER;
  else return SCISSORS;
};


const getWinner = (pChoice, cChoice) =>
  pChoice === cChoice
    ? RESULT_DRAW
    : (pChoice === ROCK && cChoice === PAPER) ||
      (pChoice === PAPER && cChoice === SCISSORS) ||
      (pChoice === SCISSORS && cChoice === ROCK)
    ? RESULT_COMPUTER_WINS
    : RESULT_PLAYER_WINS;

// if(pChoice === cChoice)  return RESULT_DRAW;
// else if(
//   (pChoice===ROCK && cChoice===PAPER) ||
//   (pChoice === PAPER && cChoice === SCISSORS) ||
//   (pChoice === SCISSORS && cChoice === ROCK)){
//     return RESULT_COMPUTER_WINS;
// }
// else  return RESULT_PLAYER_WINS;



startBtn.addEventListener("click", function () {
  if (isGameActive) return;

  isGameActive = true;
  console.log("Game started!");

  const playerChoice = getUserChoice();
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);

  let message = "Player chose: " + playerChoice + "\nComputer chose: " + computerChoice +"\nTherefore you ";
  if(winner === RESULT_DRAW)  message += "had a DRAW";
  else if(winner === RESULT_COMPUTER_WINS)  message += "LOST";
  else  message += "WON";
  alert(message);

  isGameActive = false;
});
