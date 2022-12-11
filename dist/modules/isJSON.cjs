'use strict';

const isString = require('./isString.cjs');

const isJSON = (str) => {
  if (!isString(str))
    return false;
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

module.exports = isJSON;
//# sourceMappingURL=isJSON.cjs.map
