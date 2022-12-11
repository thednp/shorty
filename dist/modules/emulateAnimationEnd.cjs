'use strict';

const getElementAnimationDelay = require('./getElementAnimationDelay.cjs');
const getElementAnimationDuration = require('./getElementAnimationDuration.cjs');
const dispatchEvent = require('./dispatchEvent.cjs');
require('./animationName.846ffabc.cjs');
require('./getElementStyle.cjs');

const animationEndEvent = "animationend";

const emulateAnimationEnd = (element, handler) => {
  let called = 0;
  const endEvent = new Event(animationEndEvent);
  const duration = getElementAnimationDuration(element);
  const delay = getElementAnimationDelay(element);
  if (duration) {
    const animationEndWrapper = (e) => {
      if (e.target === element) {
        handler.apply(element, [e]);
        element.removeEventListener(animationEndEvent, animationEndWrapper);
        called = 1;
      }
    };
    element.addEventListener(animationEndEvent, animationEndWrapper);
    setTimeout(() => {
      if (!called)
        dispatchEvent(element, endEvent);
    }, duration + delay + 17);
  } else {
    handler.apply(element, [endEvent]);
  }
};

module.exports = emulateAnimationEnd;
//# sourceMappingURL=emulateAnimationEnd.cjs.map
