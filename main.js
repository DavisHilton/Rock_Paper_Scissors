//=======================================
// User input
//=======================================

const getUserChoice = userInput => {
	userInput = prompt("Choose rock, paper or scissors.").toLocaleLowerCase();
	if (
		userInput === "rock" ||
		userInput === "paper" ||
    userInput === "scissors" ||
    userInput ==="bomb"
	) {
		return userInput;
	} else {
		console.log(
			`You can only choose  between rock, paper or scissors. "${userInput}" is not one of the above. Please try again.`
		);
	}
};


//=======================================
// Computers Choice
//=======================================
const getComputerChoice = () => {
	let computerChoice = Math.floor(Math.random() * 3);
	if (computerChoice === 0) {
		return "paper";
	} else if (computerChoice === 1) {
		return "rock";
	} else if (computerChoice === 2) {
		return "scissors";
	}
};

//=======================================
// Determine The Winner
//=======================================

//===== If find cheat word =====
const determineWinner = (userChoice, computerChoice) => {
	if (userChoice === "bomb") {
		return "You found the secret cheat word so you won!";
	}
	//===== If tie =====
	if (userChoice === computerChoice) {
		return "The game was a tie!.";
	}

	// //===== If Not Tied  (2nd if statement)=====
	if (userChoice === "rock") {
		if (computerChoice === "paper") {
			return "The computer won!";
		} else {
			return "You won!";
		}
	}
	if (userChoice === "paper") {
		if (computerChoice === "scissors") {
			return "The computer won!";
		} else {
			return "You won!";
		}
	}
	if (userChoice === "scissors") {
		if (computerChoice === "rock") {
			return "The computer won!";
		} else {
			return "You won!";
		}
	}
};

//=======================================
// Play game and See Results
//=======================================

const playGame = () => {
	const userChoice = getUserChoice();
	const computerChoice = getComputerChoice();
	console.log(`This is the user's choice : ${userChoice}.`);
	console.log(`This is the computer's choice :${computerChoice}`);

	// See Who Won
  console.log(determineWinner(userChoice, computerChoice));
};


playGame();




// const playAgain = () => {
//   const choice = prompt("Would you like to play again?").toLowerCase();
//   if (choice === yes || choice === y) {
//     return playGame();
//   }
//   else {
//     return "Thank You For Playing, Have A Nice Day."
//   }
// };

// playAgain();
