'use strict';

const getElementStyle = (element, property) => {
  const computedStyle = getComputedStyle(element);
  const prop = property.replace("webkit", "Webkit").replace(/([A-Z])/g, "-$1").toLowerCase();
  return computedStyle.getPropertyValue(prop);
};

module.exports = getElementStyle;
//# sourceMappingURL=getElementStyle.cjs.map
