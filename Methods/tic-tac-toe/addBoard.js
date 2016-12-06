"use strict";

const currentTurn = require('./currentTurn');

/*
addBoard function accepts board(array) and position and returns new tic-tac-toe array with added element.
*/

function addBoard(board, position){
	let move = currentTurn(board);
	let newBoard = [];

	for (let i = 0; i < board.length; i++){
		if(i === position) {
			newBoard.push(move);
		} else {
			newBoard.push(board[i]);
		}
	}

	return newBoard;

}

module.exports = addBoard;