"use strict";

const currentTurn = require('./currentTurn');

/*
addBoard function accepts board(array) and position and returns new tic-tac-toe array with added element.
*/

function addBoard(board, position){
	let move = currentTurn(board);
	board[position] = move;

	return board;
}

module.exports = addBoard;