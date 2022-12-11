import { t as transitionProperty } from './transitionProperty.1c387f74.js';
import getElementStyle from './getElementStyle.mjs';

const transitionDelay = "transitionDelay";

const getElementTransitionDelay = (element) => {
  const propertyValue = getElementStyle(element, transitionProperty);
  const delayValue = getElementStyle(element, transitionDelay);
  const delayScale = delayValue.includes("ms") ? 1 : 1e3;
  const duration = propertyValue && propertyValue !== "none" ? parseFloat(delayValue) * delayScale : 0;
  return !Number.isNaN(duration) ? duration : 0;
};

export { getElementTransitionDelay as default };
//# sourceMappingURL=getElementTransitionDelay.mjs.map
