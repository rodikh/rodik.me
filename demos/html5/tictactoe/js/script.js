// JavaScript Document
var game;
var difficulty = 2;
var compPlayers = new Array;
$(document).ready(function(){
	var board = $('.board');
	build_board(board);
	compPlayers.push(2);
	start_game(board, compPlayers);
});

function build_board(board){
	board.empty();
	var k=0;
	for(i=0;i<3;i++){
		var row = $('<div class="row"></div>');
		board.append(row);
		for(j=0;j<3;j++){
			k++;
			row.append('<div class="cell" data-owner="0" data-pos="'+k+'"></div>');
		}
	}
	
	/// doctoring
	
//	board.find('.cell[data-pos=1],.cell[data-pos=2]').attr('data-owner',2);
	
	/// /doctoring
	
}
function start_game(board,compPlayers){
	console.log("starting game: comps",compPlayers);
	game = new Object;
	game.player = 1;
	board.find('.cell').empty();
	board.on('click','.cell', function(){
		if($.inArray(game.player, compPlayers) == -1){
			cell_click(board,this);
		}
	});
	if($.inArray(game.player, compPlayers)>-1){
		go_AI(board);
	}
}
function cell_click(board,cell){
	if($(cell).attr('data-owner') == 0){
		$(cell).attr('data-owner', game.player);
		var isWin = check_win(board);
		if(isWin == -1){
			game.player = 3-game.player;
			if($.inArray(game.player, compPlayers)>-1){
				go_AI(board);	
			}		
		}else{
			game_over(isWin, board);
		}
	}
}
function check_win(board){
	console.log("checking win for:", game.player);
	var winner = -1;
	rows = board.find('.row');
	rows.each(function(){				// only rows
		if($(this).find('.cell[data-owner=1]').length == 3){
			winner = 1;
		}else if($(this).find('.cell[data-owner=2]').length == 3){
			winner = 2;
		}
	});					
	
	if(rows.find('.cell:first-child[data-owner=1]').length == 3){			// only cols
		winner = 1;		
	}else if (rows.find('.cell:first-child[data-owner=2]').length == 3){
		winner = 2;
	}else if(rows.find('.cell:last-child[data-owner=1]').length == 3){
		winner = 1;		
	}else if (rows.find('.cell:last-child[data-owner=2]').length == 3){
		winner = 2;
	}else if(rows.find('.cell:nth-child(2)[data-owner=1]').length == 3){
		winner = 1;		
	}else if (rows.find('.cell:nth-child(2)[data-owner=2]').length == 3){
		winner = 2;
	}
	
	else
	
	if(rows.find('.cell[data-pos=1][data-owner="1"],.cell[data-pos=5][data-owner="1"],.cell[data-pos=9][data-owner="1"]').length == 3){
		winner = 1;
	}else if(rows.find('.cell[data-pos=1][data-owner="2"],.cell[data-pos=5][data-owner="2"],.cell[data-pos=9][data-owner="2"]').length == 3){
		winner = 2;
	}else if(rows.find('.cell[data-pos=3][data-owner="1"],.cell[data-pos=5][data-owner="1"],.cell[data-pos=7][data-owner="1"]').length == 3){
		winner = 1;
	}else if(rows.find('.cell[data-pos=3][data-owner="2"],.cell[data-pos=5][data-owner="2"],.cell[data-pos=7][data-owner="2"]').length == 3){
		winner = 2;
	}
	// diagonals

	
	
	if(board.find('.cell[data-owner=0]').length == 0){	 // no one won
		winner = 0;
	}
	return winner;
}
function go_AI(board){
	var determination = 0;
	if (difficulty > 0){
		var blanks = board.find('.cell[data-owner="0"]');
		var selcell = blanks[Math.floor(Math.random()*blanks.length)];
		determination = 1;
	}
	if(difficulty > 1){
		var rows = board.find('.row');
		rows.each(function(){
			if($(this).find('.cell[data-owner='+game.player+']').length == 2 && $(this).find('.cell[data-owner=0]').length == 1){
				selcell = $(this).find('.cell[data-owner=0]');
				determination = 10;
			}
		});
		
		if(rows.find('.cell:first-child[data-owner='+game.player+']').length == 2 && rows.find('.cell:first-child[data-owner=0]').length == 1){
			selcell = rows.find('.cell:first-child[data-owner=0]');
			determination = 10;
		}
		if(rows.find('.cell:last-child[data-owner='+game.player+']').length == 2 && rows.find('.cell:last-child[data-owner=0]').length == 1){
			selcell = rows.find('.cell:last-child[data-owner=0]');
			determination = 10;
		}	
		if(rows.find('.cell:nth-child(2)[data-owner='+game.player+']').length == 2 && rows.find('.cell:nth-child(2)[data-owner=0]').length == 1){
			selcell = rows.find('.cell:nth-child(2)[data-owner=0]');
			determination = 10;
		}
	
		if(rows.find('.cell[data-pos=1][data-owner="'+game.player+'"],.cell[data-pos=5][data-owner="'+game.player+'"],.cell[data-pos=9][data-owner="'+game.player+'"]').length == 2 && rows.find('.cell[data-pos=1][data-owner="0"],.cell[data-pos=5][data-owner="0"],.cell[data-pos=9][data-owner="0"]').length == 1){
			selcell = rows.find('.cell[data-pos=1][data-owner="0"],.cell[data-pos=5][data-owner="0"],.cell[data-pos=9][data-owner="0"]');
			determination = 10;
		}else if(rows.find('.cell[data-pos=3][data-owner="'+game.player+'"],.cell[data-pos=5][data-owner="'+game.player+'"],.cell[data-pos=7][data-owner="'+game.player+'"]').length == 2 && rows.find('.cell[data-pos=3][data-owner="0"],.cell[data-pos=5][data-owner="0"],.cell[data-pos=7][data-owner="0"]').length == 1){
			selcell = rows.find('.cell[data-pos=3][data-owner="0"],.cell[data-pos=5][data-owner="0"],.cell[data-pos=7][data-owner="0"]');
			determination = 10;
		}
	}
	if(difficulty > 2){
		var enemy = game.player-3;
		
	}
	setTimeout(function(){
		cell_click(board, selcell);
	}, 300);
}

function game_over(player, board){
	board.off('click');
	console.log("player "+player+" won");
	$('body').css({background: "#efefef"});
}