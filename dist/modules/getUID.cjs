'use strict';

const isMap = require('./isMap.cjs');
require('./isObject.cjs');

let elementUID = 0;
let elementMapUID = 0;
const elementIDMap = /* @__PURE__ */ new Map();
const getUID = (element, key) => {
  let result = key ? elementUID : elementMapUID;
  if (key) {
    const elID = getUID(element);
    const elMap = elementIDMap.get(elID) || /* @__PURE__ */ new Map();
    if (!elementIDMap.has(elID)) {
      elementIDMap.set(elID, elMap);
    }
    if (isMap(elMap) && !elMap.has(key)) {
      elMap.set(key, result);
      elementUID += 1;
    } else
      result = elMap.get(key);
  } else {
    const elkey = element.id || element;
    if (!elementIDMap.has(elkey)) {
      elementIDMap.set(elkey, result);
      elementMapUID += 1;
    } else
      result = elementIDMap.get(elkey);
  }
  return result;
};

module.exports = getUID;
//# sourceMappingURL=getUID.cjs.map
