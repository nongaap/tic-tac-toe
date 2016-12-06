"use strict";

/*
gameCounter function counts the number of moves in a tic-tac-toe array
*/

function gameCounter(board){
	let counter = 0

	board.forEach(element =>{
		if(element !== '') counter++
	});

	return counter;
}

module.exports = gameCounter;