const lodash = require('lodash');

module.exports = (keys, fn, defaultObject = {}) => keys.reduce((object, key, index) => {
    object[key] = fn(key, index);
    return object;
}, defaultObject);
