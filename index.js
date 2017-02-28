const assert = require('assert');
const lodash = require('lodash');

module.exports = (keys, fn, defaultObject = {}) => {
    assert(lodash.isArray(keys), 'reduce keys array');
    return keys.reduce((object, key, index) => {
        object[key] = fn(key, index);
        return object;
    }, defaultObject);
}
