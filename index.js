const lodash = require('lodash');

const getKeys = arg => {
    if (lodash.isArray(arg)) {
        return arg;
    } else if (lodash.isObject(arg)) {
        return Object.keys(arg);
    } else {
        throw new Error('Invalid keys');
    }
};

module.exports = (arg, fn, defaultObject = {}) => getKeys(arg).reduce((object, key, index) => {
    object[key] = fn(key, index);
    return object;
}, defaultObject);
