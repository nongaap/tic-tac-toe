"use strict";

const gameCounter = require('./gameCounter');
const firstMove = require('./firstMove');

/*
move function accepts tic-tac-toe array as a parameter and returns index position for the next move.
*/

function move(board){
	switch (gameCounter(board)) {
		case 0:
		case 1:
			return firstMove(board);
			break;
		case 2:
			break;
		case 3:
			break;
		case 4:
			break;
		case 5:
			break;
		case 6:
			break;
		case 7:
			break;
		case 8:
			return board.indexOf('');
			break;
	}

}

module.exports = move;