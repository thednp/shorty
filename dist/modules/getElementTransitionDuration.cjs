'use strict';

const transitionProperty = require('./transitionProperty.015c02d6.cjs');
const getElementStyle = require('./getElementStyle.cjs');

const transitionDuration = "transitionDuration";

const getElementTransitionDuration = (element) => {
  const propertyValue = getElementStyle(element, transitionProperty.transitionProperty);
  const durationValue = getElementStyle(element, transitionDuration);
  const durationScale = durationValue.includes("ms") ? 1 : 1e3;
  const duration = propertyValue && propertyValue !== "none" ? parseFloat(durationValue) * durationScale : 0;
  return !Number.isNaN(duration) ? duration : 0;
};

module.exports = getElementTransitionDuration;
//# sourceMappingURL=getElementTransitionDuration.cjs.map
