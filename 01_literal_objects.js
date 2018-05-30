"use strict";

/* Literal objects are created using curly braces and their structure is flexible. */

const customer1 = {};
customer1.name = 'Alice';
customer1.income = 1000; 

console.log(customer1['name']);
console.log(customer1.income);
console.log(customer1.city);
customer1.city = 'Barcelona';
console.log(customer1.city);


const customer2 = {
	'name' : 'Bob',
	'income' : 1000,
	'city' : 'Madrid'		
};

console.log(customer2.name);
console.log(customer2['income']);

for (const nameProp in customer2) {
	console.log(`${nameProp} is ${customer2[nameProp]}.`);
}

const name = 'Charly';
const income = 1000;
const city = 'Valencia';
const customer3 = { name, income, city};
for (const nameProp in customer3) {
	console.log(`${nameProp} is ${customer3[nameProp]}.`);
}

const {a, b, z} = { a : 1, b : 2, c : 3};
console.log(`a is ${a}, b is ${b} and z is ${z}.`);


