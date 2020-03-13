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

let player_score = 0;
let computer_score = 0;


function playRound(playerSelection, computerSelection) {
	playerSelection = clean_input(playerSelection);
	computerSelection = clean_input(computerSelection);

	console.log("AHOY " + playerSelection);

	if (!check_input(playerSelection) || !check_input(computerSelection)) {
		console.log("WARNING, BAD INPUT");
	}

	if (playerSelection === computerSelection) {
		result_summary.textContent = ("DRAW!");
		return "draw";
	} else if ((playerSelection === "Rock" && computerSelection === "Scissors") || 
	(playerSelection === "Paper" && computerSelection === "Rock") ||
	(playerSelection === "Scissors" && computerSelection === "Paper")) {
		result_summary.textContent = ("Player Wins!");
		return "player";	
	} else {
		result_summary.textContent = ("Computer Wins!");
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

let button_names = ["Rock", "Paper", "Scissors"]
let start_colours = ["#88969e","#f5e29f","#eb4034"]
let interact_colours = ["#b1b2b3", "#f7edc8", "#e88079"]
let result;

const result_computer = document.createElement('div');
const result_player = document.createElement('div');

const result_summary = document.createElement('div');
result_summary.setAttribute('style', 'white-space: pre;');
result_summary.classList.add('summary');

const result_container = document.getElementsByClassName('result_container')[0];
const versus_container = document.getElementsByClassName('versus_container')[0];
const summary_container = document.getElementsByClassName('summary_container')[0];

const result_display = document.createElement('div');

result_player.classList.add('score');
result_computer.classList.add('score');

result_container.appendChild(result_player);
result_container.appendChild(result_computer);

const choice_player = document.createElement('div');
const choice_computer = document.createElement('div');
choice_player.classList.add('versus');
choice_computer.classList.add('versus');
versus_container.appendChild(choice_player);
versus_container.appendChild(choice_computer);

summary_container.appendChild(result_summary);

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

	buttons[i].addEventListener("click", (e) => {
		playerSelection = buttons[i].textContent;
		computerSelection = computerPlay();
		result = playRound(playerSelection, computerSelection);

		choice_player.textContent = playerSelection;
		choice_player.style.backgroundColor  = start_colours[button_names.indexOf(playerSelection)];

		choice_computer.textContent = computerSelection;
		choice_computer.style.backgroundColor  = start_colours[button_names.indexOf(computerSelection)];

		if (result === "player") {
			player_score+=1;
			console.log(player_score);
		} else if (result === "computer") {
			computer_score++;
		} else {
			player_score++;
			computer_score++;
		}
		result_player.textContent = "Player: " + player_score;
		result_computer.textContent = "Computer: " + computer_score;
	});
}



