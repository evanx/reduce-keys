# reduce-keys


### Implementation

See https://github.com/evanx/reduce-keys/blob/master/index.js

```javascript
module.exports = (keys, fn, defaultObject = {}) => keys.reduce((object, key) => {
    object[key] = fn(key);
    return object;
}, defaultObject);
```

### Test

See https://github.com/evanx/reduce-keys/blob/master/test.js
```javascript
const reduceKeys = require('./index.js');
const result = reduceKeys(['a', 'b'], key => 'c');
const expectedResult = { a: 'c', b: 'c' };
console.log({result});
if (JSON.stringify(result) !== JSON.stringify(expectedResult)) {
    throw new Error('FAIL');
}
console.log('PASS');
```

<hr>

https://twitter.com/@evanxsummers
