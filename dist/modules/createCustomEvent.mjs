import isObject from './isObject.mjs';
import ObjectAssign from './ObjectAssign.mjs';

const createCustomEvent = (eventType, config) => {
  const OriginalCustomEvent = new CustomEvent(eventType, {
    cancelable: true,
    bubbles: true
  });
  if (isObject(config)) {
    ObjectAssign(OriginalCustomEvent, config);
  }
  return OriginalCustomEvent;
};

export { createCustomEvent as default };
//# sourceMappingURL=createCustomEvent.mjs.map
