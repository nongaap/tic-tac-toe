$(document).ready(function(){

	var gameBoard = ['','','','','','','','',''];
	var gameCounter = 0;
	var gameStatus = 'In Progress'

	$('.square').one('click', gameClick);
	$('.newGame h2').on('click', newGame);
	$('#O').one('click', playerO);

	function playerTurn(count) {
		return count % 2 === 0 ? 'X' : 'O'
	}

	function addToBoard(index) {
		return gameBoard[index] = playerTurn(gameCounter);
	}

	function computerMove() {
		$.ajax({
			type: "POST",
			url: '/api/move',
		  data: {board: JSON.stringify(gameBoard)},
		  dataType: 'json',
		  success: function(obj) {
		  	var index = obj.nextMove;
		  	addToBoard(index);
		  	$('#'+index.toString()).find('h2').text(playerTurn(gameCounter));
		  	$('#'+index.toString()).unbind('click');
		  	gameCounter++;
		  	winner();
		  },
		 	error: function(xhr, status, err) {
		  	console.error(status, err.toString());
			}
		});
	}

	function winner() {
		$.ajax({
			type: "POST",
			url: '/api/winner',
		  data: {board: JSON.stringify(gameBoard)},
		  dataType: 'json',
		  success: function(obj) {
		  	gameStatus = obj.winner;
		  	if(gameStatus !== 'In Progress') {
					$( '.outcome h2' ).text(gameStatus);
				}
		  },
		 	error: function(xhr, status, err) {
		  	console.error(status, err.toString());
			}
		});
	}

	function newGame() {
		gameBoard = ['','','','','','','','',''];
		gameCounter = 0;
		gameStatus = 'In Progress';
		$('.square').unbind('click').one('click', gameClick);
		$('#O').unbind('click').one('click', playerO);
		$( '.square h2' ).empty();
		$( '.outcome h2' ).empty();
		$('#X').css({'background-color':'lightblue'});
		$('#O').css({'background-color':'white'});
		return 'new game';
	}

	function gameClick(event){
  	var square = $(event.currentTarget);
  	var index = square.attr('id');
  	if(gameStatus === 'In Progress'){
  		$('#'+index).find('h2').text(playerTurn(gameCounter));
  		addToBoard(parseInt(index));
  		gameCounter++;
  		$.ajax({
				type: "POST",
				url: '/api/winner',
		  	data: {board: JSON.stringify(gameBoard)},
		  	dataType: 'json',
		  	success: function(obj) {
		  		gameStatus = obj.winner;
		  		if(gameStatus !== 'In Progress') {
						$( '.outcome h2' ).text(gameStatus);
					} else {
						computerMove();
					}
		  	},
		 		error: function(xhr, status, err) {
		  		console.error(status, err.toString());
				}
			});
  		if(gameCounter > 0) {
				$('#O').off('click', playerO);
			}
  	}
	}

	function playerO(event) {
		$('#X').css({'background-color':'white'});
		$('#O').css({'background-color':'lightblue'});
		computerMove();
	}

});
