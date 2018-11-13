let userScore 			= 0;
let computerScore 		= 0;
let userScore_span 		= document.querySelector('#user-score');
let computerScore_span 	= document.querySelector('#computer-score');
let userImage		    = document.querySelector('#userChoice');
let computerImage  		= document.querySelector('#computerChoice');
let scoreboard_div 		= document.querySelector('.scoreboard');
let result_div 			= document.querySelector('.result-message');
let rock_div 			= document.querySelector('#rock');
let paper_div 			= document.querySelector('#paper');
let scissors_div 		= document.querySelector('#scissors');

function main() {
	rock_div.addEventListener('click', () => {
		game('rock');
	});

	paper_div.addEventListener('click', () => {
		game('paper');
	});

	scissors_div.addEventListener('click', () => {
		game('scissors');
	});
}

function getComputerChoice() {
	let choices = ['rock', 'paper', 'scissors'];

	return choices[randomIntBetweenZeroAnd(3)];
}

function randomIntBetweenZeroAnd(maximumInteger) {
	return Math.floor(
		Math.random() * maximumInteger
	);
}

function determineResult(userChoice, computerChoice) {
 	if (userChoice.localeCompare(computerChoice) === 0) return draw();

 	if (userChoice === 'rock') {
 		switch (computerChoice) {
 			case 'paper':
 				return loss('Paper covers rock');
			case 'scissors':
				return win('Rock break scissors');
		}
 	}
 	if (userChoice === 'paper') {
 		switch (computerChoice) {
 			case 'rock':
 				return win('Paper covers rock');
			case 'scissors':
				return loss('Scissors cut paper');
 		}
 	}
 	if (userChoice === 'scissors') {
 		switch (computerChoice) {
 			case 'rock':
 				return loss('Rock breaks scissors');
			case 'paper':
				return win('Scissors cut paper');
 		}
 	}
} 

function win(message) {
	userScore++;
	userScore_span.innerHTML = userScore;
	result_div.innerHTML = `${message}. You win!`;
}

function loss(message) {
	computerScore++;
	computerScore_span.innerHTML = computerScore;
	result_div.innerHTML = `${message}. Computer wins!`;
}

function draw() {
	result_div.innerHTML = `It was a draw.`;
}

function game(userChoice) {
	let computerChoice = getComputerChoice();

	computerImage.src = `images/${computerChoice}.png`;
	userImage.src = `images/${userChoice}.png`

	let result = determineResult(userChoice, computerChoice);
}

main();
