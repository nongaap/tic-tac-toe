"use strict";

/*
firstMove function returns the position (assuming the tic-tac-toe board is numbered 0-8) a player should take for their first move.
If no argument is passed, the function assumes it is making the first move in the game.
If an argument is passed, the function assumes it is making the secomd move in the game. 
*/

function currentTurn(board){
	let x = 0;
	let o = 0;

	board.forEach(element => {
		if(element === 'X') x++
		if(element === 'O') o++
	});

	return x === o ? 'X' : 'O'

}

module.exports = currentTurn;