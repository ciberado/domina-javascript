"use strict";

/* Function expressions are the easier way to understand js functions. */

const capitalize = function(word) {
	return word.charAt(0).toUpperCase() + word.slice(1);
}

const sayHi = function(name = 'lovely', ...additionalMessages) {
	console.log('********************');
	console.log(`Hi, ${capitalize(name)}.`);
	if (additionalMessages.length > 0) {
		for (let message of additionalMessages) {
			console.log(`\t${additionalMessages}`);
		}
	}
	console.log('********************');
};

console.log(sayHi);
console.log(sayHi.length);	
var winki = sayHi;
console.log(winki.length);

sayHi('alice');
winki('bob');
sayHi();
sayHi('Charly', 'Buy the milk.', 'Enjoy the afternoon.');

/* You can also define explicit functions and they support hoisting. */

greetings();

function greetings() {
	console.log('Hello, sweetie. I hate you.')
}

/* Arrow functions (aka lambdas) are a compact way of defining a function: */

const cap = w => w.charAt(0).toUpperCase() + w.slice(1);
console.log(cap('dave'));

/* Wrapping code with a function is a very effective way of isolating identifiers. */

const module1 = function(exports) {
	const a = 100;
	exports.z = a;
}

const module2 = function(exports) {
	const a = 200; 
	exports.z = a;
}

const a = 300;
exported1 = {};
exported2 = {};
module1(exported1);
module2(exported2);
const a1 = exported1.z;
const a2 = exported2.z;

console.log(`The module 1 exported ${a1}, 
						 module 2 exporte ${a2} 
						 and the variable a value is ${a}.`);

/* Functions can be nested. */

const module3 = function(exports) {
	const plusOne = function(value) {
		return value = value + 1;
	}

	exports.plusOne = plusOne;
}

const exported3 = {};
module3(exported3);
const p1 = exported3.plusOne;
console.log(`PlusOne(1) demo: ${p1(1)}.`);
