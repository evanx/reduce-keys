
module.exports = (keys, fn, defaultObject = {}) => keys.reduce((object, key) => {
    object[key] = fn(key);
    return object;
}, defaultObject);
