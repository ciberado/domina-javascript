/* Yeap: "use strict" is commented for a reason. */
//"use strict";

const RISK_THRESHOLD = 1500;

const customer1 = {
	name : 'Alice',
	income : 1000,
	city : 'Barcelona',

	calculateRisk : function() {
		if (this.income > RISK_THRESHOLD) {
			return 0;
		} else {
			return ((RISK_THRESHOLD - this.income)/RISK_THRESHOLD);
		}
	} 
};

console.log(`The risk associated to ${customer1.name} is ${customer1.calculateRisk()}.`);

/* You can always be less verbose: */

const customer2 = {
	name : 'Bob',
	income : 1000,
	city : 'Madrid',

	calculateRisk() {
		if (this.income > RISK_THRESHOLD) {
			return 0;
		} else {
			return ((RISK_THRESHOLD - this.income)/RISK_THRESHOLD);
		}
	} 
};

console.log(`The risk associated to ${customer2.name} is ${customer2.calculateRisk()}.`);

/* Remeber this (pun intended): "this" will point to the object whose property
	 has been used to invoke the function.
*/

name = 'Charlie';
income = 1000;
calc = customer2.calculateRisk;

console.log(`The risk associated to ${global.name} is ${calc()}.`);
/* Ok, ok: now try to activate the "use strict" clause removing the comment. */


/* But this WILL NOT WORK AS EXPECTED: */

const customer3 = {
	name : 'Dave',
	income : 1000,
	city : 'Ciutadella',

	calculateRisk : () => (this.income > RISK_THRESHOLD) ? 0 : ((RISK_THRESHOLD - this.income)/RISK_THRESHOLD)
};

console.log(`The risk associated to ${customer3.name} is ${customer3.calculateRisk()}.`);
