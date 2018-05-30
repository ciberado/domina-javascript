"use strict";


/* An Array is just a type of object with ordinal properties and an interesting length. */

const a1 = new Array('a', 'b', 'c');
a1['8'] = 'y';
a1[9] = 'z'; // look at the type: property names are implicit strings!
console.log(`Properties of an array with ${a1.length} slots:`);
for (let key in a1) {
  console.log(`\t${key} = ${a1[key]}.`);
}

/* The Array constructor is tricky. */
const a2 = new Array(10);
console.log(a2[0]);
console.log(a2.length);

/* But we have a better syntax: */
const a3 = Array.of(10);
console.log(a3[0]);
console.log(a3.length);

/* And even syntax sugar: */
const a4 = ['alice', 'bob', 'charly', 'dave'];
console.log(a4[0]);

/* List of methods: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array */

/* Functional programming is super expressive. */

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

const a5 = ['alice', 'bob', 'charly', 'dave'];
const a6 = a5.map(capitalize);
for (let v6 of a6) {
  console.log(v6);
}
             
/* Of course you can directly pass an anonymous reference. */

const a7 = ['alice', 'bob', 'charly', 'dave'];
const a8 = a7.filter(function (elem) {
  return elem.indexOf('a') != -1;
});
for (let v8 of a8) {
  console.log(v8);
}

/* Or even better, use arrow functions. */
const a9 =  ['alice', 'bob', 'charly', 'dave'];
const r9 = a9.reduce((reducedValue, currentValue) => reducedValue+currentValue, '>>> ');
console.log(r9);

/* And chain all the results */
const a10 =  ['alice', 'bob', 'charly', 'dave'];
a10.filter(w => w.toLowerCase().indexOf('a') != -1)
  .map(w => w.charAt(0).toUpperCase() + w.slice(1))
  .forEach(w => console.log(w));

/* Big finish! Creating several outputs from single values */
const a11 =  ['alice', 'bob', 'charly', 'dave'];
const r11 = a11.reduce((r, v) => r.concat(v.split('')).concat([' ']) , []);
console.log(r11);
