"use strict";

/*
firstMove function returns the position (assuming the tic-tac-toe board is numbered 0-8) a player should take for their first move.
If an empty board is passed in, the function assumes it is making the first move in the game.
*/

function firstMove(board){

	return board.indexOf('X') === 4 || board.indexOf('X') === -1 ? 0 : 4

}

module.exports = firstMove;