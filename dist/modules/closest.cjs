'use strict';

const closest = (element, selector) => {
  return element ? element.closest(selector) || closest(element.getRootNode().host, selector) : null;
};

module.exports = closest;
//# sourceMappingURL=closest.cjs.map
