// Advent of Code
// Day 8 Puzzle A

const
	R = require('ramda'),

	// Solution
	solve = x => {

		return true;

	};

// Invoke solution on input
require('fs').readFile(__dirname + '/testinput.dat', 'utf8', (err, data) => {
	console.log(solve(data));
});
