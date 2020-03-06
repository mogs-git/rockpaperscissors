function computerPlay() {
	let r = Math.random()*3;

	return (r < 1 ? "Rock" : r < 2 ? "Scissors" : "Paper")
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		return "DRAW! C: " + computerSelection + " P: " + playerSelection;
	} else if ((playerSelection === "Rock" && computerSelection === "Scissors") || 
	(playerSelection === "Paper" && computerSelection === "Rock") ||
	(playerSelection === "Scissors" && computerSelection === "Paper")) {
		return "Player Wins! C: " + computerSelection + " P: " + playerSelection;	
	} else {
		return "Computer Wins! C: " + computerSelection + " P: " + playerSelection;
	}
}

const playerSelection = 'Rock'
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection))