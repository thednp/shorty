'use strict';

const on = (element, eventName, listener, options) => {
  const ops = options || false;
  element.addEventListener(eventName, listener, ops);
};

module.exports = on;
//# sourceMappingURL=on.cjs.map
