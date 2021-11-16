/*!
* shorter-js v0.2.2 (https://github.com/thednp/shorter-js)
* Copyright 2019-2021 © dnp_theme
* Licensed under MIT (https://github.com/thednp/shorter-js/blob/master/LICENSE)
*/
const mouseClickEvents = { down: 'mousedown', up: 'mouseup' };

const mouseHoverEvents = ('onmouseleave' in document) ? ['mouseenter', 'mouseleave'] : ['mouseover', 'mouseout'];

const touchEvents = {
  start: 'touchstart', end: 'touchend', move: 'touchmove', cancel: 'touchcancel',
};

const focusEvents = { in: 'focusin', out: 'focusout' };

const mouseSwipeEvents = {
  start: 'mousedown', end: 'mouseup', move: 'mousemove', cancel: 'mouseout',
};

const animationDuration = 'webkitAnimation' in document.head.style ? 'webkitAnimationDuration' : 'animationDuration';

const animationDelay = 'webkitAnimation' in document.head.style ? 'webkitAnimationDelay' : 'animationDelay';

const animationEndEvent = 'webkitAnimation' in document.head.style ? 'webkitAnimationEnd' : 'animationend';

const animationName = 'webkitAnimation' in document.head.style ? 'webkitAnimationName' : 'animationName';

const transitionDuration = 'webkitTransition' in document.head.style ? 'webkitTransitionDuration' : 'transitionDuration';

const transitionProperty = 'webkitTransition' in document.head.style ? 'webkitTransitionProperty' : 'transitionProperty';

const transitionDelay = 'webkitTransition' in document.head.style ? 'webkitTransitionDelay' : 'transitionDelay';

const transitionEndEvent = 'webkitTransition' in document.head.style ? 'webkitTransitionEnd' : 'transitionend';

const bezierEasings = {
  linear: 'linear',
  easingSinusoidalIn: 'cubic-bezier(0.47,0,0.745,0.715)',
  easingSinusoidalOut: 'cubic-bezier(0.39,0.575,0.565,1)',
  easingSinusoidalInOut: 'cubic-bezier(0.445,0.05,0.55,0.95)',
  easingQuadraticIn: 'cubic-bezier(0.550,0.085,0.680,0.530)',
  easingQuadraticOut: 'cubic-bezier(0.250,0.460,0.450,0.940)',
  easingQuadraticInOut: 'cubic-bezier(0.455,0.030,0.515,0.955)',
  easingCubicIn: 'cubic-bezier(0.55,0.055,0.675,0.19)',
  easingCubicOut: 'cubic-bezier(0.215,0.61,0.355,1)',
  easingCubicInOut: 'cubic-bezier(0.645,0.045,0.355,1)',
  easingQuarticIn: 'cubic-bezier(0.895,0.03,0.685,0.22)',
  easingQuarticOut: 'cubic-bezier(0.165,0.84,0.44,1)',
  easingQuarticInOut: 'cubic-bezier(0.77,0,0.175,1)',
  easingQuinticIn: 'cubic-bezier(0.755,0.05,0.855,0.06)',
  easingQuinticOut: 'cubic-bezier(0.23,1,0.32,1)',
  easingQuinticInOut: 'cubic-bezier(0.86,0,0.07,1)',
  easingExponentialIn: 'cubic-bezier(0.95,0.05,0.795,0.035)',
  easingExponentialOut: 'cubic-bezier(0.19,1,0.22,1)',
  easingExponentialInOut: 'cubic-bezier(1,0,0,1)',
  easingCircularIn: 'cubic-bezier(0.6,0.04,0.98,0.335)',
  easingCircularOut: 'cubic-bezier(0.075,0.82,0.165,1)',
  easingCircularInOut: 'cubic-bezier(0.785,0.135,0.15,0.86)',
  easingBackIn: 'cubic-bezier(0.6,-0.28,0.735,0.045)',
  easingBackOut: 'cubic-bezier(0.175,0.885,0.32,1.275)',
  easingBackInOut: 'cubic-bezier(0.68,-0.55,0.265,1.55)',
};

