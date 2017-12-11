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

		const totalWeight = (data, item) => {
				console.log("TW", item, data);
				// return x.weight + R.reduce(R.add(totalWeight), 0, x.supports);
			},
			lines = R.split(/\n/, x);
			data = R.reduce(
				(a, x) => {
					let parsed = x.match(/^([a-z]+) \((\d+)\)( -> (.+)$)?/);
					a[parsed[PROGRAM]] = {
						program : parsed[PROGRAM],
						weight : parsed[WEIGHT] * 1,
						supports : parsed[SUBPROGRAMS] ? R.split(/, /, parsed[SUBPROGRAMS]) : []
					}
					return a;
				},
				{},
				lines
			);

			totalWeight(data, 'ugml')

		return data;

	},

	graphViz = x => R.map(y => `  "${x.program}" -> "${y}"\n`, x.supports);


// Invoke solution on input
require('fs').readFile(__dirname + '/testinput.dat', 'utf8', (err, data) => {
	let intermediate = solve(data);
	intermediate;
	// console.log(
	// 	R.pipe(
	// 		R.filter(x => x.supports.length),
	// 		R.values,
	// 		R.reduce((a, x) => R.concat(graphViz(x), a), []),
	// 		R.join("")
	// 	)(intermediate)
	// );
});
