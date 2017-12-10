// Advent of Code
// Day 7 Puzzle B

const
	R = require('ramda'),

	// Regexp match results indices
	PROGRAM = 1,
	WEIGHT = 2,
	SUBPROGRAMS = 4,

	// Solution
	solve = x => {

		let lines = R.split(/\n/, x);
		console.log(
			R.reduce(
				(a, x) => {
					let parsed = x.match(/^([a-z]+) \((\d+)\)( -> (.+)$)?/);
					a[parsed[PROGRAM]] = {
						weight : parsed[WEIGHT],
						supports : parsed[SUBPROGRAMS] ? R.split(/, /, parsed[SUBPROGRAMS]) : []
					}
					return a;
				},
				{},
				lines
			)
		);
		return true;

	};

// Invoke solution on input
require('fs').readFile(__dirname + '/testinput.dat', 'utf8', (err, data) => {
	console.log(solve(data));
});
