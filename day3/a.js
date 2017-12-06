// Advent of Code
// Day 3 Puzzle A

const
	R = require('ramda'),

	// Solution
	solve = x => {
		'use strict';

		const

			// concentricSquare - which square the value lies within.
			// For example 1, 3, 5, 7 etc - 12 lies within 5, 44 within 7.
			highSqrt = Math.ceil(Math.sqrt(x)),
			concentricSquare = highSqrt % 2 === 0 ? highSqrt + 1 : highSqrt,

			// Other values for various calculations
			sideDistance = concentricSquare - 1,
			midPoint = sideDistance / 2,
			highCorner = concentricSquare * concentricSquare,

			// Corners are: [NE, NW, SW, SE] e.g. [3, 5, 7, 9] for a '3' concentric square
			corners = R.reverse(R.map(x => highCorner - R.multiply(sideDistance, x), R.range(0, 4))),

			// Predicate function for calculating which corner a value lies within / beneath
			// e.g. for the above '3' concentric square, this would find the corner '5' for value 4.
			highWaterMark = R.curry((v, n) => v <= n),

			// For calculating how many steps there are back into the centre from a given concentric
			// square, e.g. concentric square '5' is 2 steps back in to the centre.
			nthOdd = R.compose(R.divide(R.__, 2), R.dec),
			stepsIn = x => Math.floor(nthOdd(x));
		
		// What's the index (into the [SE, SW, ])
		//   R.findIndex(highWaterMark(29), corners)
		//   stepsIn(5)
		// Calculate the steps back to centre, based on which side of the concentric
		// square we're starting from. In X + Y format.

		// Corner Index
		let cornerIndex = R.findIndex(highWaterMark(x), corners);

		return (stepsIn + Math.abs(R.find(highWaterMark(x), corners) - midPoint - x));


		// return [concentricSquare, sideDistance, midPoint, corners];
		return 1;

	},

	tests = [
		[1, 0],
		[12, 3],
		[23, 2],
		[1024, 31]
	];

console.log(solve(43));

// Execute tests, all should return true
// console.log(R.all(([i, o]) => solve(i) == o, tests));

// Invoke solution on input
// require('fs').readFile(__dirname + '/input.dat', 'utf8', (err, data) => {
// 	console.log(solve(data));
// });

// const
// R = require('ramda'),
// corners = [13, 17, 21, 25],
// val = 14;

// let x = R.find(x => val <= x, corners);
// x 