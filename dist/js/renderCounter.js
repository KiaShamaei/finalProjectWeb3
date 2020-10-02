'use strict';

var stateBoard = {};
async function loadBoard() {
	var boards = "http://my-json-server.typicode.com/mkazemiraz/job-blog-fakeDB/jobBoard";
	try {
		var res = await fetch(boards);
		stateBoard = await res.json();

		return stateBoard;
	} catch (error) {
		console.log(error);
	}
}

async function renderBoard() {
	var board = await loadBoard();
	console.log(board);
	document.querySelector('.jobsCounter1').innerHTML = board.candidates;
	document.querySelector('.jobsCounter2').innerHTML = board.jobPosted;
	document.querySelector('.jobsCounter3').innerHTML = board.jobFilled;
	document.querySelector('.jobsCounter4').innerHTML = board.companies;
}
renderBoard();
/*{
candidates: 1930,
jobPosted: 54,
jobFilled: 120,
companies: 550
}*/