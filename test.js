const reduceKeys = require('./index.js');
const result = reduceKeys(['a', 'b'], key => 'c');
const expectedResult = { a: 'c', b: 'c' };
console.log({result});
if (JSON.stringify(result) !== JSON.stringify(expectedResult)) {
    throw new Error('FAIL');
}
console.log('PASS');
