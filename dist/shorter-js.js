/*!
* shorter-js v0.1.5 (https://thednp.github.io/shorter-js/)
* Copyright 2019-2020 © dnp_theme
* Licensed under MIT (https://github.com/thednp/shorter-js/blob/master/LICENSE)
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.SHORTER = factory());
}(this, (function () { 'use strict';

  var mouseClickEvents = { down: 'mousedown', up: 'mouseup' };

  var mouseHoverEvents = ('onmouseleave' in document) ? [ 'mouseenter', 'mouseleave'] : [ 'mouseover', 'mouseout' ];

  var touchEvents = { start: 'touchstart', end: 'touchend', move:'touchmove', cancel:'touchcancel' };

  var mouseSwipeEvents = { start: 'mousedown', end: 'mouseup', move:'mousemove', cancel:'mouseout' };

  var animationDuration = 'webkitAnimation' in document.head.style ? 'webkitAnimationDuration' : 'animationDuration';

  var animationDelay = 'webkitAnimation' in document.head.style ? 'webkitAnimationDelay' : 'animationDelay';

  var animationEndEvent = 'webkitAnimation' in document.head.style ? 'webkitAnimationEnd' : 'animationend';

  var animationName = 'webkitAnimation' in document.head.style ? 'webkitAnimationName' : 'animationName';

  var transitionDuration = 'webkitTransition' in document.head.style ? 'webkitTransitionDuration' : 'transitionDuration';

  var transitionProperty = 'webkitTransition' in document.body.style ? 'webkitTransitionProperty' : 'transitionProperty';

  var transitionDelay = 'webkitTransition' in document.head.style ? 'webkitTransitionDelay' : 'transitionDelay';

  var transitionEndEvent = 'webkitTransition' in document.head.style ? 'webkitTransitionEnd' : 'transitionend';

  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  var support3DTransform = 'webkitPerspective' in document.head.style || 'perspective' in document.head.style;

  var supportPassive = (function () {
    var result = false;
    try {
      var opts = Object.defineProperty({}, 'passive', {
        get: function() {
          result = true;
        }
      });
      document.addEventListener('DOMContentLoaded', function wrap(){
        document.removeEventListener('DOMContentLoaded', wrap, opts);
      }, opts);
    } catch (e) {}
    return result;
  })();

  var supportTransform = 'webkitTransform' in document.head.style || 'transform' in document.head.style;

  var supportTouch = ('ontouchstart' in window || navigator.msMaxTouchPoints) || false;

  var supportAnimation = 'webkitAnimation' in document.head.style || 'animation' in document.head.style;

  var supportTransition = 'webkitTransition' in document.head.style || 'transition' in document.head.style;

  function addClass(element,classNAME) {
    element.classList.add(classNAME);
  }

  function removeClass(element,classNAME) {
    element.classList.remove(classNAME);
  }

  function hasClass(element,classNAME) {
    return element.classList.contains(classNAME)
  }

  function on(element, event, handler, options) {
    options = options || false;
    element.addEventListener(event, handler, options);
  }

  function off(element, event, handler, options) {
    options = options || false;
    element.removeEventListener(event, handler, options);
  }

  function one(element, event, handler, options) {
    on(element, event, function handlerWrapper(e){
      if (e.target === element) {
        handler(e);
        off(element, event, handlerWrapper, options);
      }
    }, options);
  }

  function getElementAnimationDuration(element) {
    var computedStyle = getComputedStyle(element),
        name = computedStyle[animationName],
        duration = supportAnimation && name && name !== 'none'
                 ? parseFloat(computedStyle[animationDuration]) : 0;
    return !isNaN(duration) ? duration * 1000 : 0
  }

  function emulateAnimationEnd(element,handler){
    var called = 0, duration = getElementAnimationDuration(element);
    duration ? element.addEventListener( animationEndEvent, function animationEndWrapper(e){
                !called && handler(e), called = 1;
                element.removeEventListener( animationEndEvent, animationEndWrapper);
              })
             : setTimeout(function() { !called && handler(), called = 1; }, 17);
  }

  function getElementTransitionDuration(element) {
    var computedStyle = getComputedStyle(element),
        property = computedStyle[transitionProperty],
        duration = supportTransition && property && property !== 'none'
                 ? parseFloat(computedStyle[transitionDuration]) : 0;
    return !isNaN(duration) ? duration * 1000 : 0;
  }

  function emulateTransitionEnd(element,handler){
    var called = 0, duration = getElementTransitionDuration(element);
    duration ? element.addEventListener( transitionEndEvent, function transitionEndWrapper(e){
                !called && handler(e), called = 1;
                element.removeEventListener( transitionEndEvent, transitionEndWrapper);
              })
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

  function getElementAnimationDelay(element) {
    var computedStyle = getComputedStyle(element),
        name = computedStyle[animationName],
        delay = supportAnimation && name && name !== 'none'
              ? parseFloat(computedStyle[animationDelay]) : 0;
    return !isNaN(delay) ? delay * 1000 : 0;
  }

  function getElementTransitionDelay(element) {
    var duration = supportTransition ? parseFloat(getComputedStyle(element)[transitionDelay]) : 0;
    duration = typeof duration === 'number' && !isNaN(duration) ? duration * 1000 : 0;
    return duration;
  }

  function queryElement(selector, parent) {
    var lookUp = parent && parent instanceof Element ? parent : document;
    return selector instanceof Element ? selector : lookUp.querySelector(selector);
  }

  function tryWrapper(fn,origin){
    try{ fn(); }
    catch(e){
      console.error((origin + " " + e));
    }
  }

  var index = {
    mouseClickEvents: mouseClickEvents,
    mouseHoverEvents: mouseHoverEvents,
    touchEvents: touchEvents,
    mouseSwipeEvents: mouseSwipeEvents,
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
    tryWrapper: tryWrapper
  };

  return index;

})));
