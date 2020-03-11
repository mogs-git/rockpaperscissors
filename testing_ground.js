let output;

let selection = "rock"

let s1 = selection.toUpperCase().slice(0,1).concat(selection.toLowerCase().slice(1));

output = s1;

let p = prompt("Do I work?", "Maybe");

function check_input(selection) {
	let good_answers = ["Rock", "Paper", "Scissors"];

	return good_answers.includes(selection);
}
console.log(check_input(output));

console.log(output)