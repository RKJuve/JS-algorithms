// mergeSort.js - a javascript implementation of the merge sort algorithm
//
// Ryan Juve - Code Fellows 2013

Array.prototype.isEmpty = _.isEmpty;

function mergeSort(array) {
	if (array.length < 2) {
		return array;
	}
	// split array into two ~equal sized chunks
	var mid = Math.floor(array.length/2),
		left = array.slice(0, mid),
		right = array.slice(mid);
	// Sort each chunk using merge sort
	var leftSorted = mergeSort(left),
		rightSorted = mergeSort(right);

	// combine chunks back into singe array and return
	var	sortedResult = [];
	while (leftSorted.length > 0 || rightSorted.length > 0) {
		if (leftSorted.isEmpty) {
			sortedResult.concat(rightSorted);
			rightSorted = [];
		}
		if (rightSorted.isEmpty) {
			sortedResult.concat(leftSorted);
			leftSorted = [];
		}

		var elem = (leftSorted[0] < rightSorted[0]) ? leftSorted.shift() : rightSorted.shift();
		sortedResult.push(elem);
	}


	return sortedResult;
}