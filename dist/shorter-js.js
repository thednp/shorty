/*!
* shorter-js v0.3.0alpha13 (https://github.com/thednp/shorter-js)
* Copyright 2019-2022 © dnp_theme
* Licensed under MIT (https://github.com/thednp/shorter-js/blob/master/LICENSE)
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.SHORTER = factory());
})(this, (function () { 'use strict';

  /**
   * A global namespace for aria-checked.
   * @type {string}
   */
  var ariaChecked = 'aria-checked';

  /**
   * A global namespace for aria-describedby.
   * @type {string}
   */
  var ariaDescribedBy = 'aria-describedby';

  /**
   * A global namespace for aria-expanded.
   * @type {string}
   */
  var ariaExpanded = 'aria-expanded';

  /**
   * A global namespace for aria-hidden.
   * @type {string}
   */
  var ariaHidden = 'aria-hidden';

  /**
   * A global namespace for aria-label.
   * @type {string}
   */
  var ariaLabel = 'aria-label';

  /**
   * A global namespace for aria-labelledby.
   * @type {string}
   */
  var ariaLabelledBy = 'aria-labelledby';

  /**
   * A global namespace for aria-modal.
   * @type {string}
   */
  var ariaModal = 'aria-modal';

  /**
   * A global namespace for aria-pressed.
   * @type {string}
   */
  var ariaPressed = 'aria-pressed';

  /**
   * A global namespace for aria-selected.
   * @type {string}
   */
  var ariaSelected = 'aria-selected';

  /**
   * A global namespace for all browser native events.
   * @type {string[]}
   */
  var nativeEvents = [
    'click',
    'dblclick',
    'mouseup',
    'mousedown',
    'contextmenu',
    'mousewheel',
    'DOMMouseScroll',
    'mouseover',
    'mouseout',
    'mousemove',
    'selectstart',
    'selectend',
    'keydown',
    'keypress',
    'keyup',
    'orientationchange',
    'touchstart',
    'touchmove',
    'touchend',
    'touchcancel',
    'pointercancel',
    'pointerdown',
    'pointerleave',
    'pointermove',
    'pointerup',
    'gesturestart',
    'gesturechange',
    'gestureend',
    'focus',
    'blur',
    'change',
    'reset',
    'select',
    'submit',
    'focusin',
    'focusout',
    'load',
    'unload',
    'beforeunload',
    'resize',
    'move',
    'DOMContentLoaded',
    'readystatechange',
    'error',
    'abort',
    'scroll' ];

  /**
   * A global namespace for `abort` event.
   * @type {string}
   */
  var abortEvent = 'abort';

  /**
   * A global namespace for `blur` event.
   * @type {string}
   */
  var blurEvent = 'blur';

  /**
   * A global namespace for `move` event.
   * @type {string}
   */
  var moveEvent = 'move';

  /**
   * A global namespace for `change` event.
   * @type {string}
   */
  var changeEvent = 'change';

  /**
   * A global namespace for `error` event.
   * @type {string}
   */
  var errorEvent = 'error';

  /**
   * A global namespace for `reset` event.
   * @type {string}
   */
  var resetEvent = 'reset';

  /**
   * A global namespace for `resize` event.
   * @type {string}
   */
  var resizeEvent = 'resize';

  /**
   * A global namespace for `scroll` event.
   * @type {string}
   */
  var scrollEvent = 'scroll';

  /**
   * A global namespace for `submit` event.
   * @type {string}
   */
  var submitEvent = 'submit';

  /**
   * A global namespace for `load` event.
   * @type {string}
   */
  var loadEvent = 'load';

  /**
   * A global namespace for `unload` event.
   * @type {string}
   */
  var unloadEvent = 'unload';

  /**
   * A global namespace for `readystatechange` event.
   * @type {string}
   */
  var readystatechangeEvent = 'readystatechange';

  /**
   * A global namespace for `beforeunload` event.
   * @type {string}
   */
  var beforeunloadEvent = 'beforeunload';

  /**
   * A global namespace for `orientationchange` event.
   * @type {string}
   */
  var orientationchangeEvent = 'orientationchange';

  /**
   * A global namespace for `contextmenu` event.
   * @type {string}
   */
  var contextmenuEvent = 'contextmenu';

  /**
   * A global namespace for `DOMContentLoaded` event.
   * @type {string}
   */
  var DOMContentLoadedEvent = 'DOMContentLoaded';

  /**
   * A global namespace for `DOMMouseScroll` event.
   * @type {string}
   */
  var DOMMouseScrollEvent = 'DOMMouseScroll';

  /**
   * A global namespace for `select` event.
   * @type {string}
   */
  var selectEvent = 'select';

  /**
   * A global namespace for the `selectend` event.
   * @type {string}
   */
  var selectendEvent = 'selectend';

  /**
   * A global namespace for the `selectstart` event.
   * @type {string}
   */
  var selectstartEvent = 'selectstart';

  /**
   * A global namespace for mouse events equivalent to touch events.
   * @type {Record<string, string>}
   */
  var mouseSwipeEvents = {
    start: 'mousedown', end: 'mouseup', move: 'mousemove', cancel: 'mouseleave',
  };

  /**
   * A global namespace for mouse click events.
   * @type {Record<string, string>}
   */
  var mouseClickEvents = { down: 'mousedown', up: 'mouseup' };

  /**
   * A global namespace for `click` event.
   * @type {string}
   */
  var mouseclickEvent = 'click';

  /**
   * A global namespace for `dblclick` event.
   * @type {string}
   */
  var mousedblclickEvent = 'dblclick';

  /**
   * A global namespace for `mousedown` event.
   * @type {string}
   */
  var mousedownEvent = 'mousedown';

  /**
   * A global namespace for `mouseup` event.
   * @type {string}
   */
  var mouseupEvent = 'mouseup';

  /**
   * A global namespace for `hover` event.
   * @type {string}
   */
  var mousehoverEvent = 'hover';

  /**
   * A global namespace for mouse hover events.
   * @type {[string, string]}
   */
  var mouseHoverEvents = ('onmouseleave' in document) ? ['mouseenter', 'mouseleave'] : ['mouseover', 'mouseout'];

  /**
   * A global namespace for `mouseenter` event.
   * @type {string}
   */
  var mouseenterEvent = 'mouseenter';

  /**
   * A global namespace for `mouseleave` event.
   * @type {string}
   */
  var mouseleaveEvent = 'mouseleave';

  /**
   * A global namespace for `mousein` event.
   * @type {string}
   */
  var mouseinEvent = 'mousein';

  /**
   * A global namespace for `mouseout` event.
   * @type {string}
   */
  var mouseoutEvent = 'mouseout';

  /**
   * A global namespace for `mousemove` event.
   * @type {string}
   */
  var mousemoveEvent = 'mousemove';

  /**
   * A global namespace for `mousewheel` event.
   * @type {string}
   */
  var mousewheelEvent = 'mousewheel';

  /**
   * A global namespace for touch events.
   * @type {Record<string, string>}
   */
  var touchEvents = {
    start: 'touchstart', end: 'touchend', move: 'touchmove', cancel: 'touchcancel',
  };

  /**
   * A global namespace for `touchstart` event.
   * @type {string}
   */
  var touchstartEvent = 'touchstart';

  /**
   * A global namespace for `touchmove` event.
   * @type {string}
   */
  var touchmoveEvent = 'touchmove';

  /**
   * A global namespace for `touchcancel` event.
   * @type {string}
   */
  var touchcancelEvent = 'touchcancel';

  /**
   * A global namespace for `touchend` event.
   * @type {string}
   */
  var touchendEvent = 'touchend';

  /**
   * A global namespace for `pointercancel` event.
   * @type {string}
   */
  var pointercancelEvent = 'pointercancel';

  /**
   * A global namespace for `pointerdown` event.
   * @type {string}
   */
  var pointerdownEvent = 'pointerdown';

  /**
   * A global namespace for `pointerleave` event.
   * @type {string}
   */
  var pointerleaveEvent = 'pointerleave';

  /**
   * A global namespace for `pointermove` event.
   * @type {string}
   */
  var pointermoveEvent = 'pointermove';

  /**
   * A global namespace for `pointerup` event.
   * @type {string}
   */
  var pointerupEvent = 'pointerup';

  /**
   * A global namespace for focus event names.
   * @type {{in: string, out: string}}
   */
  var focusEvents = { in: 'focusin', out: 'focusout' };

  /**
   * A global namespace for `focus` event.
   * @type {string}
   */
  var focusEvent = 'focus';

  /**
   * A global namespace for `focusin` event.
   * @type {string}
   */
  var focusinEvent = 'focusin';

  /**
   * A global namespace for `focusout` event.
   * @type {string}
   */
  var focusoutEvent = 'focusout';

  /**
   * A global namespace for `gesturechange` event.
   * @type {string}
   */
  var gesturechangeEvent = 'gesturechange';

  /**
   * A global namespace for `gestureend` event.
   * @type {string}
   */
  var gestureendEvent = 'gestureend';

  /**
   * A global namespace for `gesturestart` event.
   * @type {string}
   */
  var gesturestartEvent = 'gesturestart';

  /**
   * A global namespace for keyboard event keys.
   * @type {Record<string, string>}
   */
  var keyboardEventKeys = {
    Backspace: 'Backspace', //  8
    Tab: 'Tab', //  9
    Enter: 'Enter', // 13
    Shift: 'Shift', // 16
    Control: 'Control', // 17
    Alt: 'Alt', // 18
    Pause: 'Pause', // 19
    CapsLock: 'CapsLock', // 20
    Escape: 'Escape', // 27
    Scape: 'Space', // 32
    ArrowLeft: 'ArrowLeft', // 37
    ArrowUp: 'ArrowUp', // 38
    ArrowRight: 'ArrowRight', // 39
    ArrowDown: 'ArrowDown', // 40
    Insert: 'Insert', // 45
    Delete: 'Delete', // 46
    Meta: 'Meta', // 91 windows key
    ContextMenu: 'ContextMenu', // 93
    ScrollLock: 'ScrollLock', // 145
  };

  /**
   * A global namespace for `keydown` event.
   * @type {string}
   */
  var keydownEvent = 'keydown';

  /**
   * A global namespace for `keyup` event.
   * @type {string}
   */
  var keyupEvent = 'keyup';

  /**
   * A global namespace for `keypress` event.
   * @type {string}
   */
  var keypressEvent = 'keypress';

  /**
   * A global namespace for `Alt` key.
   * @type {string} e.which = 18
   */
  var keyAlt = 'Alt';

  /**
   * A global namespace for `ArrowDown` key.
   * @type {string} e.which = 40 equivalent
   */
  var keyArrowDown = 'ArrowDown';

  /**
   * A global namespace for `ArrowUp` key.
   * @type {string} e.which = 38 equivalent
   */
  var keyArrowUp = 'ArrowUp';

  /**
   * A global namespace for `ArrowLeft` key.
   * @type {string} e.which = 37 equivalent
   */
  var keyArrowLeft = 'ArrowLeft';

  /**
   * A global namespace for `ArrowRight` key.
   * @type {string} e.which = 39 equivalent
   */
  var keyArrowRight = 'ArrowRight';

  /**
   * A global namespace for `Backspace` key.
   * @type {string} e.which === 8 equivalent
   */
  var keyBackspace = 'Backspace';

  /**
   * A global namespace for `CapsLock` key.
   * @type {string} e.which = 20 equivalent
   */
  var keyCapsLock = 'CapsLock';

  /**
   * A global namespace for `Control` key.
   * @type {string} e.which = 17
   */
  var keyControl = 'Control';

  /**
   * A global namespace for `Delete` key.
   * @type {string} e.which = 46 equivalent
   */
  var keyDelete = 'Delete';

  /**
   * A global namespace for `Enter` key.
   * @type {string} e.which = 13 equivalent
   */
  var keyEnter = 'Enter';

  /**
   * A global namespace for `Escape` key.
   * @type {string} e.which = 27 equivalent
   */
  var keyEscape = 'Escape';

  /**
   * A global namespace for `Insert` key.
   * @type {string} e.which = 45 equivalent
   */
  var keyInsert = 'Insert';

  /**
   * A global namespace for `Meta` key.
   * @type {string} e.which = 93 equivalent
   */
  var keyMeta = 'Meta';

  /**
   * A global namespace for `Pause` key.
   * @type {string} e.which = 19
   */
  var keyPause = 'Pause';

  /**
   * A global namespace for `ScrollLock` key.
   * @type {string} e.which = 145 equivalent
   */
  var keyScrollLock = 'ScrollLock';

  /**
   * A global namespace for `Shift` key.
   * @type {string} e.which = 16
   */
  var keyShift = 'Shift';

  /**
   * A global namespace for `Space` key.
   * @type {string} e.which = 32 equivalent
   */
  var keySpace = 'Space';

  /**
   * A global namespace for `Tab` key.
   * @type {string} e.which = 9 equivalent
   */
  var keyTab = 'Tab';

  /**
   * A global namespace for 'animationDuration' string.
   * @type {string}
   */
  var animationDuration$1 = 'animationDuration';

  /**
   * A global namespace for 'animationDuration' string.
   * @type {string}
   */
  var animationDuration = 'webkitAnimation' in document.head.style ? 'webkitAnimationDuration' : 'animationDuration';

  /**
   * A global namespace for 'animationDelay' string.
   * @type {string}
   */
  var animationDelay$1 = 'animationDelay';

  /**
   * A global namespace for 'animationDelay' string.
   * @type {string}
   */
  var animationDelay = 'webkitAnimation' in document.head.style ? 'webkitAnimationDelay' : 'animationDelay';

  /**
   * A global namespace for 'animationName' string.
   * @type {string}
   */
  var animationName$1 = 'animationName';

  /**
   * A global namespace for 'animationName' string.
   * @type {string}
   */
  var animationName = 'webkitAnimation' in document.head.style ? 'webkitAnimationName' : 'animationName';

  /**
   * A global namespace for 'animationend' string.
   * @type {string}
   */
  var animationEndEvent$1 = 'animationend';

  /**
   * A global namespace for 'animationend' string.
   * @type {string}
   */
  var animationEndEvent = 'webkitAnimation' in document.head.style ? 'webkitAnimationEnd' : 'animationend';

  /**
   * A global namespace for 'transitionDuration' string.
   * @type {string}
   */
  var transitionDuration$1 = 'transitionDuration';

  /**
   * A global namespace for 'transitionDuration' string.
   * @type {string}
   */
  var transitionDuration = 'webkitTransition' in document.head.style ? 'webkitTransitionDuration' : 'transitionDuration';

  /**
   * A global namespace for 'transitionDelay' string.
   * @type {string}
   */
  var transitionDelay$1 = 'transitionDelay';

  /**
   * A global namespace for 'transitionDelay' string.
   * @type {string}
   */
  var transitionDelay = 'webkitTransition' in document.head.style ? 'webkitTransitionDelay' : 'transitionDelay';

  /**
   * A global namespace for 'transitionend' string.
   * @type {string}
   */
  var transitionEndEvent$1 = 'transitionend';

  /**
   * A global namespace for 'transitionend' string.
   * @type {string}
   */
  var transitionEndEvent = 'webkitTransition' in document.head.style ? 'webkitTransitionEnd' : 'transitionend';

  /**
   * A global namespace for:
   * * `transitionProperty` string for Firefox,
   * * `transition` property for all other browsers.
   *
   * @type {string}
   */
  var transitionProperty$1 = 'transitionProperty';

  /**
   * A global namespace for:
   * * `transitionProperty` string for Firefox,
   * * `webkitTransition` for older Chrome / Safari browsers,
   * * `transition` property for all other browsers.
   * @type {string}
   */
  var transitionProperty = 'webkitTransition' in document.head.style ? 'webkitTransitionProperty' : 'transitionProperty';

  /**
   * A global namespace for 'addEventListener' string.
   * @type {string}
   */
  var addEventListener = 'addEventListener';

  /**
   * A global namespace for 'removeEventListener' string.
   * @type {string}
   */
  var removeEventListener = 'removeEventListener';

  /**
   * A global namespace for predefined
   * CSS3 'cubic-bezier()' easing functions.
   * @type {Record<string, string>}
   */
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

  /**
   * A global namespace for `offsetHeight` property.
   * @type {string}
   */
  var offsetHeight = 'offsetHeight';

  /**
   * A global namespace for `offsetWidth` property.
   * @type {string}
   */
  var offsetWidth = 'offsetWidth';

  /**
   * A global namespace for `scrollHeight` property.
   * @type {string}
   */
  var scrollHeight = 'scrollHeight';

  /**
   * A global namespace for `scrollWidth` property.
   * @type {string}
   */
  var scrollWidth = 'scrollWidth';

  // @ts-ignore
  var userAgentDATA = navigator.userAgentData;

  /**
   * A global namespace for `userAgentData` event.
   */
  var userAgentData = userAgentDATA;

  var userAgentString = navigator.userAgent;

  /**
   * A global namespace for `navigator.userAgent` string.
   */
  var userAgent = userAgentString;

  var mobileBrands = /iPhone|iPad|iPod|Android/i;
  var isMobileCheck = false;

  if (userAgentData) {
    isMobileCheck = userAgentData.brands
      .some(function (/** @type {Record<String, any>} */x) { return mobileBrands.test(x.brand); });
  } else {
    isMobileCheck = mobileBrands.test(userAgent);
  }

  /**
   * A global `boolean` for mobile detection.
   * @type {boolean}
   */
  var isMobile = isMobileCheck;

  var appleBrands = /(iPhone|iPod|iPad)/;

  /**
   * A global `boolean` for Apple browsers.
   * @type {boolean}
   */
  var isApple = !userAgentData ? appleBrands.test(userAgent)
    : userAgentData.brands.some(function (/** @type {Record<string, any>} */x) { return appleBrands.test(x.brand); });

  /**
   * A global boolean for Gecko browsers. When writing this file,
   * Gecko was not supporting `userAgentData`.
   */
  var isFirefox = userAgent ? userAgent.includes('Firefox') : false;

  /**
   * A global namespace for `document.head`.
   */
  var documentHead = document.head;

  /**
   * A global `boolean` for CSS3 3D transform support.
   * @type {boolean}
   */
  var support3DTransform = 'webkitPerspective' in documentHead.style || 'perspective' in documentHead.style;

  /**
   * Add eventListener to an `Element` | `HTMLElement` | `Document` target.
   *
   * @param {HTMLElement | Element | Document} element event.target
   * @param {string} eventName event.type
   * @param {EventListener} handler callback
   * @param {EventListenerOptions | boolean | undefined} options other event options
   */
  function on(element, eventName, handler, options) {
    var ops = options || false;
    element.addEventListener(eventName, handler, ops);
  }

  /**
   * Remove eventListener from an `Element` | `HTMLElement` | `Document` target.
   *
   * @param {HTMLElement | Element | Document} element event.target
   * @param {string} eventName event.type
   * @param {EventListener} handler callback
   * @param {EventListenerOptions | boolean | undefined} options other event options
   */
  function off(element, eventName, handler, options) {
    var ops = options || false;
    element.removeEventListener(eventName, handler, ops);
  }

  /**
   * Add an `eventListener` to an `Element` | `HTMLElement` | `Document` target
   * and remove it once callback is called.
   *
   * @param {HTMLElement | Element | Document} element event.target
   * @param {string} eventName event.type
   * @param {EventListener} handler callback
   * @param {EventListenerOptions | boolean | undefined} options other event options
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
   * A global `boolean` for passive events support,
   * in general event options are not suited for scroll prevention.
   *
   * @see https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
   * @type {boolean}
   */
  var supportPassive = (function () {
    var result = false;
    try {
      var opts = Object.defineProperty({}, 'passive', {
        get: function get() {
          result = true;
          return result;
        },
      });
      one(document, DOMContentLoadedEvent, function () {}, opts);
    } catch (e) {
      throw Error('Passive events are not supported');
    }

    return result;
  })();

  /**
   * A global `boolean` for CSS3 transform support.
   * @type {boolean}
   */
  var supportTransform = 'webkitTransform' in documentHead.style || 'transform' in documentHead.style;

  /**
   * A global `boolean` for touch events support.
   * @type {boolean}
   */
  var supportTouch = 'ontouchstart' in window || 'msMaxTouchPoints' in navigator;

  /**
   * A global `boolean` for CSS3 animation support.
   * @type {boolean}
   */
  var supportAnimation = 'webkitAnimation' in documentHead.style || 'animation' in documentHead.style;

  /**
   * A global `boolean` for CSS3 transition support.
   * @type {boolean}
   */
  var supportTransition = 'webkitTransition' in documentHead.style || 'transition' in documentHead.style;

  /**
   * Shortcut for `HTMLElement.getAttribute()` method.
   * @param  {HTMLElement | Element} element target element
   * @param  {string} attribute attribute name
   */
  var getAttribute = function (element, attribute) { return element.getAttribute(attribute); };

  /**
   * Shortcut for `SVGElement.getAttributeNS()` method.
   * @param  {HTMLElement | Element} element target element
   * @param  {string} attribute attribute name
   * @param  {string=} ns attribute namespace
   */
  var getAttributeNS = function (element, attribute, ns) { return element.getAttributeNS(ns || null, attribute); };

  /**
   * Shortcut for `HTMLElement.hasAttribute()` method.
   * @param  {HTMLElement | Element} element target element
   * @param  {string} attribute attribute name
   */
  var hasAttribute = function (element, attribute) { return element.hasAttribute(attribute); };

  /**
   * Shortcut for `SVGElement.hasAttributeNS()` method.
   * @param  {HTMLElement | Element} element target element
   * @param  {string} att attribute name
   * @param  {string=} ns attribute namespace
   */
  var hasAttributeNS = function (element, att, ns) { return element.hasAttributeNS(ns || null, att); };

  /**
   * Shortcut for `HTMLElement.setAttribute()` method.
   * @param  {HTMLElement | Element} element target element
   * @param  {string} attribute attribute name
   * @param  {string} value attribute value
   */
  var setAttribute = function (element, attribute, value) { return element.setAttribute(attribute, value); };

  /**
   * Shortcut for `SVGElement.setAttributeNS()` method.
   * @param  {HTMLElement | Element} element target element
   * @param  {string} att attribute name
   * @param  {string} value attribute value
   * @param  {string=} ns attribute namespace
   */
  var setAttributeNS = function (element, att, value, ns) { return element.setAttributeNS(ns || null, att, value); };

  /**
   * Shortcut for `HTMLElement.removeAttribute()` method.
   * @param  {HTMLElement | Element} element target element
   * @param  {string} attribute attribute name
   */
  var removeAttribute = function (element, attribute) { return element.removeAttribute(attribute); };

  /**
   * Shortcut for `HTMLElement.removeAttributeNS()` method.
   * @param  {HTMLElement | Element} element target element
   * @param  {string} att attribute name
   * @param  {string=} ns attribute namespace
   */
  var removeAttributeNS = function (element, att, ns) { return element.removeAttributeNS(ns || null, att); };

  /**
   * Add class to `HTMLElement.classList`.
   *
   * @param {HTMLElement | Element} element target
   * @param {string} classNAME to add
   */
  function addClass(element, classNAME) {
    element.classList.add(classNAME);
  }

  /**
   * Remove class from `HTMLElement.classList`.
   *
   * @param {HTMLElement | Element} element target
   * @param {string} classNAME to remove
   */
  function removeClass(element, classNAME) {
    element.classList.remove(classNAME);
  }

  /**
   * Check class in `HTMLElement.classList`.
   *
   * @param {HTMLElement | Element} element target
   * @param {string} classNAME to check
   * @return {boolean}
   */
  function hasClass(element, classNAME) {
    return element.classList.contains(classNAME);
  }

  /**
   * Shortcut for `Array.from()` static method.
   *
   * @param  {any[] | HTMLCollection | NodeList | Map<any, any>} arr array-like iterable object
   * @returns {Array<any>}
   */
  var ArrayFrom = function (arr) { return Array.from(arr); };

  /**
   * Returns the `document` or the `#document` element.
   * @see https://github.com/floating-ui/floating-ui
   * @param {(Node | HTMLElement | Element | globalThis)=} node
   * @returns {Document}
   */
  function getDocument(node) {
    if (node instanceof HTMLElement) { return node.ownerDocument; }
    if (node instanceof Window) { return node.document; }
    return window.document;
  }

  /**
   * A global array of possible `ParentNode`.
   */
  var parentNodes = [Document, Node, Element, HTMLElement];

  /**
   * A global array with `Element` | `HTMLElement`.
   */
  var elementNodes = [Element, HTMLElement];

  /**
   * Utility to check if target is typeof `HTMLElement`, `Element`, `Node`
   * or find one that matches a selector.
   *
   * @param {HTMLElement | Element | string} selector the input selector or target element
   * @param {(HTMLElement | Element | Node | Document)=} parent optional node to look into
   * @return {(HTMLElement | Element)?} the `HTMLElement` or `querySelector` result
   */
  function querySelector(selector, parent) {
    var selectorIsString = typeof selector === 'string';
    var lookUp = parent && parentNodes.some(function (x) { return parent instanceof x; })
      ? parent : getDocument();

    if (!selectorIsString && [].concat( elementNodes ).some(function (x) { return selector instanceof x; })) {
      return selector;
    }
    // @ts-ignore -- `ShadowRoot` is also a node
    return selectorIsString ? lookUp.querySelector(selector) : null;
  }

  /** @type {Map<string, Map<HTMLElement | Element, Record<string, any>>>} */
  var componentData = new Map();
  /**
   * An interface for web components background data.
   * @see https://github.com/thednp/bootstrap.native/blob/master/src/components/base-component.js
   */
  var Data = {
    /**
     * Sets web components data.
     * @param {HTMLElement | Element | string} target target element
     * @param {string} component the component's name or a unique key
     * @param {Record<string, any>} instance the component instance
     */
    set: function (target, component, instance) {
      var element = querySelector(target);
      if (!element) { return; }

      if (!componentData.has(component)) {
        componentData.set(component, new Map());
      }

      var instanceMap = componentData.get(component);
      // @ts-ignore - not undefined, but defined right above
      instanceMap.set(element, instance);
    },

    /**
     * Returns all instances for specified component.
     * @param {string} component the component's name or a unique key
     * @returns {Map<HTMLElement | Element, Record<string, any>>?} all the component instances
     */
    getAllFor: function (component) {
      var instanceMap = componentData.get(component);

      return instanceMap || null;
    },

    /**
     * Returns the instance associated with the target.
     * @param {HTMLElement | Element | string} target target element
     * @param {string} component the component's name or a unique key
     * @returns {Record<string, any>?} the instance
     */
    get: function (target, component) {
      var element = querySelector(target);
      var allForC = Data.getAllFor(component);
      var instance = element && allForC && allForC.get(element);

      return instance || null;
    },

    /**
     * Removes web components data.
     * @param {HTMLElement | Element | string} target target element
     * @param {string} component the component's name or a unique key
     */
    remove: function (target, component) {
      var element = querySelector(target);
      var instanceMap = componentData.get(component);
      if (!instanceMap || !element) { return; }

      instanceMap.delete(element);

      if (instanceMap.size === 0) {
        componentData.delete(component);
      }
    },
  };

  /**
   * An alias for `Data.get()`.
   * @type {SHORTER.getInstance<any>}
   */
  var getInstance = function (target, component) { return Data.get(target, component); };

  /**
   * Shortcut for the `Element.dispatchEvent(Event)` method.
   *
   * @param {HTMLElement | Element} element is the target
   * @param {Event} event is the `Event` object
   */
  var dispatchEvent = function (element, event) { return element.dispatchEvent(event); };

  /**
   * JavaScript `Array` distinct.
   * @see https://codeburst.io/javascript-array-distinct-5edc93501dc4
   * @param {any} value
   * @param {number} index
   * @param {any} self
   * @returns {boolean}
   */
  var distinct = function (value, index, self) { return self.indexOf(value) === index; };

  /**
   * Shortcut for `window.getComputedStyle(element).propertyName`
   * static method.
   *
   * * If `element` parameter is not an `HTMLElement`, `getComputedStyle`
   * throws a `ReferenceError`.
   *
   * @param {HTMLElement | Element} element target
   * @param {string} property the css property
   * @return {string} the css property value
   */
  function getElementStyle(element, property) {
    var computedStyle = getComputedStyle(element);

    // @ts-ignore -- must use camelcase strings,
    // or non-camelcase strings with `getPropertyValue`
    return property in computedStyle ? computedStyle[property] : '';
  }

  /**
   * Utility to get the computed `animationDelay`
   * from Element in miliseconds.
   *
   * @param {HTMLElement | Element} element target
   * @return {number} the value in miliseconds
   */
  function getElementAnimationDelay$1(element) {
    var propertyValue = getElementStyle(element, animationName$1);
    var durationValue = getElementStyle(element, animationDelay$1);

    var durationScale = durationValue.includes('ms') ? 1 : 1000;
    var duration = propertyValue && propertyValue !== 'none'
      ? parseFloat(durationValue) * durationScale : 0;

    return !Number.isNaN(duration) ? duration : 0;
  }

  /**
   * Utility to get the computed `animationDuration`
   * from `HTMLElement` in miliseconds.
   *
   * @param {HTMLElement | Element} element target
   * @return {number} the value in miliseconds
   */
  function getElementAnimationDuration$1(element) {
    var propertyValue = getElementStyle(element, animationName$1);
    var durationValue = getElementStyle(element, animationDuration$1);
    var durationScale = durationValue.includes('ms') ? 1 : 1000;
    var duration = propertyValue && propertyValue !== 'none'
      ? parseFloat(durationValue) * durationScale : 0;

    return !Number.isNaN(duration) ? duration : 0;
  }

  /**
   * Utility to make sure callbacks are consistently
   * called when animation ends.
   *
   * @param {HTMLElement | Element} element target
   * @param {EventListener} handler `animationend` callback
   */
  function emulateAnimationEnd$1(element, handler) {
    var called = 0;
    var endEvent = new Event(animationEndEvent$1);
    var duration = getElementAnimationDuration$1(element);
    var delay = getElementAnimationDelay$1(element);

    if (duration) {
      /**
       * Wrap the handler in on -> off callback
       * @param {Event} e Event object
       */
      var animationEndWrapper = function (e) {
        if (e.target === element) {
          handler.apply(element, [e]);
          element.removeEventListener(animationEndEvent$1, animationEndWrapper);
          called = 1;
        }
      };
      element.addEventListener(animationEndEvent$1, animationEndWrapper);
      setTimeout(function () {
        if (!called) { element.dispatchEvent(endEvent); }
      }, duration + delay + 17);
    } else {
      handler.apply(element, [endEvent]);
    }
  }

  /**
   * Utility to get the computed `animationDelay`
   * from Element in miliseconds.
   *
   * @param {HTMLElement | Element} element target
   * @return {number} the value in miliseconds
   */
  function getElementAnimationDelay(element) {
    var propertyValue = getElementStyle(element, animationName);
    var durationValue = getElementStyle(element, animationDelay);
    var durationScale = durationValue.includes('ms') ? 1 : 1000;
    var duration = supportAnimation && propertyValue && propertyValue !== 'none'
      ? parseFloat(durationValue) * durationScale : 0;

    return !Number.isNaN(duration) ? duration : 0;
  }

  /**
   * Utility to get the computed `animationDuration`
   * from `HTMLElement` in miliseconds.
   *
   * @param {HTMLElement | Element} element target
   * @return {number} the value in miliseconds
   */
  function getElementAnimationDuration(element) {
    var propertyValue = getElementStyle(element, animationName);
    var durationValue = getElementStyle(element, animationDuration);
    var durationScale = durationValue.includes('ms') ? 1 : 1000;
    var duration = supportAnimation && propertyValue && propertyValue !== 'none'
      ? parseFloat(durationValue) * durationScale : 0;

    return !Number.isNaN(duration) ? duration : 0;
  }

  /**
   * Utility to make sure callbacks are consistently
   * called when animation ends.
   *
   * @param {HTMLElement | Element} element target
   * @param {EventListener} handler `animationend` callback
   */
  function emulateAnimationEnd(element, handler) {
    var called = 0;
    var endEvent = new Event(animationEndEvent);
    var duration = getElementAnimationDuration(element);
    var delay = getElementAnimationDelay(element);

    if (supportAnimation && duration) {
      /**
       * Wrap the handler in on -> off callback
       * @param {Event} e Event object
       */
      var animationEndWrapper = function (e) {
        if (e.target === element) {
          handler.apply(element, [e]);
          element.removeEventListener(animationEndEvent, animationEndWrapper);
          called = 1;
        }
      };
      element.addEventListener(animationEndEvent, animationEndWrapper);
      setTimeout(function () {
        if (!called) { element.dispatchEvent(endEvent); }
      }, duration + delay + 17);
    } else {
      handler.apply(element, [endEvent]);
    }
  }

  /**
   * Utility to get the computed `transitionDelay`
   * from Element in miliseconds.
   *
   * @param {HTMLElement | Element} element target
   * @return {number} the value in miliseconds
   */
  function getElementTransitionDelay$1(element) {
    var propertyValue = getElementStyle(element, transitionProperty$1);
    var delayValue = getElementStyle(element, transitionDelay$1);

    var delayScale = delayValue.includes('ms') ? 1 : 1000;
    var duration = propertyValue && propertyValue !== 'none'
      ? parseFloat(delayValue) * delayScale : 0;

    return !Number.isNaN(duration) ? duration : 0;
  }

  /**
   * Utility to get the computed `transitionDuration`
   * from Element in miliseconds.
   *
   * @param {HTMLElement | Element} element target
   * @return {number} the value in miliseconds
   */
  function getElementTransitionDuration$1(element) {
    var propertyValue = getElementStyle(element, transitionProperty$1);
    var durationValue = getElementStyle(element, transitionDuration$1);
    var durationScale = durationValue.includes('ms') ? 1 : 1000;
    var duration = propertyValue && propertyValue !== 'none'
      ? parseFloat(durationValue) * durationScale : 0;

    return !Number.isNaN(duration) ? duration : 0;
  }

  /**
   * Utility to make sure callbacks are consistently
   * called when transition ends.
   *
   * @param {HTMLElement | Element} element target
   * @param {EventListener} handler `transitionend` callback
   */
  function emulateTransitionEnd$1(element, handler) {
    var called = 0;
    var endEvent = new Event(transitionEndEvent$1);
    var duration = getElementTransitionDuration$1(element);
    var delay = getElementTransitionDelay$1(element);

    if (duration) {
      /**
       * Wrap the handler in on -> off callback
       * @param {Event} e Event object
       */
      var transitionEndWrapper = function (e) {
        if (e.target === element) {
          handler.apply(element, [e]);
          element.removeEventListener(transitionEndEvent$1, transitionEndWrapper);
          called = 1;
        }
      };
      element.addEventListener(transitionEndEvent$1, transitionEndWrapper);
      setTimeout(function () {
        if (!called) { element.dispatchEvent(endEvent); }
      }, duration + delay + 17);
    } else {
      handler.apply(element, [endEvent]);
    }
  }

  /**
   * Utility to get the computed `transitionDelay`
   * from Element in miliseconds.
   *
   * @param {HTMLElement | Element} element target
   * @return {number} the value in miliseconds
   */
  function getElementTransitionDelay(element) {
    var propertyValue = getElementStyle(element, transitionProperty);
    var delayValue = getElementStyle(element, transitionDelay);
    var delayScale = delayValue.includes('ms') ? 1 : 1000;
    var duration = supportTransition && propertyValue && propertyValue !== 'none'
      ? parseFloat(delayValue) * delayScale : 0;

    return !Number.isNaN(duration) ? duration : 0;
  }

  /**
   * Utility to get the computed `transitionDuration`
   * from Element in miliseconds.
   *
   * @param {HTMLElement | Element} element target
   * @return {number} the value in miliseconds
   */
  function getElementTransitionDuration(element) {
    var propertyValue = getElementStyle(element, transitionProperty);
    var durationValue = getElementStyle(element, transitionDuration);
    var durationScale = durationValue.includes('ms') ? 1 : 1000;
    var duration = supportTransition && propertyValue && propertyValue !== 'none'
      ? parseFloat(durationValue) * durationScale : 0;

    return !Number.isNaN(duration) ? duration : 0;
  }

  /**
   * Utility to make sure callbacks are consistently
   * called when transition ends.
   *
   * @param {HTMLElement | Element} element target
   * @param {EventListener} handler `transitionend` callback
   */
  function emulateTransitionEnd(element, handler) {
    var called = 0;
    var endEvent = new Event(transitionEndEvent);
    var duration = getElementTransitionDuration(element);
    var delay = getElementTransitionDelay(element);

    if (supportTransition && duration) {
      /**
       * Wrap the handler in on -> off callback
       * @param {Event} e Event object
       */
      var transitionEndWrapper = function (e) {
        if (e.target === element) {
          handler.apply(element, [e]);
          element.removeEventListener(transitionEndEvent, transitionEndWrapper);
          called = 1;
        }
      };
      element.addEventListener(transitionEndEvent, transitionEndWrapper);
      setTimeout(function () {
        if (!called) { element.dispatchEvent(endEvent); }
      }, duration + delay + 17);
    } else {
      handler.apply(element, [endEvent]);
    }
  }

  /**
   * Shortcut for `Float32Array.from()` static method.
   * @param  {any[] | HTMLCollection | NodeList} arr array-like iterable object
   * @returns {Float32Array}
   */
  var Float32ArrayFrom = function (arr) { return Float32Array.from(Array.from(arr)); };

  /**
   * Shortcut for `Float64Array.from()` static method.
   * @param  {any[] | HTMLCollection | NodeList} arr array-like iterable object
   * @returns {Float64Array}
   */
  var Float64ArrayFrom = function (arr) { return Float64Array.from(Array.from(arr)); };

  /**
   * Utility to focus an `HTMLElement` target.
   *
   * @param {HTMLElement | Element} element is the target
   */
  // @ts-ignore -- `Element`s resulted from querySelector can focus too
  var focus = function (element) { return element.focus(); };

  /** A generic function with empty body. */
  var noop = function () {};

  /**
   * The raw value or a given component option.
   *
   * @typedef {string | HTMLElement | Function | number | boolean | null} niceValue
   */

  /**
   * Utility to normalize component options
   *
   * @param {any} value the input value
   * @return {niceValue} the normalized value
   */
  function normalizeValue(value) {
    if (value === 'true') { // boolean
      return true;
    }

    if (value === 'false') { // boolean
      return false;
    }

    if (!Number.isNaN(+value)) { // number
      return +value;
    }

    if (value === '' || value === 'null') { // null
      return null;
    }

    // string / function / HTMLElement / object
    return value;
  }

  /**
   * Shortcut for `Object.keys()` static method.
   * @param  {Record<string, any>} obj a target object
   * @returns {string[]}
   */
  var ObjectKeys = function (obj) { return Object.keys(obj); };

  /**
   * Utility to normalize component options.
   *
   * @param {HTMLElement | Element} element target
   * @param {Record<string, any>} defaultOps component default options
   * @param {Record<string, any>} inputOps component instance options
   * @param {string=} ns component namespace
   * @return {Record<string, any>} normalized component options object
   */
  function normalizeOptions(element, defaultOps, inputOps, ns) {
    // @ts-ignore -- our targets are always `HTMLElement`
    var data = Object.assign({}, element.dataset);
    /** @type {Record<string, any>} */
    var normalOps = {};
    /** @type {Record<string, any>} */
    var dataOps = {};

    ObjectKeys(data).forEach(function (k) {
      var key = ns && k.includes(ns)
        ? k.replace(ns, '').replace(/[A-Z]/, function (match) { return match.toLowerCase(); })
        : k;

      dataOps[key] = normalizeValue(data[k]);
    });

    ObjectKeys(inputOps).forEach(function (k) {
      inputOps[k] = normalizeValue(inputOps[k]);
    });

    ObjectKeys(defaultOps).forEach(function (k) {
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
   * Shortcut for `Object.assign()` static method.
   * @param  {Record<string, any>} obj a target object
   * @param  {Record<string, any>} source a source object
   */
  var ObjectAssign = function (obj, source) { return Object.assign(obj, source); };

  /**
   * Shortcut for `Object.values()` static method.
   * @param  {Record<string, any>} obj a target object
   * @returns {any[]}
   */
  var ObjectValues = function (obj) { return Object.values(obj); };

  /**
   * A global namespace for most scroll event listeners.
   */
  var passiveHandler$1 = { passive: true };

  /**
   * A global namespace for most scroll event listeners in legacy browsers.
   */
  var passiveHandler = supportPassive ? { passive: true } : false;

  /**
   * Utility to force re-paint of an `HTMLElement` target.
   *
   * @param {HTMLElement | Element} element is the target
   * @return {number} the `Element.offsetHeight` value
   */
  // @ts-ignore
  var reflow = function (element) { return element.offsetHeight; };

  /**
   * Shortcut for multiple uses of `HTMLElement.style.propertyName` method.
   * @param  {HTMLElement | Element} element target element
   * @param  {Partial<CSSStyleDeclaration>} styles attribute value
   */
  // @ts-ignore
  var setElementStyle = function (element, styles) { ObjectAssign(element.style, styles); };

  /** @type {Map<HTMLElement | Element, any>} */
  var TimeCache = new Map();
  /**
   * An interface for one or more `TimerHandler`s per `Element`.
   * @see https://github.com/thednp/navbar.js/
   */
  var Timer = {
    /**
     * Sets a new timeout timer for an element, or element -> key association.
     * @param {HTMLElement | Element | string} target target element
     * @param {ReturnType<TimerHandler>} callback the callback
     * @param {number} delay the execution delay
     * @param {string=} key a unique
     */
    set: function (target, callback, delay, key) {
      var element = querySelector(target);

      if (!element) { return; }

      if (key && key.length) {
        if (!TimeCache.has(element)) {
          TimeCache.set(element, new Map());
        }
        var keyTimers = TimeCache.get(element);
        keyTimers.set(key, setTimeout(callback, delay));
      } else {
        TimeCache.set(element, setTimeout(callback, delay));
      }
    },

    /**
     * Returns the timer associated with the target.
     * @param {HTMLElement | Element | string} target target element
     * @param {string=} key a unique
     * @returns {number?} the timer
     */
    get: function (target, key) {
      var element = querySelector(target);

      if (!element) { return null; }
      var keyTimers = TimeCache.get(element);

      if (key && key.length && keyTimers && keyTimers.get) {
        return keyTimers.get(key) || null;
      }
      return keyTimers || null;
    },

    /**
     * Clears the element's timer.
     * @param {HTMLElement | Element | string} target target element
     * @param {string=} key a unique key
     */
    clear: function (target, key) {
      var element = querySelector(target);

      if (!element) { return; }

      if (key && key.length) {
        var keyTimers = TimeCache.get(element);

        if (keyTimers && keyTimers.get) {
          clearTimeout(keyTimers.get(key));
          keyTimers.delete(key);
          if (keyTimers.size === 0) {
            TimeCache.delete(element);
          }
        }
      } else {
        clearTimeout(TimeCache.get(element));
        TimeCache.delete(element);
      }
    },
  };

  /**
   * Utility to wrap a callback in a try() catch(e)
   *
   * @param {Function} fn callback
   * @param {string} origin callback context description
   */
  function tryWrapper(fn, origin) {
    try { fn(); } catch (e) {
      throw TypeError((origin + " " + e));
    }
  }

  /**
   * Returns the bounding client rect of a target `HTMLElement`.
   *
   * @see https://github.com/floating-ui/floating-ui
   *
   * @param {HTMLElement | Element} element event.target
   * @param {boolean=} includeScale when *true*, the target scale is also computed
   * @returns {SHORTER.BoundingClientRect} the bounding client rect object
   */
  function getBoundingClientRect(element, includeScale) {
    var ref = element.getBoundingClientRect();
    var width = ref.width;
    var height = ref.height;
    var top = ref.top;
    var right = ref.right;
    var bottom = ref.bottom;
    var left = ref.left;
    var scaleX = 1;
    var scaleY = 1;

    if (includeScale && element instanceof HTMLElement) {
      var offsetWidth = element.offsetWidth;
      var offsetHeight = element.offsetHeight;
      scaleX = offsetWidth > 0 ? Math.round(width) / offsetWidth || 1 : 1;
      scaleY = offsetHeight > 0 ? Math.round(height) / offsetHeight || 1 : 1;
    }

    return {
      width: width / scaleX,
      height: height / scaleY,
      top: top / scaleY,
      right: right / scaleX,
      bottom: bottom / scaleY,
      left: left / scaleX,
      x: left / scaleX,
      y: top / scaleY,
    };
  }

  /**
   * Returns the `document.body` or the `<body>` element.
   *
   * @param {(Node | HTMLElement | Element | globalThis)=} node
   * @returns {HTMLElement | HTMLBodyElement}
   */
  function getDocumentBody(node) {
    return getDocument(node).body;
  }

  /**
   * Returns the `document.documentElement` or the `<html>` element.
   *
   * @param {(Node | HTMLElement | Element | globalThis)=} node
   * @returns {HTMLElement | HTMLHtmlElement}
   */
  function getDocumentElement(node) {
    return getDocument(node).documentElement;
  }

  /**
   * Returns the `document.head` or the `<head>` element.
   *
   * @param {(Node | HTMLElement | Element | globalThis)=} node
   * @returns {HTMLElement | HTMLHeadElement}
   */
  function getDocumentHead(node) {
    return getDocument(node).head;
  }

  /**
   * Returns an `{x,y}` object with the target
   * `HTMLElement` / `Node` scroll position.
   *
   * @see https://github.com/floating-ui/floating-ui
   *
   * @param {HTMLElement | Element | Window} element target node / element
   * @returns {{x: number, y: number}} the scroll tuple
   */
  function getNodeScroll(element) {
    var isWin = 'scrollX' in element;
    var x = isWin ? element.scrollX : element.scrollLeft;
    var y = isWin ? element.scrollY : element.scrollTop;

    return { x: x, y: y };
  }

  /**
   * Returns the `Window` object of a target node.
   * @see https://github.com/floating-ui/floating-ui
   *
   * @param {(Node | HTMLElement | Element | Window)=} node target node
   * @returns {globalThis}
   */
  function getWindow(node) {
    if (node == null) {
      return window;
    }

    if (!(node instanceof Window)) {
      var ownerDocument = node.ownerDocument;
      return ownerDocument ? ownerDocument.defaultView || window : window;
    }

    // @ts-ignore
    return node;
  }

  /**
   * Check if target is a `ShadowRoot`.
   *
   * @param {any} element target
   * @returns {boolean} the query result
   */
  var isShadowRoot = function (element) {
    var OwnElement = getWindow(element).ShadowRoot;
    return element instanceof OwnElement || element instanceof ShadowRoot;
  };

  /**
   * Returns the `parentNode` also going through `ShadowRoot`.
   * @see https://github.com/floating-ui/floating-ui
   *
   * @param {Node | HTMLElement | Element} node the target node
   * @returns {Node | HTMLElement | Element} the apropriate parent node
   */
  function getParentNode(node) {
    if (node.nodeName === 'HTML') {
      return node;
    }

    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    return (
      // @ts-ignore
      node.assignedSlot // step into the shadow DOM of the parent of a slotted node
      || node.parentNode // @ts-ignore DOM Element detected
      || (isShadowRoot(node) ? node.host : null) // ShadowRoot detected
      || getDocumentElement(node) // fallback
    );
  }

  /**
   * Checks if a target `HTMLElement` is affected by scale.
   * @see https://github.com/floating-ui/floating-ui
   *
   * @param {HTMLElement} element target
   * @returns {boolean} the query result
   */
  function isScaledElement(element) {
    var ref = getBoundingClientRect(element);
    var width = ref.width;
    var height = ref.height;
    var offsetWidth = element.offsetWidth;
    var offsetHeight = element.offsetHeight;
    return Math.round(width) !== offsetWidth
      || Math.round(height) !== offsetHeight;
  }

  /**
   * Returns the rect relative to an offset parent.
   * @see https://github.com/floating-ui/floating-ui
   *
   * @param {HTMLElement | Element} element target
   * @param {HTMLElement | Element | Window} offsetParent the container / offset parent
   * @param {{x: number, y: number}} scroll
   * @returns {SHORTER.OffsetRect}
   */
  function getRectRelativeToOffsetParent(element, offsetParent, scroll) {
    var isParentAnElement = offsetParent instanceof HTMLElement;
    var rect = getBoundingClientRect(element, isParentAnElement && isScaledElement(offsetParent));
    var offsets = { x: 0, y: 0 };

    if (isParentAnElement) {
      var offsetRect = getBoundingClientRect(offsetParent, true);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }

    return {
      x: rect.left + scroll.x - offsets.x,
      y: rect.top + scroll.y - offsets.y,
      width: rect.width,
      height: rect.height,
    };
  }

  /**
   * Shortcut for `Array.isArray()` static method.
   *
   * @param  {any} arr array-like iterable object
   * @returns {boolean} the query result
   */
  var isArray = function (arr) { return Array.isArray(arr); };

  /**
   * Checks if an object is a `Document`.
   *
   * @param {any} element the target object
   * @returns {boolean} the query result
   */
  var isDocument = function (element) { return element instanceof Document; };

  /**
   * Checks if an object is a `CustomElement`.
   *
   * @param {any} element the target object
   * @returns {boolean} the query result
   */
  var isCustomElement = function (element) { return element && !!element.shadowRoot; };

  /**
   * Checks if an object is an `Element`.
   *
   * @param {any} element the target object
   * @returns {boolean} the query result
   */
  var isElement = function (element) { return element instanceof Element; };

  /**
   * Utility to determine if an `HTMLElement`
   * is partially visible in viewport.
   *
   * @param {HTMLElement | Element} element target
   * @return {boolean} the query result
   */
  var isElementInScrollRange = function (element) {
    var ref = getBoundingClientRect(element);
    var top = ref.top;
    var bottom = ref.bottom;
    var ref$1 = getDocumentElement(element);
    var clientHeight = ref$1.clientHeight;
    // checks bottom && top
    return top <= clientHeight && bottom >= 0;
  };

  /**
   * Utility to determine if an `HTMLElement`
   * is fully visible in the viewport.
   *
   * @param {HTMLElement | Element} element target
   * @return {boolean} the query result
   */
  var isElementInViewport = function (element) {
    var ref = getBoundingClientRect(element, true);
    var top = ref.top;
    var left = ref.left;
    var bottom = ref.bottom;
    var right = ref.right;
    var ref$1 = getDocumentElement(element);
    var clientWidth = ref$1.clientWidth;
    var clientHeight = ref$1.clientHeight;
    return (
      top >= 0 && left >= 0
      && bottom <= clientHeight
      && right <= clientWidth
    );
  };

  /**
   * Checks if an object is an `Array` in which all items are `Element`.
   *
   * @param {any} object the target object
   * @returns {boolean} the query result
   */
  var isElementsArray = function (object) { return Array.isArray(object)
    && object.every(function (el) { return [HTMLElement, Element].some(function (x) { return el instanceof x; }); }); };

  /**
   * Checks if an object is an `HTMLCollection`.
   *
   * @param {any} object the target object
   * @returns {boolean} the query result
   */
  var isHTMLCollection = function (object) { return object instanceof HTMLCollection; };

  /**
   * Checks if an element is an `HTMLElement`.
   *
   * @param {any} element the target object
   * @returns {boolean} the query result
   */
  var isHTMLElement = function (element) { return element instanceof HTMLElement; };

  /**
   * Check if a target element is an `<img>`.
   * @param {any} element the target element
   * @returns {boolean} the query result
   */
  var isHTMLImageElement = function (element) { return element instanceof HTMLImageElement; };

  /**
   * Checks if an element is an `<svg>` (or any type of SVG element),
   * `<img>` or `<video>`.
   *
   * *Tooltip* / *Popover* works different with media elements.
   * @param {any} element the target element
   * @returns {boolean} the query result
   */
  var isMedia = function (element) { return element
    && [SVGElement, HTMLImageElement, HTMLVideoElement]
      .some(function (mediaType) { return element instanceof mediaType; }); };

  /**
   * Checks if an object is a `Node`.
   *
   * @param {any} node the target object
   * @returns {boolean} the query result
   */
  var isNode = function (node) { return node instanceof Node; };

  /**
   * Checks if an object is a `NodeList`.
   *
   * @param {any} object the target object
   * @returns {boolean} the query result
   */
  var isNodeList = function (object) { return object instanceof NodeList; };

  /**
   * Checks if a page is Right To Left.
   * @param {(HTMLElement | Element)=} node the target
   * @returns {boolean} the query result
   */
  var isRTL = function (node) { return getDocumentElement(node).dir === 'rtl'; };

  /**
   * Shortcut for `typeof SOMETHING === string` static method.
   *
   * @param  {any} str array-like iterable object
   * @returns {boolean} the query result
   */
  var isString = function (str) { return typeof str === 'string'; };

  /**
   * Check if an element is an `<svg>` or any other SVG element.
   * @param {any} element the target element
   * @returns {boolean} the query result
   */
  var isSVGElement = function (element) { return element instanceof SVGElement; };

  /**
   * Check if a target element is a `<table>`, `<td>` or `<th>`.
   * @param {any} element the target element
   * @returns {boolean} the query result
   */
  var isTableElement = function (element) { return ['TABLE', 'TD', 'TH'].includes(element.tagName); };

  /**
   * Check if a target node is `window`.
   *
   * @param {any} node the target node
   * @returns {boolean} the query result
   */
  function isWindow(node) {
    return node instanceof Window;
  }

  /**
   * Shortcut for `HTMLElement.closest` method which also works
   * with children of `ShadowRoot`. The order of the parameters
   * is intentional since they're both required.
   *
   * @see https://stackoverflow.com/q/54520554/803358
   *
   * @param {HTMLElement | Element} element Element to look into
   * @param {string} selector the selector name
   * @return {(HTMLElement | Element)?} the query result
   */
  function closest(element, selector) {
    return element ? (element.closest(selector)
      // @ts-ignore -- break out of `ShadowRoot`
      || closest(element.getRootNode().host, selector)) : null;
  }

  /**
   * Returns an `Array` of `Node` elements that are registered as
   * `CustomElement`.
   * @see https://stackoverflow.com/questions/27334365/how-to-get-list-of-registered-custom-elements
   *
   * @param {(HTMLElement | Element | Node | Document)=} parent parent to look into
   * @returns {(HTMLElement | Element)[]} the query result
   */
  function getCustomElements(parent) {
    var lookUp = parent && parentNodes.some(function (x) { return parent instanceof x; })
      ? parent : getDocument();
    // @ts-ignore -- look inside `shadowRoot` node too
    return [].concat( lookUp.querySelectorAll('*') ).filter(isCustomElement);
  }

  /**
   * A shortcut for `(document|Element).querySelectorAll`.
   *
   * @param {string} selector the input selector
   * @param {(HTMLElement | Element | Document | Node)=} parent optional node to look into
   * @return {NodeListOf<HTMLElement | Element>} the query result
   */
  function querySelectorAll(selector, parent) {
    var lookUp = parent && parentNodes
      .some(function (x) { return parent instanceof x; }) ? parent : getDocument();
    // @ts-ignore -- `ShadowRoot` is also a node
    return lookUp.querySelectorAll(selector);
  }

  /**
   * Shortcut for `HTMLElement.getElementsByTagName` method. Some `Node` elements
   * like `ShadowRoot` do not support `getElementsByTagName`.
   *
   * @param {string} selector the tag name
   * @param {(HTMLElement | Element | Document)=} parent optional Element to look into
   * @return {HTMLCollectionOf<HTMLElement | Element>} the 'HTMLCollection'
   */
  function getElementsByTagName(selector, parent) {
    var lookUp = parent && parentNodes
      .some(function (x) { return parent instanceof x; }) ? parent : getDocument();
    return lookUp.getElementsByTagName(selector);
  }

  /**
   * Shortcut for `HTMLElement.getElementsByClassName` method. Some `Node` elements
   * like `ShadowRoot` do not support `getElementsByClassName`.
   *
   * @param {string} selector the class name
   * @param {(HTMLElement | Element | Document)=} parent optional Element to look into
   * @return {HTMLCollectionOf<HTMLElement | Element>} the 'HTMLCollection'
   */
  function getElementsByClassName(selector, parent) {
    var lookUp = parent && parentNodes.some(function (x) { return parent instanceof x; })
      ? parent : getDocument();
    return lookUp.getElementsByClassName(selector);
  }

  var version = "0.3.0alpha13";

  // @ts-ignore

  /**
   * A global namespace for library version.
   * @type {string}
   */
  var Version = version;

  // strings

  var SHORTER = {
    ariaChecked: ariaChecked,
    ariaDescribedBy: ariaDescribedBy,
    ariaExpanded: ariaExpanded,
    ariaHidden: ariaHidden,
    ariaLabel: ariaLabel,
    ariaLabelledBy: ariaLabelledBy,
    ariaModal: ariaModal,
    ariaPressed: ariaPressed,
    ariaSelected: ariaSelected,
    nativeEvents: nativeEvents,
    abortEvent: abortEvent,
    blurEvent: blurEvent,
    moveEvent: moveEvent,
    changeEvent: changeEvent,
    errorEvent: errorEvent,
    resetEvent: resetEvent,
    resizeEvent: resizeEvent,
    scrollEvent: scrollEvent,
    submitEvent: submitEvent,
    loadEvent: loadEvent,
    unloadEvent: unloadEvent,
    readystatechangeEvent: readystatechangeEvent,
    beforeunloadEvent: beforeunloadEvent,
    orientationchangeEvent: orientationchangeEvent,
    contextmenuEvent: contextmenuEvent,
    DOMContentLoadedEvent: DOMContentLoadedEvent,
    DOMMouseScrollEvent: DOMMouseScrollEvent,
    selectEvent: selectEvent,
    selectendEvent: selectendEvent,
    selectstartEvent: selectstartEvent,
    mouseClickEvents: mouseClickEvents,
    mouseclickEvent: mouseclickEvent,
    mousedblclickEvent: mousedblclickEvent,
    mousedownEvent: mousedownEvent,
    mouseupEvent: mouseupEvent,
    mousehoverEvent: mousehoverEvent,
    mouseHoverEvents: mouseHoverEvents,
    mouseenterEvent: mouseenterEvent,
    mouseleaveEvent: mouseleaveEvent,
    mouseinEvent: mouseinEvent,
    mouseoutEvent: mouseoutEvent,
    mousemoveEvent: mousemoveEvent,
    mousewheelEvent: mousewheelEvent,
    mouseSwipeEvents: mouseSwipeEvents,
    touchEvents: touchEvents,
    touchstartEvent: touchstartEvent,
    touchmoveEvent: touchmoveEvent,
    touchcancelEvent: touchcancelEvent,
    touchendEvent: touchendEvent,
    pointercancelEvent: pointercancelEvent,
    pointerdownEvent: pointerdownEvent,
    pointerleaveEvent: pointerleaveEvent,
    pointermoveEvent: pointermoveEvent,
    pointerupEvent: pointerupEvent,
    focusEvents: focusEvents,
    focusEvent: focusEvent,
    focusinEvent: focusinEvent,
    focusoutEvent: focusoutEvent,
    gesturechangeEvent: gesturechangeEvent,
    gestureendEvent: gestureendEvent,
    gesturestartEvent: gesturestartEvent,
    bezierEasings: bezierEasings,
    animationDuration: animationDuration$1,
    animationDurationLegacy: animationDuration,
    animationDelay: animationDelay$1,
    animationDelayLegacy: animationDelay,
    animationName: animationName$1,
    animationNameLegacy: animationName,
    animationEndEvent: animationEndEvent$1,
    animationEndEventLegacy: animationEndEvent,
    transitionDuration: transitionDuration$1,
    transitionDurationLegacy: transitionDuration,
    transitionDelay: transitionDelay$1,
    transitionDelayLegacy: transitionDelay,
    transitionEndEvent: transitionEndEvent$1,
    transitionEndEventLegacy: transitionEndEvent,
    transitionProperty: transitionProperty$1,
    transitionPropertyLegacy: transitionProperty,
    isMobile: isMobile,
    isApple: isApple,
    isFirefox: isFirefox,
    support3DTransform: support3DTransform,
    supportPassive: supportPassive,
    supportTransform: supportTransform,
    supportTouch: supportTouch,
    supportAnimation: supportAnimation,
    supportTransition: supportTransition,
    addEventListener: addEventListener,
    removeEventListener: removeEventListener,
    keyboardEventKeys: keyboardEventKeys,
    keydownEvent: keydownEvent,
    keypressEvent: keypressEvent,
    keyupEvent: keyupEvent,
    keyAlt: keyAlt,
    keyArrowDown: keyArrowDown,
    keyArrowLeft: keyArrowLeft,
    keyArrowRight: keyArrowRight,
    keyArrowUp: keyArrowUp,
    keyBackspace: keyBackspace,
    keyCapsLock: keyCapsLock,
    keyControl: keyControl,
    keyDelete: keyDelete,
    keyEnter: keyEnter,
    keyEscape: keyEscape,
    keyInsert: keyInsert,
    keyMeta: keyMeta,
    keyPause: keyPause,
    keyScrollLock: keyScrollLock,
    keyShift: keyShift,
    keySpace: keySpace,
    keyTab: keyTab,
    offsetHeight: offsetHeight,
    offsetWidth: offsetWidth,
    scrollHeight: scrollHeight,
    scrollWidth: scrollWidth,
    userAgentData: userAgentData,
    userAgent: userAgent,
    addClass: addClass,
    removeClass: removeClass,
    hasClass: hasClass,
    on: on,
    off: off,
    one: one,
    dispatchEvent: dispatchEvent,
    distinct: distinct,
    Data: Data,
    Timer: Timer,
    getInstance: getInstance,
    emulateAnimationEnd: emulateAnimationEnd$1,
    emulateAnimationEndLegacy: emulateAnimationEnd,
    emulateTransitionEnd: emulateTransitionEnd$1,
    emulateTransitionEndLegacy: emulateTransitionEnd,
    isElementInScrollRange: isElementInScrollRange,
    isElementInViewport: isElementInViewport,
    passiveHandler: passiveHandler$1,
    passiveHandlerLegacy: passiveHandler,
    getElementAnimationDuration: getElementAnimationDuration$1,
    getElementAnimationDurationLegacy: getElementAnimationDuration,
    getElementAnimationDelay: getElementAnimationDelay$1,
    getElementAnimationDelayLegacy: getElementAnimationDelay,
    getElementTransitionDuration: getElementTransitionDuration$1,
    getElementTransitionDurationLegacy: getElementTransitionDuration,
    getElementTransitionDelay: getElementTransitionDelay$1,
    getElementTransitionDelayLegacy: getElementTransitionDelay,
    getNodeScroll: getNodeScroll,
    getParentNode: getParentNode,
    getRectRelativeToOffsetParent: getRectRelativeToOffsetParent,
    getWindow: getWindow,
    isArray: isArray,
    isString: isString,
    isCustomElement: isCustomElement,
    isElement: isElement,
    isNode: isNode,
    isHTMLElement: isHTMLElement,
    isHTMLImageElement: isHTMLImageElement,
    isSVGElement: isSVGElement,
    isNodeList: isNodeList,
    isHTMLCollection: isHTMLCollection,
    isScaledElement: isScaledElement,
    isTableElement: isTableElement,
    isShadowRoot: isShadowRoot,
    isDocument: isDocument,
    isElementsArray: isElementsArray,
    isWindow: isWindow,
    isMedia: isMedia,
    isRTL: isRTL,
    elementNodes: elementNodes,
    parentNodes: parentNodes,
    closest: closest,
    querySelector: querySelector,
    getCustomElements: getCustomElements,
    querySelectorAll: querySelectorAll,
    getElementsByClassName: getElementsByClassName,
    getElementsByTagName: getElementsByTagName,
    normalizeValue: normalizeValue,
    normalizeOptions: normalizeOptions,
    tryWrapper: tryWrapper,
    reflow: reflow,
    noop: noop,
    focus: focus,
    ArrayFrom: ArrayFrom,
    Float32ArrayFrom: Float32ArrayFrom,
    Float64ArrayFrom: Float64ArrayFrom,
    ObjectAssign: ObjectAssign,
    ObjectKeys: ObjectKeys,
    ObjectValues: ObjectValues,
    getBoundingClientRect: getBoundingClientRect,
    getDocument: getDocument,
    getDocumentBody: getDocumentBody,
    getDocumentElement: getDocumentElement,
    getDocumentHead: getDocumentHead,
    getElementStyle: getElementStyle,
    setElementStyle: setElementStyle,
    hasAttribute: hasAttribute,
    hasAttributeNS: hasAttributeNS,
    getAttribute: getAttribute,
    getAttributeNS: getAttributeNS,
    setAttribute: setAttribute,
    setAttributeNS: setAttributeNS,
    removeAttribute: removeAttribute,
    removeAttributeNS: removeAttributeNS,
    Version: Version,
  };

  return SHORTER;

}));
