'use strict';

const ObjectAssign = require('./ObjectAssign.cjs');
const ObjectEntries = require('./ObjectEntries.cjs');
const isString = require('./isString.cjs');

const setElementStyle = (element, styles) => {
  ObjectEntries(styles).forEach(([key, value]) => {
    if (value && isString(key) && key.includes("--")) {
      element.style.setProperty(key, value);
    } else {
      const propObject = {};
      propObject[key] = value;
      ObjectAssign(element.style, propObject);
    }
  });
};

module.exports = setElementStyle;
//# sourceMappingURL=setElementStyle.cjs.map
