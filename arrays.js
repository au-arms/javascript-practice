// #1:

const input = [ 1, 2, 3, 4, 5 ];
const output = input.map((_, index) =>
	input.filter((_, filterIndex) => filterIndex !== index).reduce((v1, v2) => v1 * v2)
);
console.log(output);

// #2
// smallest window to be sorted

const input2 = [ 3, 7, 5, 6, 9 ];

const problem2_1 = (input2) => {
	const sortedInput = [ ...input2 ].sort((val1, val2) => val1 - val2);
	const comparison = sortedInput.map((val, index) => val === input2[index]);

	const index1 = comparison.findIndex((equal) => !equal);
	const index2 = comparison.length - 1 - [ ...comparison ].reverse().findIndex((equal) => !equal);
	console.log(index1, index2);
};

problem2_1(input2);

// O(n)
const problem2_2 = (input) => {
	// get first element that is larger than the subsequent
	const index1 = input.slice(0, input.length - 1).findIndex((val, index) => val > input[index + 1]);

	if (index1 === -1) throw new Error('Array in order');

	// get index of last element to have a bigger value than index1
	const nextMax = input.findIndex((val) => val > input[index1]);

	const index2 = nextMax === -1 ? input.length - 1 : nextMax;

	console.log(index1, index2);
};

problem2_2(input2);
problem2_2([ 3, 5, 6, 7, 8 ]);

//3
// max subarray sum

const problem3 = (input) =>
	input.reduce(
		(agg, val) => {
			agg.maxEndingHere = Math.max(val, agg.maxEndingHere + val);
			agg.maxSoFar = Math.max(agg.maxSoFar, agg.maxEndingHere);
			return agg;
		},
		{
			maxEndingHere: 0,
			maxSoFar: 0
		}
	).maxSoFar;

console.log(problem3([ 34, -50, 42, 14, -5, 86 ]));

//4
// find number of smaller elements to the right

const problem4_naive = (input) => [
	...input
		.slice(0, input.length - 1)
		.map((currentVal, currentIndex) =>
			input
				.slice(currentIndex + 1)
				.reduce((smallerCount, nextValue) => (nextValue < currentVal ? smallerCount + 1 : smallerCount), 0)
		),
	0
];

console.log(problem4_naive([ 3, 4, 9, 6, 1 ]));
