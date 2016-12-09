"use strict";

const unbeatableTicTacToe = require('../tic-tac-toe/unbeatableTicTacToe');
const gameWinner = require('../tic-tac-toe/winner');
const move = require('../tic-tac-toe/move');

function ticTacToe(req,res) {
	let input = JSON.parse(req.body.board);
	let output = unbeatableTicTacToe(input);
  res.json({board : output});
}

function winner(req,res) {
	let input = JSON.parse(req.body.board);
	let output = gameWinner(input);
  res.json({winner : output});
}

function nextMove(req,res) {
	let input = JSON.parse(req.body.board);
	let output = move(input);
  res.json({nextMove : output});
}

module.exports = {
	ticTacToe,
	winner,
	nextMove
};