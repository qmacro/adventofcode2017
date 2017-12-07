// Advent of Code
// Day 3 Puzzle B

const
	R = require('ramda'),

	// Solution
	solve = x => {
		'use strict';

		/**
		 * The X,Y coordinates of cells in the spiral are predictable, following a
		 * pattern like this:
		 * 
		 * n    x   y    xdiff ydiff
		 * 1    0   0      0     0
		 * 2    1   0      1     0
		 * 3    1   1      0     1
		 * 4    0   1     -1     0
		 * 5   -1   1     -1     0
		 * 6   -1   0      0    -1
		 * 7   -1  -1      0    -1
		 * 8    0  -1      1     0
		 * 9    1  -1      1     0
		 * 10   2  -1      1     0
		 * ...
		 * 
		 * So we'll build a 'relativeStep' generator to generate those values.
		 */
		function* relativeStep() {

			const
				flip = x => x === 0 ? 1 : 0;

			let n = 0,
				size = 1,
				sign = 1,
				loop;

			while(true) {

				/**
				 * Have to do this twice like this as you can only
				 * yield from generator functions, not just any
				 * (e.g. callback) functions.
				 */

				// Pass 1
				loop = size;
				n = flip(n);
				while (loop--) yield [n * sign, flip(n) * sign];

				// Pass 2
				loop = size;
				n = flip(n);
				while (loop--) yield [n * sign, flip(n) * sign];

				// Flip sign around too, and increment the size to 
				// reflect the next-biggest concentric square
				sign = sign * -1;
				size++;

			}

		}
		
		// Instantiate the generator
		const gen = relativeStep();
		
		return gen.next().value;

	},

	tests = [
		[[ 0, 0], 1],
		[[ 1, 0], 1],
		[[ 1, 1], 2],
		[[ 0, 1], 4],
		[[-1, 1], 5],
		[[-1, 0], 10],
		[[-1,-1], 11],
		[[ 0,-1], 23],
		[[ 1,-1], 25]

	];

// Temporary - invoke the solver
console.log(solve());

// Execute tests, all should return true
// console.log(R.all(([i, o]) => solve(i) == o, tests));

// Invoke solution on input
// require('fs').readFile(__dirname + '/input.dat', 'utf8', (err, data) => {
// 	console.log(solve(data));
// });