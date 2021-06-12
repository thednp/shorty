/*!
* shorter-js v0.2.1 (https://github.com/thednp/shorter-js)
* Copyright 2019-2021 © dnp_theme
* Licensed under MIT (https://github.com/thednp/shorter-js/blob/master/LICENSE)
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.SHORTER = factory());
}(this, (function () { 'use strict';

  var mouseClickEvents = { down: 'mousedown', up: 'mouseup' };

  var mouseHoverEvents = ('onmouseleave' in document) ? ['mouseenter', 'mouseleave'] : ['mouseover', 'mouseout'];

  var touchEvents = {
    start: 'touchstart', end: 'touchend', move: 'touchmove', cancel: 'touchcancel',
  };

  var focusEvents = { in: 'focusin', out: 'focusout' };

  var mouseSwipeEvents = {
    start: 'mousedown', end: 'mouseup', move: 'mousemove', cancel: 'mouseout',
  };

  var animationDuration = 'webkitAnimation' in document.head.style ? 'webkitAnimationDuration' : 'animationDuration';

  var animationDelay = 'webkitAnimation' in document.head.style ? 'webkitAnimationDelay' : 'animationDelay';

  var animationEndEvent = 'webkitAnimation' in document.head.style ? 'webkitAnimationEnd' : 'animationend';

  var animationName = 'webkitAnimation' in document.head.style ? 'webkitAnimationName' : 'animationName';

  var transitionDuration = 'webkitTransition' in document.head.style ? 'webkitTransitionDuration' : 'transitionDuration';

  var transitionProperty = 'webkitTransition' in document.head.style ? 'webkitTransitionProperty' : 'transitionProperty';

  var transitionDelay = 'webkitTransition' in document.head.style ? 'webkitTransitionDelay' : 'transitionDelay';

  var transitionEndEvent = 'webkitTransition' in document.head.style ? 'webkitTransitionEnd' : 'transitionend';

  var bezierEasings = {
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

  var addEventListener = 'addEventListener';

  var removeEventListener = 'removeEventListener';

  var mobileBrands = /iPhone|iPad|iPod|Android/i;
  var isMobile = navigator.userAgentData
    ? navigator.userAgentData.brands.some(function (x) { return mobileBrands.test(x.brand); })
    : mobileBrands.test(navigator.userAgent);

  var support3DTransform = 'webkitPerspective' in document.head.style || 'perspective' in document.head.style;

  var supportPassive = (function () {
    var result = false;
    try {
      var opts = Object.defineProperty({}, 'passive', {
        get: function get() {
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

  var supportTransform = 'webkitTransform' in document.head.style || 'transform' in document.head.style;

  var supportTouch = ('ontouchstart' in window || navigator.msMaxTouchPoints) || false;

  var supportAnimation = 'webkitAnimation' in document.head.style || 'animation' in document.head.style;

  var supportTransition = 'webkitTransition' in document.head.style || 'transition' in document.head.style;

  function addClass(element, classNAME) {
    element.classList.add(classNAME);
  }

  function removeClass(element, classNAME) {
    element.classList.remove(classNAME);
  }

  function hasClass(element, classNAME) {
    return element.classList.contains(classNAME);
  }

  // attach handlers
  function on(element, event, handler, options) {
    var ops = options || false;
    element.addEventListener(event, handler, ops);
  }

  // detach handlers
  function off(element, event, handler, options) {
    var ops = options || false;
    element.removeEventListener(event, handler, ops);
  }

  // attach & detach handlers
  function one(element, event, handler, options) {
    on(element, event, function handlerWrapper(e) {
      if (e.target === element) {
        handler.apply(element, [e]);
        off(element, event, handlerWrapper, options);
      }
    }, options);
  }

  function getElementAnimationDuration(element) {
    var computedStyle = getComputedStyle(element);
    var propertyValue = computedStyle[animationName];
    var durationValue = computedStyle[animationDuration];
    var durationScale = durationValue.includes('ms') ? 1 : 1000;
    var duration = supportAnimation && propertyValue && propertyValue !== 'none'
      ? parseFloat(durationValue) * durationScale : 0;

    return !Number.isNaN(duration) ? duration : 0;
  }

  function emulateAnimationEnd(element, handler) {
    var called = 0;
    var endEvent = new Event(animationEndEvent);
    var duration = getElementAnimationDuration(element);

    if (duration) {
      element.addEventListener(animationEndEvent, function animationEndWrapper(e) {
        if (e.target === element) {
          handler.apply(element, [e]);
          element.removeEventListener(animationEndEvent, animationEndWrapper);
          called = 1;
        }
      });
      setTimeout(function () {
        if (!called) { element.dispatchEvent(endEvent); }
      }, duration + 17);
    } else {
      handler.apply(element, [endEvent]);
    }
  }

  function getElementTransitionDuration(element) {
    var computedStyle = getComputedStyle(element);
    var propertyValue = computedStyle[transitionProperty];
    var durationValue = computedStyle[transitionDuration];
    var durationScale = durationValue.includes('ms') ? 1 : 1000;
    var duration = supportTransition && propertyValue && propertyValue !== 'none'
      ? parseFloat(durationValue) * durationScale : 0;

    return !Number.isNaN(duration) ? duration : 0;
  }

  function emulateTransitionEnd(element, handler) {
    var called = 0;
    var endEvent = new Event(transitionEndEvent);
    var duration = getElementTransitionDuration(element);

    if (duration) {
      element.addEventListener(transitionEndEvent, function transitionEndWrapper(e) {
        if (e.target === element) {
          handler.apply(element, [e]);
          element.removeEventListener(transitionEndEvent, transitionEndWrapper);
          called = 1;
        }
      });
      setTimeout(function () {
        if (!called) { element.dispatchEvent(endEvent); }
      }, duration + 17);
    } else {
      handler.apply(element, [endEvent]);
    }
  }

  function isElementInScrollRange(element) {
    var bcr = element.getBoundingClientRect();
    var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    return bcr.top <= viewportHeight && bcr.bottom >= 0; // bottom && top
  }

  // check if element is in viewport
  function isElementInViewport(element) {
    var bcr = element.getBoundingClientRect();
    return (
      bcr.top >= 0
      && bcr.left >= 0
      && bcr.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      && bcr.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // general event options

  var passiveHandler = supportPassive ? { passive: true } : false;

  function getElementAnimationDelay(element) {
    var computedStyle = getComputedStyle(element);
    var propertyValue = computedStyle[animationName];
    var durationValue = computedStyle[animationDelay];
    var durationScale = durationValue.includes('ms') ? 1 : 1000;
    var duration = supportAnimation && propertyValue && propertyValue !== 'none'
      ? parseFloat(durationValue) * durationScale : 0;

    return !Number.isNaN(duration) ? duration : 0;
  }

  function getElementTransitionDelay(element) {
    var computedStyle = getComputedStyle(element);
    var propertyValue = computedStyle[transitionProperty];
    var delayValue = computedStyle[transitionDelay];
    var delayScale = delayValue.includes('ms') ? 1 : 1000;
    var duration = supportTransition && propertyValue && propertyValue !== 'none'
      ? parseFloat(delayValue) * delayScale : 0;

    return !Number.isNaN(duration) ? duration : 0;
  }

  function queryElement(selector, parent) {
    var lookUp = parent && parent instanceof Element ? parent : document;
    return selector instanceof Element ? selector : lookUp.querySelector(selector);
  }

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

  function normalizeOptions(element, defaultOps, inputOps, ns) {
    var normalOps = {};
    var dataOps = {};
    var data = Object.assign({}, element.dataset);

    Object.keys(data)
      .forEach(function (k) {
        var key = k.includes(ns)
          ? k.replace(ns, '').replace(/[A-Z]/, function (match) { return match.toLowerCase(); })
          : k;

        dataOps[key] = normalizeValue(data[k]);
      });

    Object.keys(inputOps)
      .forEach(function (k) {
        inputOps[k] = normalizeValue(inputOps[k]);
      });

    Object.keys(defaultOps)
      .forEach(function (k) {
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

  function tryWrapper(fn, origin) {
    try { fn(); } catch (e) {
      throw TypeError((origin + " " + e));
    }
  }

  function reflow(element) {
    return element.offsetHeight;
  }

  // strings FIRST

  var index = {
    mouseClickEvents: mouseClickEvents,
    mouseHoverEvents: mouseHoverEvents,
    touchEvents: touchEvents,
    focusEvents: focusEvents,
    mouseSwipeEvents: mouseSwipeEvents,
    bezierEasings: bezierEasings,
    animationDuration: animationDuration,
    animationDelay: animationDelay,
    animationName: animationName,
    animationEndEvent: animationEndEvent,
    transitionDuration: transitionDuration,
    transitionDelay: transitionDelay,
    transitionEndEvent: transitionEndEvent,
    transitionProperty: transitionProperty,
    isMobile: isMobile,
    support3DTransform: support3DTransform,
    supportPassive: supportPassive,
    supportTransform: supportTransform,
    supportTouch: supportTouch,
    supportAnimation: supportAnimation,
    supportTransition: supportTransition,
    addEventListener: addEventListener,
    removeEventListener: removeEventListener,
    addClass: addClass,
    removeClass: removeClass,
    hasClass: hasClass,
    on: on,
    off: off,
    one: one,
    emulateAnimationEnd: emulateAnimationEnd,
    emulateTransitionEnd: emulateTransitionEnd,
    isElementInScrollRange: isElementInScrollRange,
    isElementInViewport: isElementInViewport,
    passiveHandler: passiveHandler,
    getElementAnimationDuration: getElementAnimationDuration,
    getElementAnimationDelay: getElementAnimationDelay,
    getElementTransitionDuration: getElementTransitionDuration,
    getElementTransitionDelay: getElementTransitionDelay,
    queryElement: queryElement,
    normalizeValue: normalizeValue,
    normalizeOptions: normalizeOptions,
    tryWrapper: tryWrapper,
    reflow: reflow,
  };

  return index;

})));
