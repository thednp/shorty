'use strict';

const transitionProperty = require('./transitionProperty-0bad6417.cjs');
const getElementStyle = require('./getElementStyle.cjs');

const transitionDelay = "transitionDelay";

const getElementTransitionDelay = (element) => {
  const propertyValue = getElementStyle(element, transitionProperty.transitionProperty);
  const delayValue = getElementStyle(element, transitionDelay);
  const delayScale = delayValue.includes("ms") ? 1 : 1e3;
  const duration = propertyValue && propertyValue !== "none" ? parseFloat(delayValue) * delayScale : 0;
  return !Number.isNaN(duration) ? duration : 0;
};

module.exports = getElementTransitionDelay;
//# sourceMappingURL=getElementTransitionDelay.cjs.map
