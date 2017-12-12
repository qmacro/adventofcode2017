// Advent of Code
// Day 9 Puzzle A

const
	R = require('ramda'),

	// Solution
	solve = x => {

		"use strict";

		return true;

	},

	tests = [
		["{}", 1],
		["{{{}}}", 3],
		["{{},{}}", 3],
		["{{{},{},{{}}}}", 6],
		["{<{},{},{{}}>}", 1],
		["{<a>,<a>,<a>,<a>}", 1],
		["{{<a>},{<a>},{<a>},{<a>}}", 5],
		["{{<!>},{<!>},{<!>},{<a>}}", 2]
	];

// Execute tests, all should return true
console.log(R.all(([i, o]) => solve(i) == o, tests));

// Invoke solution on input
// require('fs').readFile(__dirname + '/input.dat', 'utf8', (err, data) => {
// 	console.log(solve(data));
// });
