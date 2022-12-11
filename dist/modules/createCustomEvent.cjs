'use strict';

const isObject = require('./isObject.cjs');
const ObjectAssign = require('./ObjectAssign.cjs');

const createCustomEvent = (eventType, config) => {
  const OriginalCustomEvent = new CustomEvent(eventType, {
    cancelable: true,
    bubbles: true
  });
  if (isObject(config)) {
    ObjectAssign(OriginalCustomEvent, config);
  }
  return OriginalCustomEvent;
};

module.exports = createCustomEvent;
//# sourceMappingURL=createCustomEvent.cjs.map