const addEventListener = 'addEventListener';

const removeEventListener = 'removeEventListener';

const mobileBrands = /iPhone|iPad|iPod|Android/i;
const userAgentStr = 'userAgentData';

let isMobileCheck = false;

if (navigator[userAgentStr]) {
  isMobileCheck = navigator[userAgentStr].brands.some((x) => mobileBrands.test(x.brand));
} else {
  isMobileCheck = mobileBrands.test(navigator.userAgent);
}

const isMobile = isMobileCheck;

const support3DTransform = 'webkitPerspective' in document.head.style || 'perspective' in document.head.style;

const supportPassive = (() => {
  let result = false;
  try {
    const opts = Object.defineProperty({}, 'passive', {
      get() {
        result = true;
        return result;
      },
    });
    document[addEventListener]('DOMContentLoaded', function wrap() {
      document[removeEventListener]('DOMContentLoaded', wrap, opts);
    }, opts);
  } catch (e) {
    throw Error('Passive events are not supported');
  }

  return result;
})();

const supportTransform = 'webkitTransform' in document.head.style || 'transform' in document.head.style;

const supportTouch = 'ontouchstart' in window || 'msMaxTouchPoints' in navigator;

const supportAnimation = 'webkitAnimation' in document.head.style || 'animation' in document.head.style;

const supportTransition = 'webkitTransition' in document.head.style || 'transition' in document.head.style;

/**
 * Add class to Element.classList
 *
 * @param {Element} element target
 * @param {string} classNAME to add
 */
function addClass(element, classNAME) {
  element.classList.add(classNAME);
}

/**
 * Remove class from Element.classList
 *
 * @param {Element} element target
 * @param {string} classNAME to remove
 */
function removeClass(element, classNAME) {
  element.classList.remove(classNAME);
}

/**
 * Check class in Element.classList
 *
 * @param {Element} element target
 * @param {string} classNAME to check
 * @return {boolean}
 */
function hasClass(element, classNAME) {
  return element.classList.contains(classNAME);
}

/**
 * Add eventListener to Element
 *
 * @param {Element} element target
 * @param {string} eventName name
 * @param {object | Function} handler callback
 * @param {object | Boolean | undefined} options other event options
 */
function on(element, eventName, handler, options) {
  const ops = options || false;
  element.addEventListener(eventName, handler, ops);
}

/**
 * Remove eventListener from Element
 *
 * @param {Element} element target
 * @param {string} eventName name
 * @param {object | Function} handler callback
 * @param {object | Boolean | undefined} options other event options
 */
function off(element, eventName, handler, options) {
  const ops = options || false;
  element.removeEventListener(eventName, handler, ops);
}

/**
 * Add an eventListener to Element
 * and remove it once callback is called.
 *
 * @param {Element} element target
 * @param {string} eventName name of the event
 * @param {object | Function} handler callback
 * @param {object | Boolean | undefined} options other event options
 */
function one(element, eventName, handler, options) {
/**
 * Wrap the handler for easy on -> off
 * @param {Event} e the Event object
 */
  function handlerWrapper(e) {
    if (e.target === element) {
      handler.apply(element, [e]);
      off(element, eventName, handlerWrapper, options);
    }
  }
  on(element, eventName, handlerWrapper, options);
}

/**
 * Utility to get the computed animationDuration
 * from Element in miliseconds.
 *
 * @param {Element} element target
 * @return {Number} the value in miliseconds
 */
function getElementAnimationDuration(element) {
  const computedStyle = getComputedStyle(element);
  const propertyValue = computedStyle[animationName];
  const durationValue = computedStyle[animationDuration];
  const durationScale = durationValue.includes('ms') ? 1 : 1000;
  const duration = supportAnimation && propertyValue && propertyValue !== 'none'
    ? parseFloat(durationValue) * durationScale : 0;

  return !Number.isNaN(duration) ? duration : 0;
}

