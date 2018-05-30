function repeat(s) {
  return function(times) {
      let r = '';
      for (let i = 0; i < times; i++) r = r + s;
      return r;
  }
}

const repeatHi = repeat `Hi!`;
const threeTimesHi = repeatHi(3);

// const threeTimesHi = repeat`Hi!`(3);

console.log(`Three times 'Hi!': ${threeTimesHi}.`);		
	
