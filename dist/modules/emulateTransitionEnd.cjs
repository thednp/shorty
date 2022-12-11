'use strict';

const getElementTransitionDelay = require('./getElementTransitionDelay.cjs');
const getElementTransitionDuration = require('./getElementTransitionDuration.cjs');
const dispatchEvent = require('./dispatchEvent.cjs');
require('./transitionProperty-0bad6417.cjs');
require('./getElementStyle.cjs');

const transitionEndEvent = "transitionend";

const emulateTransitionEnd = (element, handler) => {
  let called = 0;
  const endEvent = new Event(transitionEndEvent);
  const duration = getElementTransitionDuration(element);
  const delay = getElementTransitionDelay(element);
  if (duration) {
    const transitionEndWrapper = (e) => {
      if (e.target === element) {
        handler.apply(element, [e]);
        element.removeEventListener(transitionEndEvent, transitionEndWrapper);
        called = 1;
      }
    };
    element.addEventListener(transitionEndEvent, transitionEndWrapper);
    setTimeout(() => {
      if (!called)
        dispatchEvent(element, endEvent);
    }, duration + delay + 17);
  } else {
    handler.apply(element, [endEvent]);
  }
};

module.exports = emulateTransitionEnd;
//# sourceMappingURL=emulateTransitionEnd.cjs.map
