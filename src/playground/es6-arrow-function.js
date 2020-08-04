//function square (x) {
//	return x * x;
//}

//console.log(square(3));

//const squareArrow = (x) => {
//	return x * x;
//};

//const squareArrow = (x) => x * x;

//console.log(squareArrow(4));

// Challenge - Use arrow functions
// Get First Name in regular arrow function & shorthand version

const getFirstName = (fullName) => {
	return fullName.split(' ')[0];
};

console.log(getFirstName('Mike Kralik'));

const gFirstName = (fullName) => fullName.split('')[0];

console.log(getFirstName('Karissa Kralik'));