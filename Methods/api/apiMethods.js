"use strict";

const unbeatableTicTacToe = require('../tic-tac-toe/unbeatableTicTacToe');
const winner = require('../tic-tac-toe/winner');

function ticTacToe(req,res) {
	let input = JSON.parse(req.body.board);
	let output = unbeatableTicTacToe(input);
  res.json({board : output});
}

module.exports = {
	ticTacToe
};