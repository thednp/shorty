/*!
* shorter-js v0.0.5 (https://thednp.github.io/shorter-js/)
* Copyright 2019-2020 © dnp_theme
* Licensed under MIT (https://github.com/thednp/shorter-js/blob/master/LICENSE)
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.SHORTER = {}));
}(this, (function (exports) { 'use strict';

  var mouseClickEvents = { down: 'mousedown', up: 'mouseup' };

  var mouseHoverEvents = ('onmouseleave' in document) ? [ 'mouseenter', 'mouseleave'] : [ 'mouseover', 'mouseout' ];

  var touchEvents = { start: 'touchstart', end: 'touchend', move:'touchmove', cancel:'touchcancel' };

  var transitionDuration = 'webkitTransition' in document.body.style ? 'webkitTransitionDuration' : 'transitionDuration';

  var transitionEndEvent = 'webkitTransition' in document.body.style ? 'webkitTransitionEnd' : 'transitionend';

  var support3DTransform = 'webkitPerspective' in document.body.style || 'perspective' in document.body.style;

  function on (element, event, handler, options) {
    options = options || false;
    element.addEventListener(event, handler, options);
  }

  function off (element, event, handler, options) {
    options = options || false;
    element.removeEventListener(event, handler, options);
  }

  function one (element, event, handler, options) {
    on(element, event, function handlerWrapper(e){
      if (e.target === element) {
        handler(e);
        off(element, event, handlerWrapper, options);
      }
    }, options);
  }

  var supportPassive = (function () {
    var result = false;
    try {
      var opts = Object.defineProperty({}, 'passive', {
        get: function() {
          result = true;
        }
      });
      one(document, 'DOMContentLoaded', function (){}, opts);
    } catch (e) {}
    return result;
  })();

  var supportTransform = 'webkitTransform' in document.body.style || 'transform' in document.body.style;

  var supportTransition = 'webkitTransition' in document.body.style || 'transition' in document.body.style;

  function addClass(element,classNAME) {
    element.classList.add(classNAME);
  }

  function removeClass(element,classNAME) {
    element.classList.remove(classNAME);
  }

  function hasClass(element,classNAME) {
    return element.classList.contains(classNAME)
  }

  function getElementTransitionDuration (element) {
    var duration = supportTransition ? window.getComputedStyle(element)[transitionDuration] : 0;
    duration = parseFloat(duration);
    duration = typeof duration === 'number' && !isNaN(duration) ? duration * 1000 : 0;
    return duration;
  }

  function emulateTransitionEnd (element,handler){
    var called = 0, duration = getElementTransitionDuration(element);
    duration ? one(element, transitionEndEvent, function(e){ !called && handler(e), called = 1; })
             : setTimeout(function() { !called && handler(), called = 1; }, 17);
  }

  function isElementInScrollRange(element) {
    var bcr = element.getBoundingClientRect(),
        viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    return bcr.top <= viewportHeight && bcr.bottom >= 0;
  }

  function isElementInViewport(element) {
    var bcr = element.getBoundingClientRect();
    return (
      bcr.top >= 0 &&
      bcr.left >= 0 &&
      bcr.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bcr.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  var passiveHandler = supportPassive ? { passive: true } : false;

  function queryElement (selector, parent) {
    var lookUp = parent && parent instanceof Element ? parent : document;
    return selector instanceof Element ? selector : lookUp.querySelector(selector);
  }

  function tryWrapper (fn,origin){
    try{ fn(); }
    catch(e){
      console.error((origin + ": " + e));
    }
  }

  exports.addClass = addClass;
  exports.emulateTransitionEnd = emulateTransitionEnd;
  exports.getElementTransitionDuration = getElementTransitionDuration;
  exports.hasClass = hasClass;
  exports.isElementInScrollRange = isElementInScrollRange;
  exports.isElementInViewport = isElementInViewport;
  exports.mouseClickEvents = mouseClickEvents;
  exports.mouseHoverEvents = mouseHoverEvents;
  exports.off = off;
  exports.on = on;
  exports.one = one;
  exports.passiveHandler = passiveHandler;
  exports.queryElement = queryElement;
  exports.removeClass = removeClass;
  exports.support3DTransform = support3DTransform;
  exports.supportPassive = supportPassive;
  exports.supportTransform = supportTransform;
  exports.supportTransition = supportTransition;
  exports.touchEvents = touchEvents;
  exports.transitionDuration = transitionDuration;
  exports.transitionEndEvent = transitionEndEvent;
  exports.tryWrapper = tryWrapper;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
