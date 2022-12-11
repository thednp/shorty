'use strict';

const on = require('./on.cjs');
const off = require('./off.cjs');

const one = (element, eventName, listener, options) => {
  const handlerWrapper = (e) => {
    if (e.target === element || e.currentTarget === element) {
      listener.apply(element, [e]);
      off(element, eventName, handlerWrapper, options);
    }
  };
  on(element, eventName, handlerWrapper, options);
};

module.exports = one;
//# sourceMappingURL=one.cjs.map
