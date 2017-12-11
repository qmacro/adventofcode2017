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
		return R.reduce(
			(a, x) => {
				let parsed = x.match(/^([a-z]+) \((\d+)\)( -> (.+)$)?/);
				a[parsed[PROGRAM]] = {
					program : parsed[PROGRAM],
					weight : parsed[WEIGHT],
					supports : parsed[SUBPROGRAMS] ? R.split(/, /, parsed[SUBPROGRAMS]) : []
				}
				return a;
			},
			{},
			lines
		);

	},

	graphViz = x => R.map(y => `  "${x.program}" -> "${y}"\n`, x.supports);

// Invoke solution on input
require('fs').readFile(__dirname + '/input.dat', 'utf8', (err, data) => {
	let intermediate = solve(data);
	console.log(
		R.pipe(
			R.filter(x => x.supports.length),
			R.values,
			R.reduce((a, x) => R.concat(graphViz(x), a), []),
			R.join("")
		)(intermediate)
	);
});