/**
 * Utility to make sure callbacks are consistently
 * called when animation ends.
 *
 * @param {Element} element target
 * @param {Function} handler callback
 */
function emulateAnimationEnd(element, handler) {
  let called = 0;
  const endEvent = new Event(animationEndEvent);
  const duration = getElementAnimationDuration(element);

  if (duration) {
    element.addEventListener(animationEndEvent, function animationEndWrapper(e) {
      if (e.target === element) {
        handler.apply(element, [e]);
        element.removeEventListener(animationEndEvent, animationEndWrapper);
        called = 1;
      }
    });
    setTimeout(() => {
      if (!called) element.dispatchEvent(endEvent);
    }, duration + 17);
  } else {
    handler.apply(element, [endEvent]);
  }
}

/**
 * Utility to get the computed transitionDuration
 * from Element in miliseconds.
 *
 * @param {Element} element target
 * @return {Number} the value in miliseconds
 */
function getElementTransitionDuration(element) {
  const computedStyle = getComputedStyle(element);
  const propertyValue = computedStyle[transitionProperty];
  const durationValue = computedStyle[transitionDuration];
  const durationScale = durationValue.includes('ms') ? 1 : 1000;
  const duration = supportTransition && propertyValue && propertyValue !== 'none'
    ? parseFloat(durationValue) * durationScale : 0;

  return !Number.isNaN(duration) ? duration : 0;
}

/**
 * Utility to make sure callbacks are consistently
 * called when transition ends.
 *
 * @param {Element} element target
 * @param {Function} handler callback
 */
function emulateTransitionEnd(element, handler) {
  let called = 0;
  const endEvent = new Event(transitionEndEvent);
  const duration = getElementTransitionDuration(element);

  if (duration) {
    element.addEventListener(transitionEndEvent, function transitionEndWrapper(e) {
      if (e.target === element) {
        handler.apply(element, [e]);
        element.removeEventListener(transitionEndEvent, transitionEndWrapper);
        called = 1;
      }
    });
    setTimeout(() => {
      if (!called) element.dispatchEvent(endEvent);
    }, duration + 17);
  } else {
    handler.apply(element, [endEvent]);
  }
}

/**
 * Utility to determine if an Element
 * is partially visible in viewport.
 *
 * @param {Element} element target
 * @return {Boolean}
 */
function isElementInScrollRange(element) {
  const bcr = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  return bcr.top <= viewportHeight && bcr.bottom >= 0; // bottom && top
}

/**
 * Utility to determine if an Element
 * is fully visible in the viewport.
 *
 * @param {Element} element target
 * @return {Boolean}
 */
