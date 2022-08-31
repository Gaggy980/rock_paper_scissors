//get computer choice
const getComputerChoice = () => {
	const randomNum = Math.floor(Math.random() * 3);
	switch (randomNum) {
		case 0:
			return 'rock';
		case 1:
			return 'paper';
		case 2:
			return 'scissors';
	}
};

// //get user choice
function getUserChoice(){
		userInput = prompt('Please type: rock,paper or scissors: ');
		userInput = userInput.toLowerCase();
		warning = 'invalid input! Please type: rock,paper or scissors.';
//check for valid user input
			if(userInput === 'rock' || userInput === 'scissors' || userInput === 'paper'){
				return userInput
			}
			else{
				return warning
			}
}

//compare choices and announce winner
function playRound(getUserChoice, getComputerChoice){
	switch(getUserChoice + getComputerChoice){
		case 'paper'+'paper':
		case 'scissors'+'scissors':
		case 'rock'+'rock':
			return 'Its a tie!'
		case 'rock'+'paper':
		case 'paper'+'scissors':
		case 'scissors'+'rock':
		case warning + getComputerChoice:
			return 'You lost this time!'
		case 'paper'+'rock':
		case 'scissors'+'paper':
		case 'rock'+'scissors':
			return 'You won, Congrats!!!'
	}

}
//Play game of 5 rounds function
function game(){
	for (let i = 0+1; i < 6; i++) {
		const userChoice = getUserChoice();
		const computerChoice = getComputerChoice();
		playRound(userChoice, computerChoice)
		console.log('round: ' + i)
		console.log('You picked ' + userChoice);
		console.log('Computer picked ' + computerChoice);
		console.log(playRound(userChoice, computerChoice));
		console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
	}

}

game();

