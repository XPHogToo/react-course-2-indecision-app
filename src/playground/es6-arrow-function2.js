// arguments object - no longer bound with arrow functions

const add = (a, b) => {
//	console.log(arguments); - won't work with ES6
	return a + b;
}

console.log(add(55,1,1001));

// this keyword - no longer bound with arrow functions

const user = {
	name: 'Ron',
	cities: ['Bethlehem','Mountaintop','Philadelphia'],
	printPlacesLived() {
		return this.cities.map((city) => this.name + ' has lived in ' + city);
	}
};
console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
	// numbers - array of numbers
	numbers: [10, 20, 30],
	// multiplyBy - single number
	multiplyBy: 3,
	// multiply - return a new array where the numbers have been multiplied
	multiply () {
		return this.numbers.map((number) => number * this.multiplyBy);
	}
};

console.log(multiplier.multiply());