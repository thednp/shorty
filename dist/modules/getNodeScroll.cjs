'use strict';

const isWindow = require('./isWindow.cjs');
require('./isObject.cjs');

const getNodeScroll = (element) => {
  const isWin = isWindow(element);
  const x = isWin ? element.scrollX : element.scrollLeft;
  const y = isWin ? element.scrollY : element.scrollTop;
  return { x, y };
};

module.exports = getNodeScroll;
//# sourceMappingURL=getNodeScroll.cjs.map
