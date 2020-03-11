function computerPlay() {
	let r = Math.random()*3;

	return (r < 1 ? "Rock" : r < 2 ? "Scissors" : "Paper")
}

function clean_input(selection) {
	return selection.toUpperCase().slice(0,1).concat(selection.toLowerCase().slice(1));
}

function check_input(selection) {
	let good_answers = ["Rock", "Paper", "Scissors"];

	return good_answers.includes(selection);
}

function playRound(playerSelection, computerSelection) {
	playerSelection = clean_input(playerSelection);
	computerSelection = clean_input(computerSelection);

	console.log("AHOY " + playerSelection);

	if (!check_input(playerSelection) || !check_input(computerSelection)) {
		console.log("WARNING, BAD INPUT");
	}

	if (playerSelection === computerSelection) {
		console.log("DRAW! C: " + computerSelection + " P: " + playerSelection);
		return "draw";
	} else if ((playerSelection === "Rock" && computerSelection === "Scissors") || 
	(playerSelection === "Paper" && computerSelection === "Rock") ||
	(playerSelection === "Scissors" && computerSelection === "Paper")) {
		console.log("Player Wins! C: " + computerSelection + " P: " + playerSelection);
		return "player";	
	} else {
		console.log("Computer Wins! C: " + computerSelection + " P: " + playerSelection);
		return "computer";
	}
}

// function game() {
// 	let player_score = 0;
// 	let computer_score = 0;
// 	let outcome;
// 	let playerSelection = playerPlay();
// 	//let playerSelection = prompt("Choose a move.", "Rock");
// 	let computerSelection;

// 	for (let i = 0; i < 5; i++) {
// 		computerSelection = computerPlay();
// 		outcome = playRound(playerSelection, computerSelection);
// 		if (outcome==="player") {
// 			player_score++;
// 		} else if (outcome==="computer") {
// 			computer_score++;
// 		} else {
// 			player_score++;
// 			computer_score++;
// 		}
// 	}

// 	console.log("player score: " + player_score + ", computer score: " + computer_score);

// 	if (player_score > computer_score) {
// 		console.log("Player wins")
// 	} else if (player_score < computer_score) {
// 		console.log("Computer wins")
// 	} else {
// 		console.log("Draw");
// 	}
// }

// game();

// Style elements

const scissors = document.getElementsByClassName("scissors")[0];
const rock = document.getElementsByClassName("rock")[0];
const paper = document.getElementsByClassName("paper")[0];

let buttons = [rock, paper, scissors];

let start_colours = ["#88969e","#f5e29f","#eb4034"]
let interact_colours = ["#b1b2b3", "#f7edc8", "#e88079"]
for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("mouseover", () => {
		buttons[i].style.backgroundColor = interact_colours[i];
	})

	buttons[i].addEventListener("mouseleave", () => {
		buttons[i].style.backgroundColor = start_colours[i];
	})

	buttons[i].addEventListener("mousedown", () => {
		buttons[i].style.backgroundColor = start_colours[i];
	})

	buttons[i].addEventListener("mouseup", () => {
		buttons[i].style.backgroundColor = interact_colours[i];
	})

	buttons[i].addEventListener("click", () => {
		playerSelection = buttons[i].textContent;
		playRound(playerSelection, computerPlay());
	});
}

function playerPlay() {

}