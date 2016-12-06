"use strict";

const gameCounter = require('./gameCounter');
const firstMove = require('./firstMove');
const secondMove = require('./secondMove');
const incrementalMove = require('./incrementalMove');

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
			return secondMove(board);
			break;
		case 3:
		case 4:
		case 5:
		case 6:
		case 7:
		case 8:
			return incrementalMove(board);
			break;
	}

}

module.exports = move;