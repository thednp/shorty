'use strict';

const animationName = require('./animationName-b087a2d1.cjs');
const getElementStyle = require('./getElementStyle.cjs');

const animationDelay = "animationDelay";

const getElementAnimationDelay = (element) => {
  const propertyValue = getElementStyle(element, animationName.animationName);
  const durationValue = getElementStyle(element, animationDelay);
  const durationScale = durationValue.includes("ms") ? 1 : 1e3;
  const duration = propertyValue && propertyValue !== "none" ? parseFloat(durationValue) * durationScale : 0;
  return !Number.isNaN(duration) ? duration : 0;
};

module.exports = getElementAnimationDelay;
//# sourceMappingURL=getElementAnimationDelay.cjs.map
