"use strict";

/* You can use functions as constructors to ensure a structure. */

const RISK_THRESHOLD = 1500;

function Customer(name, income, city) {
		this.name = name;
		this.income = income;
		this.city = city;

		this.calculateRisk = function() {
			if (this.income > RISK_THRESHOLD) {
				return 0;
			} else {
				return ((RISK_THRESHOLD - this.income)/RISK_THRESHOLD);
			}
		};
}

const c1 = new Customer('Alice', 2000, 'Barcelona');
const c2 = new Customer('Bob', 1000, 'Madrid');
const c3 = new Customer('Charlie', 500, 'Valencia');

console.log(`The risk associated to ${c1.name} is ${c1.calculateRisk()}.`);
console.log(`The risk associated to ${c2.name} is ${c2.calculateRisk()}.`);
console.log(`The risk associated to ${c3.name} is ${c3.calculateRisk()}.`);

/* Now you can enjoy the beauty of the "this" behaviour in object functions. */

function AdvancedCustomer(name, income, city) {
	this.name = name;
	this.income = income;
	this.city = city;

	this.calculateRisk = () => (this.income > RISK_THRESHOLD) ? 
	                           0 : ((RISK_THRESHOLD - this.income)/RISK_THRESHOLD);
}

const c4 = new AdvancedCustomer('Dave', 800, 'Ciutadella');
const calc = c4.calculateRisk;

console.log(`The risk associated to ${c4.name} is ${c4.calculateRisk()}.`);
console.log(`The risk associated to ${c4.name} is ${calc()}.`);

/* Wait, there is another way to achieve an equivalent result: */


function VeryAdvancedCustomer(name, income, city) {
	this.name = name;
	this.income = income;
	this.city = city;
}

VeryAdvancedCustomer.prototype.calculateRisk = function() {
	if (this.income > RISK_THRESHOLD) {
		return 0;
	} else {
		return ((RISK_THRESHOLD - this.income)/RISK_THRESHOLD);
	}
};

const c5 = new VeryAdvancedCustomer('Eva', 1800, 'Sitges');

console.log(`The risk associated to ${c5.name} is ${c5.calculateRisk()}.`);
console.log(`\tis c5.__proto__ === VeryAdvancedCustomer.prototype? 
             ${c5.__proto__ === VeryAdvancedCustomer.prototype}!`)


/* But wait, because there is a more readable syntax. */
class ExtremelyAdvancedCustomer {
	
	constructor(name, income, city) {
		this.name = name;
		this.income = income;
		this.city = city;
	}

	calculateRisk() {
		if (this.income > RISK_THRESHOLD) {
			return 0;
		} else {
			return ((RISK_THRESHOLD - this.income)/RISK_THRESHOLD);
		}
	};

}

const c6 = new ExtremelyAdvancedCustomer('Frank', 1000, 'Roda');
console.log(`The risk associated to ${c6.name} is ${c6.calculateRisk()}.`);

/* Although it is perfectly possible to support inheritance with prototype chains, you don't want
	 to go that way directly. Instead, use the "class" syntax sugar. */
	 
class VipCustomer extends ExtremelyAdvancedCustomer {
	constructor(name, income, city, riskDiscount) {
		super(name, income, city);
		this.riskDiscount = riskDiscount;
	}

	calculateRisk() {
		const basicRisk = super.calculateRisk();
		const vipRisk = Math.max(0, basicRisk-this.riskDiscount);
		return vipRisk;
	}
}
const c7 = new VipCustomer('Granados', 1000, 'Mordor', 0.20);
console.log(`The risk associated to ${c7.name} is ${c7.calculateRisk()} 
             (including ${c7.riskDiscount*100} risk points discount).`);
