'use strict';

const off = (element, eventName, listener, options) => {
  const ops = options || false;
  element.removeEventListener(eventName, listener, ops);
};

module.exports = off;
//# sourceMappingURL=off.cjs.map
