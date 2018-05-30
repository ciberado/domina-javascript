"use strict";

/*
 This code is basically a set of semi-random sentences showing
 some js syntax key points. As you can see, this is a multi-line
 comment.
*/

/* Types: Number, Boolean, String, Symbol, null, undefined*/

// Numbers
let a = 1;
console.log(a);
a = a / 10;
console.log(a);
const b = 0.2;
const c = a + b;
console.log(c);

// Divide by 0 to see the infinity
console.log(1/0);
console.log(typeof(Infinity));

// A const is a const
try {
  c = 4;
} catch (err) {
  console.log('Error.');
}

// Booleans are truly falsies

const c1 = 'Hi!';
const c2 = undefined;
console.log(c1 || c2);
console.log(c2 || c1);

// This last one provides an useful trick for lambda functions (you will see it later)
const c3 = 'Wow!';
console.log(c1 && c3);


// Strings are objects pointed by references
let d = 'Hello';
console.log(`The length of the string referenced by "d" is ${d.length}.`);
d = d + ' World';
const e = `
   So much fun with multiline interpolation: ${d}.
`;
console.log(e);

// + with strings makes it all strings
console.log('' + 4 + 2);

// - with strings... well, it's not concatenation
console.log(4 + '4' - '2');
const f = parseInt('4');  // On other news: parseFloat()
console.log(4 + f - '2');

// Hoisting
console.log(g);
var g = 0;

/* Flow control, conditions and booleans */

let h = 1; 
let i;
if (i = h === 1) console.log(`The value of "i" is ${i}`); 
if (i = false) 
  console.log('Nobody is going to hear you scream.')
else 
  console.log('What happened here? You are evaluating "false" and assigning it to var "i"!');

/* Falsy values: false, undefined, null, 0, '', NaN. */

let j = null;
if (j === false) console.log('"k" is definitively not a boolean with the value false.');
if (j == false) console.log('"k" is not false.');
if (!j) console.log('But "k" it is simply falsy.');

try {
  console.log(100 / 0);
} catch (err) {
  console.log('Well, that not worked.');
}

/* Loops loops loops loops */

let k = 0;
external:
while (k < 1000) {
  k = k + 1;
  internal:
  for (let l=0; l < 3; l++) {
    if (l === 2) {
      console.log(`Avoiding internal because l === 2.`);
      continue internal;
    }
    if (k == 3) {
      console.log(`Avoiding external because k === 1.`);
      continue external;
    }
    if (k === 5) { 
      console.log(`I'm tired, breaking external because k===3.`);
      break external;
    }
    console.log(`External: ${k}. Internal: ${l}.`);
  }
}

// Forin vs Forof vs Thorin vs Durin

let m = ['a', 'b', 'c'];
console.log('for..in');
for (let key in m) console.log(`${key} = ${m[key]}.`);
console.log('for..of');
for (let value of m) console.log(`${value}.`);

