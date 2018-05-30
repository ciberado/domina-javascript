"use strict";

/* Javascript has (basically) a single-thread execution loop so any long process collapses the engine.
   Asynchronicity is used to overcome that limitation. But if you keep writing serialized statements bad
   things are going to happen.
*/
function asyncSadMessGen() {
  setTimeout( () => console.log("Oops!"), 1000);
}

console.log('Hi.');
asyncSadMessGen();
console.log('Bye.');

/* Luckely we just need to use functions-as-parameters to solve the problem. */

function asyncMessGenWithCallback(message, callback) {
  setTimeout((ms, cb) => {
    console.log(`Yaiiiiiii! ${ms}`);
    cb();
  }, 1000, message, callback);
}

console.log('Hi.');
asyncMessGenWithCallback('Everything is fine.', () => console.log('Bye.'));

/* But wait: what if the async function (setTimeout, in this case) does not provide a way
   to pass params to the callback? (like 99% of the nodejs library). Closures to the rescue!
*/

function asyncMessGenWithClosure(message, callback) {
  setTimeout(() => {
    console.log(`Yaiiiiiii! ${message}`);
    callback();
  }, 1000 /* look! no additional params!*/);
}

console.log('Hi.');
asyncMessGenWithClosure(`Everything is fine and it's not magic.`, () => console.log('Bye.'));

/* A function should not have secondary effects. So that "console.log" should not be placed inside our
   asynchronous function for maximum versatility.
*/
function asyncMessGenWithClosureAndResult(message, callback) {
  setTimeout(() => {
    const response = `Yaiiiiiii! ${message}`;
    callback(response);
  }, 1000);
}

console.log('Hi.');
asyncMessGenWithClosureAndResult(`Everything is fine and it's not magic.`, function(response) {
  console.log(response);
  console.log('Bye.')
});

/* The problem with callbacks is you need three monitors for the indentation if they are nested. */

const fs = require('fs');

// Same function as before
function asyncMessGenWithClosureAndResult(message, callback) {
  setTimeout(() => {
    const response = `Yaiiiiiii! ${message}`;
    callback(response);
  }, 1000);
}

fs.readFile('07_asynchronicity-message.txt', 'utf8', function(err, data) {
  console.log('Hi.');
  asyncMessGenWithClosureAndResult(`Everything is fine and it's not magic.`, function(response) {
    console.log(response);
    console.log('Bye.');
  });
});

/* Promises are objects with fluent syntax allowing chaining the behaviour of async functions. */

function asyncMessGenWithPromise(message) {
  const promise = new Promise(function(resolve, reject) {
    setTimeout(() => {
      if (message === undefined) {
        reject('The param message is mandatory.');
      } else {
        const response = `Yaiiiiiii! ${message}`;
        resolve(response);
      }  
    }, 1000);
  });
  return promise;
}

console.log('Hi.');
const promise = asyncMessGenWithPromise(`Everything is easier to read with promises.`);
promise.then(function(response) {
  console.log(response);
  console.log('Bye.');
});
promise.catch(function(err) {
  console.log(`Something was wrong: ${err}.`);
});

/* It's fluent, so you can chain the methods. */

// same function as before
function asyncMessGenWithPromise(message) {
  const promise = new Promise(function(resolve, reject) {
    setTimeout(() => {
      if (message === undefined) {
        reject('The param message is mandatory.');
      } else {
        const response = `Yaiiiiiii! ${message}`;
        resolve(response);
      }  
    }, 1000);
  });
  return promise;
}

console.log('Hi.');
asyncMessGenWithPromise(`Everything is more compact with promises.`)
  .then(function(response) {
    console.log(response);
    console.log('Bye.');
  })
  .catch(function(err) {
    console.log(`Something was wrong: ${err}.`);
  });

/* And you are gonna love this: if a method returns a promise you can use syntax sugar to avoid
   the use of callbacks by surrounding the code in an async function. It is based on the yield
   keyword but that's something irrelevant right now.
*/

// same function, one more time
function asyncMessGenWithPromise(message) {
  const promise = new Promise(function(resolve, reject) {
    setTimeout(() => {
      if (message === undefined) {
        reject('The param message is mandatory.');
      } else {
        const response = `Yaiiiiiii! ${message}`;
        resolve(response);
      }  
    }, 1000);
  });
  return promise;
}

async function run() {
  try {
    console.log('Hi.');
    const response = await asyncMessGenWithPromise(`Everything is fun fun fun with async functions.`);
    console.log(response);
    console.log('Bye.');
  } catch (err) {
    console.log(`Something went wrong: ${err}.`);
  }
}

run();

/* And you can convert classic f(..., callback(err, data)) to promises easily. */


const fs = require('fs');
const { promisify } = require('util');
const fsReadFile = promisify(fs.readFile);

// For the last time, I promise (tachaaaaaaaaaaaan!)
function asyncMessGenWithPromise(message) {
  const promise = new Promise(function(resolve, reject) {
    setTimeout(() => {
      if (message === undefined) {
        reject('The param message is mandatory.');
      } else {
        const response = `Yaiiiiiii! ${message}`;
        resolve(response);
      }  
    }, 1000);
  });
  return promise;
}

async function run() {
  try {
    console.log('Hi.');
    const message = await fsReadFile('07_asynchronicity-message.txt', {encoding: 'utf8'});
    const response = await asyncMessGenWithPromise(message);
    console.log(response);
    console.log('Bye.');
  } catch (err) {
    console.log(`Something went wrong: ${err}.`);
  }
}

run();

