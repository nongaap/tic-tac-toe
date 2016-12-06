"use strict";

const winningCombo = require('./winningCombo');

/*
winner function accepts tic-tac-toe board array as a paramenter and determines if the game has a winner.
Returns 'Tie', 'In Progress', 'X wins', 'O wins' 
*/

function winner(board){

	if (!winningCombo(board) && board.indexOf('') > -1) return 'In Progress';
	if (!winningCombo(board) && board.indexOf('') === -1) return 'Tie';
	if (winningCombo(board)) return board[winningCombo(board)[0]] + ' Wins';

}

module.exports = winner;