"use strict";

/*
currentTurn function determine if it is X or O turn given a tic-tac-toe array. 
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