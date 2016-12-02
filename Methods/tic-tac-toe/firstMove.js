'use strict';

/*
firstMove function returns the position (assuming the tic-tac-toe board is numbered 0-8) a player should take for their first move.
If no argument is passed, the function assumes it is making the first move in the game.
If an argument is passed, the function assumes it is making the secomd move in the game. 
*/

function firstMove(position){
	let move = 0;

	switch(position) {
		case 0: case 2: case 6: case 8:
			move = 4;
			break;
		case 5: case 7:
			move = 8;
			break;
	}

	return move;

};

module.exports = firstMove;
