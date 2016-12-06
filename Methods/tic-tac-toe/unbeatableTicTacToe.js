"use strict";

const move = require('./move');
const addBoard = require('./addBoard');

/*
unbeatableTicTacToe function accepts tic-tac-toe array as a parameter and returns tic-tac-toe board with optimal next move added to board.
*/

function unbeatableTicTacToe(board){
	let position = move(board);

	return addBoard(board,position);

}

module.exports = unbeatableTicTacToe;