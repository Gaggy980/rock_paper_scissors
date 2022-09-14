
//cash the dom in variables
let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('userScore');
const compScore_span = document.getElementById('compScore');
const scoreBoard_div = document.querySelector('.scoreBoard');
const result_p = document.querySelector('.result > p');
const user_display = document.getElementById('userBoard');
const comp_display = document.getElementById('compBoard');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
const action_p = document.getElementById('actionText');


//play a round of game with announce function
function playRound(userChoice) {
	const compChoice = getComputerChoice();
	switch (userChoice + compChoice) {
		case 'rr':
		case 'pp':
		case 'ss':
			draw(userChoice, compChoice);
			break;
		case 'rs':
		case 'pr':
		case 'sp':
			win(userChoice, compChoice);
			break;
		case 'rp':
		case 'ps':
		case 'sr':
			lose(userChoice, compChoice);
			break;
	}
}


//adding main function and event listeners for user choice
function main() {
	rock_div.addEventListener('click', function () {
		playRound('r')
	})
	paper_div.addEventListener('click', function () {
		playRound('p')
	})
	scissors_div.addEventListener('click', function () {
		playRound('s')
	});
}


//convert r,p,s into words for result announcement
const conToWord = (letter) => {
	if (letter === 'r') return 'Rock';
	if (letter === 'p') return 'Paper';
	return 'Scissors';
}


//get computer choice
const getComputerChoice = () => {
	const choices = ['r', 'p', 's']
	const randomNum = Math.floor(Math.random() * 3);
	return choices[randomNum];
};


//display choices
const displayChoices = (userChoice, compChoice) => {
	user_display.innerHTML = conToWord(userChoice);
	comp_display.innerHTML = conToWord(compChoice);
}


// announce winner and update result
const win = (userChoice, compChoice) => {
	userScore++;
	userScore_span.innerHTML = userScore;
	result_p.innerHTML = `${conToWord(userChoice)} beats ${conToWord(compChoice)}, You won this round!!!`
	displayChoices(userChoice, compChoice);
	winGame();

}
const lose = (userChoice, compChoice) => {
	compScore++;
	compScore_span.innerHTML = compScore;
	result_p.innerHTML = `${conToWord(userChoice)} loses from ${conToWord(compChoice)}, You lust a round!!!`
	displayChoices(userChoice, compChoice);
	winGame();

}
const draw = () => {
	displayChoices(userChoice, compChoice);
	result_p.innerHTML = "It's a DRAW,try again!";
}


//check who won the game and reset
const winGame = () => {
	if (userScore == 5) {
		result_p.innerHTML = 'YOU WON THIS GAME,CONGRATULATIONS!!!';
		removeBtn();
	}
	if (compScore == 5) {
		result_p.innerHTML = 'TOO BAD, YOU LOST THIS GAME,TRY ANOTHER ONE!';
		removeBtn();
	}
}


//remove buttons on game end
const removeBtn = () => {
	rock_div.remove();
	paper_div.remove();
	scissors_div.remove();
	reloadGame();
}


//start a new game with button
const reloadGame = () => {
	const p = action_p;
	p.innerHTML = 'PLAY ANOTHER GAME';
	p.style.border = '2px solid purple';
	p.style.margin = '180px 35%';
	p.style.padding = ' 25px 0';
	p.style.borderRadius = '15px';
	p.addEventListener('mouseover', ms = () => {
		p.style.cssText += 'color:red;background-color:yellow;transition: all 0.4s ease';
	});
	p.addEventListener('click', () => location.reload());

}






main();