function isElementInViewport(element) {
  const bcr = element.getBoundingClientRect();
  return (
    bcr.top >= 0
    && bcr.left >= 0
    && bcr.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    && bcr.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// general event options

const passiveHandler = supportPassive ? { passive: true } : false;

/**
 * Utility to get the computed animationDelay
 * from Element in miliseconds.
 *
 * @param {Element} element target
 * @return {Number} the value in miliseconds
 */
function getElementAnimationDelay(element) {
  const computedStyle = getComputedStyle(element);
  const propertyValue = computedStyle[animationName];
  const durationValue = computedStyle[animationDelay];
  const durationScale = durationValue.includes('ms') ? 1 : 1000;
  const duration = supportAnimation && propertyValue && propertyValue !== 'none'
    ? parseFloat(durationValue) * durationScale : 0;

  return !Number.isNaN(duration) ? duration : 0;
}

/**
 * Utility to get the computed transitionDelay
 * from Element in miliseconds.
 *
 * @param {Element} element target
 * @return {Number} the value in miliseconds
 */
function getElementTransitionDelay(element) {
  const computedStyle = getComputedStyle(element);
  const propertyValue = computedStyle[transitionProperty];
  const delayValue = computedStyle[transitionDelay];
  const delayScale = delayValue.includes('ms') ? 1 : 1000;
  const duration = supportTransition && propertyValue && propertyValue !== 'none'
    ? parseFloat(delayValue) * delayScale : 0;

  return !Number.isNaN(duration) ? duration : 0;
}

/**
 * Utility to check if target is typeof Element
 * or find one that matches a selector.
 *
 * @param {string | Element} selector the input selector or target element
 * @param {undefined | Element} parent optional Element to look into
 * @return {null | Element} the Element
 */
function queryElement(selector, parent) {
  const lookUp = parent && parent instanceof Element ? parent : document;
  return selector instanceof Element ? selector : lookUp.querySelector(selector);
}

/**
 * Utility to normalize component options
 *
 * @param {string | Function | Element | object} value the input value
 * @return {string | Function | Element | object} the normalized value
 */
function normalizeValue(value) {
  if (value === 'true') {
    return true;
  }

  if (value === 'false') {
    return false;
  }

  if (!Number.isNaN(+value)) {
    return +value;
  }

  if (value === '' || value === 'null') {
    return null;
  }

  // string / function / Element / Object
  return value;
}

/**
 * Utility to normalize component options
 *
 * @param {Element} element target
 * @param {object} defaultOps component default options
 * @param {object} inputOps component instance options
 * @param {string} ns component namespace
 * @return {object} normalized component options object
 */
function normalizeOptions(element, defaultOps, inputOps, ns) {
  const normalOps = {};
  const dataOps = {};
  // @ts-ignore
  const data = { ...element.dataset };

  Object.keys(data)
    .forEach((k) => {
      const key = k.includes(ns)
        ? k.replace(ns, '').replace(/[A-Z]/, (match) => match.toLowerCase())
        : k;

      dataOps[key] = normalizeValue(data[k]);
    });

  Object.keys(inputOps)
    .forEach((k) => {
      inputOps[k] = normalizeValue(inputOps[k]);
    });

  Object.keys(defaultOps)
    .forEach((k) => {
      if (k in inputOps) {
        normalOps[k] = inputOps[k];
      } else if (k in dataOps) {
        normalOps[k] = dataOps[k];
      } else {
        normalOps[k] = defaultOps[k];
      }
    });

  return normalOps;
}

/**
 * Utility to wrap a callback
 * in a try() catch(e)
 *
 * @param {Function} fn callback
 * @param {string} origin callback context description
 */
function tryWrapper(fn, origin) {
  try { fn(); } catch (e) {
    throw TypeError(`${origin} ${e}`);
  }
}

/**
 * Utility to force re-paint of an Element
 *
 * @param {Element} element is the target
 * @return {Number} the Element.offsetHeight value
 */
function reflow(element) {
  // @ts-ignore
  return element.offsetHeight;
}

var version = "0.2.2";

// @ts-ignore

// strings FIRST

const SHORTER = {
  mouseClickEvents,
  mouseHoverEvents,
  touchEvents,
  focusEvents,
  mouseSwipeEvents,
  bezierEasings,
  animationDuration,
  animationDelay,
  animationName,
  animationEndEvent,
  transitionDuration,
  transitionDelay,
  transitionEndEvent,
  transitionProperty,
  isMobile,
  support3DTransform,
  supportPassive,
  supportTransform,
  supportTouch,
  supportAnimation,
  supportTransition,
  addEventListener,
  removeEventListener,
  addClass,
  removeClass,
  hasClass,
  on,
  off,
  one,
  emulateAnimationEnd,
  emulateTransitionEnd,
  isElementInScrollRange,
  isElementInViewport,
  passiveHandler,
  getElementAnimationDuration,
  getElementAnimationDelay,
  getElementTransitionDuration,
  getElementTransitionDelay,
  queryElement,
  normalizeValue,
  normalizeOptions,
  tryWrapper,
  reflow,
  Version: version,
};

export default SHORTER;
