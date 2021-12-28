/*!
* shorter-js v0.2.23 (https://github.com/thednp/shorter-js)
* Copyright 2019-2021 © dnp_theme
* Licensed under MIT (https://github.com/thednp/shorter-js/blob/master/LICENSE)
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.SHORTER = factory());
}(this, (function () { 'use strict';

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
  var animationDuration = 'webkitAnimation' in document.head.style ? 'webkitAnimationDuration' : 'animationDuration';

  /**
   * A global namespace for 'animationDelay' string.
   * @type {string}
   */
  var animationDelay = 'webkitAnimation' in document.head.style ? 'webkitAnimationDelay' : 'animationDelay';

  /**
   * A global namespace for 'animationName' string.
   * @type {string}
   */
  var animationName = 'webkitAnimation' in document.head.style ? 'webkitAnimationName' : 'animationName';

  /**
   * A global namespace for 'animationend' string.
   * @type {string}
   */
  var animationEndEvent = 'webkitAnimation' in document.head.style ? 'webkitAnimationEnd' : 'animationend';

  /**
   * A global namespace for 'transitionDuration' string.
   * @type {string}
   */
  var transitionDuration = 'webkitTransition' in document.head.style ? 'webkitTransitionDuration' : 'transitionDuration';

  /**
   * A global namespace for 'transitionDelay' string.
   * @type {string}
   */
  var transitionDelay = 'webkitTransition' in document.head.style ? 'webkitTransitionDelay' : 'transitionDelay';

  /**
   * A global namespace for 'transitionend' string.
   * @type {string}
   */
  var transitionEndEvent = 'webkitTransition' in document.head.style ? 'webkitTransitionEnd' : 'transitionend';

  /**
   * A global namespace for 'transitionProperty' string.
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

  var mobileBrands = /iPhone|iPad|iPod|Android/i;
  var userAgentStr = 'userAgentData';

  var isMobileCheck = false;

  if (navigator[userAgentStr]) {
    isMobileCheck = navigator[userAgentStr].brands.some(function (x) { return mobileBrands.test(x.brand); });
  } else {
    isMobileCheck = mobileBrands.test(navigator.userAgent);
  }

  /**
   * A global namespace for mobile detection.
   * @type {boolean}
   */
  var isMobile = isMobileCheck;

  // @ts-ignore
  var userAgentData = navigator.userAgentData;
  var appleBrands = /(iPhone|iPod|iPad)/;

  /**
   * A global namespace for Apple browsers.
   * @type {boolean}
   */
  var isApple = !userAgentData ? appleBrands.test(navigator.userAgent)
    : userAgentData.brands.some(function (x) { return appleBrands.test(x.brand); });

  /**
   * A global namespace for CSS3 3D transform support.
   * @type {boolean}
   */
  var support3DTransform = 'webkitPerspective' in document.head.style || 'perspective' in document.head.style;

  /**
   * A global namespace for passive events support.
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
      document[addEventListener]('DOMContentLoaded', function wrap() {
        document[removeEventListener]('DOMContentLoaded', wrap, opts);
      }, opts);
    } catch (e) {
      throw Error('Passive events are not supported');
    }

    return result;
  })();

  /**
   * A global namespace for CSS3 transform support.
   * @type {boolean}
   */
  var supportTransform = 'webkitTransform' in document.head.style || 'transform' in document.head.style;

  /**
   * A global namespace for touch events support.
   * @type {boolean}
   */
  var supportTouch = 'ontouchstart' in window || 'msMaxTouchPoints' in navigator;

  /**
   * A global namespace for CSS3 animation support.
   * @type {boolean}
   */
  var supportAnimation = 'webkitAnimation' in document.head.style || 'animation' in document.head.style;

  /**
   * A global namespace for CSS3 transition support.
   * @type {boolean}
   */
  var supportTransition = 'webkitTransition' in document.head.style || 'transition' in document.head.style;

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
   * @param {Element} element event.target
   * @param {string} eventName event.type
   * @param {EventListener} handler callback
   * @param {EventListenerOptions | boolean | null} options other event options
   */
  function on(element, eventName, handler, options) {
    var ops = options || false;
    element.addEventListener(eventName, handler, ops);
  }

  /**
   * Remove eventListener from Element
   *
   * @param {Element} element event.target
   * @param {string} eventName event.type
   * @param {EventListener} handler callback
   * @param {EventListenerOptions | boolean | null} options other event options
   */
  function off(element, eventName, handler, options) {
    var ops = options || false;
    element.removeEventListener(eventName, handler, ops);
  }

  /**
   * Add an eventListener to Element
   * and remove it once callback is called.
   *
   * @param {Element} element event.target
   * @param {string} eventName event.type
   * @param {EventListener} handler callback
   * @param {EventListenerOptions | boolean | null} options other event options
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
   * Checks if an object is an `Element`.
   *
   * @param {any} element the target object
   * @returns {boolean} the query result
   */
  function isElement(element) {
    return element instanceof Element;
  }

  /**
   * Utility to check if target is typeof `Element`
   * or find one that matches a selector.
   *
   * @param {Element | string} selector the input selector or target element
   * @param {Element=} parent optional Element to look into
   * @return {Element?} the Element or `querySelector` result
   */
  function querySelector(selector, parent) {
    var lookUp = parent && isElement(parent) ? parent : document;
    // @ts-ignore -- `isElement` is just as good
    return isElement(selector) ? selector : lookUp.querySelector(selector);
  }

  var TimeCache = new Map();

  var Timer = {
    /**
     * Sets a new timeout timer for an element, or element -> key association.
     * @param {Element | string} target target element
     * @param {ReturnType<TimerHandler>} callback the callback
     * @param {number} delay the execution delay
     * @param {string=} key a unique
     */
    set: function (target, callback, delay, key) {
      var element = querySelector(target);
      if (!isElement(element)) { return; }

      if (typeof key === 'string' && key.length) {
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
     * @param {Element | string} target target element
     * @param {string=} key a unique
     * @returns {Map<Element, TimerHandler>?} the timer
     */
    get: function (target, key) {
      var element = querySelector(target);
      if (!isElement(element)) { return null; }

      if (typeof key === 'string' && key.length) {
        if (!TimeCache.has(element)) {
          TimeCache.set(element, new Map());
        }
        var keyTimers = TimeCache.get(element);
        if (keyTimers.has(key)) {
          return keyTimers.get(key);
        }
      } else if (TimeCache.has(element)) {
        return TimeCache.get(element);
      }
      return null;
    },

    /**
     * Clears the element's timer.
     * @param {Element} target target element
     * @param {string=} key a unique
     */
    clear: function (target, key) {
      var element = querySelector(target);

      if (!isElement(element) || !TimeCache.has(element)) { return; }

      if (typeof key === 'string' && key.length) {
        var keyTimers = TimeCache.get(element);

        if (keyTimers && keyTimers.has(key)) {
          clearTimeout(keyTimers.get(key));
          keyTimers.delete(key);
        }
      } else if (TimeCache.has(element)) {
        clearTimeout(TimeCache.get(element));
        TimeCache.delete(element);
      }
    },
  };

  var componentData = new Map();
  /**
   * An interface for web components background data.
   * @see https://github.com/thednp/bootstrap.native/blob/master/src/components/base-component.js
   */
  var Data = {
    /**
     * Sets web components data.
     * @param {Element | string} element target element
     * @param {string} component the component's name or a unique key
     * @param {any} instance the component instance
     */
    set: function (element, component, instance) {
      var ELEMENT = querySelector(element);
      if (!isElement(ELEMENT)) { return; }

      if (!componentData.has(component)) {
        componentData.set(component, new Map());
      }

      var instanceMap = componentData.get(component);
      instanceMap.set(ELEMENT, instance);
    },

    /**
     * Returns all instances for specified component.
     * @param {string} component the component's name or a unique key
     * @returns {any?} all the component instances
     */
    getAllFor: function (component) {
      if (componentData.has(component)) {
        return componentData.get(component);
      }
      return null;
    },

    /**
     * Returns the instance associated with the target.
     * @param {Element | string} element target element
     * @param {string} component the component's name or a unique key
     * @returns {any?} the instance
     */
    get: function (element, component) {
      var ELEMENT = querySelector(element);

      var allForC = Data.getAllFor(component);
      if (allForC && isElement(ELEMENT) && allForC.has(ELEMENT)) {
        return allForC.get(ELEMENT);
      }
      return null;
    },

    /**
     * Removes web components data.
     * @param {Element} element target element
     * @param {string} component the component's name or a unique key
     */
    remove: function (element, component) {
      if (!componentData.has(component)) { return; }

      var instanceMap = componentData.get(component);
      instanceMap.delete(element);

      if (instanceMap.size === 0) {
        componentData.delete(component);
      }
    },
  };

  /**
   * An alias for `Data.get()`.
   * @param {Element | string} element target element
   * @param {string} component the component's name or a unique key
   * @returns {any} the request result
   */
  var getInstance = function (element, component) { return Data.get(element, component); };

  /**
   * Utility to get the computed `animationDelay`
   * from Element in miliseconds.
   *
   * @param {Element} element target
   * @return {number} the value in miliseconds
   */
  function getElementAnimationDelay(element) {
    var computedStyle = getComputedStyle(element);
    var propertyValue = computedStyle[animationName];
    var durationValue = computedStyle[animationDelay];
    var durationScale = durationValue.includes('ms') ? 1 : 1000;
    var duration = supportAnimation && propertyValue && propertyValue !== 'none'
      ? parseFloat(durationValue) * durationScale : 0;

    return !Number.isNaN(duration) ? duration : 0;
  }

  /**
   * Utility to get the computed `animationDuration`
   * from Element in miliseconds.
   *
   * @param {Element} element target
   * @return {number} the value in miliseconds
   */
  function getElementAnimationDuration(element) {
    var computedStyle = getComputedStyle(element);
    var propertyValue = computedStyle[animationName];
    var durationValue = computedStyle[animationDuration];
    var durationScale = durationValue.includes('ms') ? 1 : 1000;
    var duration = supportAnimation && propertyValue && propertyValue !== 'none'
      ? parseFloat(durationValue) * durationScale : 0;

    return !Number.isNaN(duration) ? duration : 0;
  }

  /**
   * Utility to make sure callbacks are consistently
   * called when animation ends.
   *
   * @param {Element} element target
   * @param {EventListener} handler `animationend` callback
   */
  function emulateAnimationEnd(element, handler) {
    var called = 0;
    var endEvent = new Event(animationEndEvent);
    var duration = getElementAnimationDuration(element);
    var delay = getElementAnimationDelay(element);

    if (duration) {
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
   * @param {Element} element target
   * @return {number} the value in miliseconds
   */
  function getElementTransitionDelay(element) {
    var computedStyle = getComputedStyle(element);
    var propertyValue = computedStyle[transitionProperty];
    var delayValue = computedStyle[transitionDelay];
    var delayScale = delayValue.includes('ms') ? 1 : 1000;
    var duration = supportTransition && propertyValue && propertyValue !== 'none'
      ? parseFloat(delayValue) * delayScale : 0;

    return !Number.isNaN(duration) ? duration : 0;
  }

  /**
   * Utility to get the computed `transitionDuration`
   * from Element in miliseconds.
   *
   * @param {Element} element target
   * @return {number} the value in miliseconds
   */
  function getElementTransitionDuration(element) {
    var computedStyle = getComputedStyle(element);
    var propertyValue = computedStyle[transitionProperty];
    var durationValue = computedStyle[transitionDuration];
    var durationScale = durationValue.includes('ms') ? 1 : 1000;
    var duration = supportTransition && propertyValue && propertyValue !== 'none'
      ? parseFloat(durationValue) * durationScale : 0;

    return !Number.isNaN(duration) ? duration : 0;
  }

  /**
   * Utility to make sure callbacks are consistently
   * called when transition ends.
   *
   * @param {Element} element target
   * @param {EventListener} handler `transitionend` callback
   */
  function emulateTransitionEnd(element, handler) {
    var called = 0;
    var endEvent = new Event(transitionEndEvent);
    var duration = getElementTransitionDuration(element);
    var delay = getElementTransitionDelay(element);

    if (duration) {
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
   * Utility to determine if an `Element`
   * is partially visible in viewport.
   *
   * @param {Element} element target
   * @return {boolean} Boolean
   */
  function isElementInScrollRange(element) {
    var bcr = element.getBoundingClientRect();
    var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    return bcr.top <= viewportHeight && bcr.bottom >= 0; // bottom && top
  }

  /**
   * Utility to determine if an `Element`
   * is fully visible in the viewport.
   *
   * @param {Element} element target
   * @return {boolean} Boolean
   */
  function isElementInViewport(element) {
    var bcr = element.getBoundingClientRect();
    return (
      bcr.top >= 0
      && bcr.left >= 0
      && bcr.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      && bcr.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  /**
   * Checks if an element is an `<svg>`, `<img>` or `<video>`.
   * *Tooltip* / *Popover* works different with media elements.
   * @param {any} element the target element
   * @returns {boolean} the query result
   */
  function isMedia(element) {
    return [SVGElement, HTMLImageElement, HTMLVideoElement]
      .some(function (mediaType) { return element instanceof mediaType; });
  }

  /**
   * Checks if a page is Right To Left.
   * @returns {boolean} the query result
   */
  var isRTL = function () { return document.documentElement.dir === 'rtl'; };

  // general event options

  /**
   * A global namespace for most scroll event listeners.
   */
  var passiveHandler = supportPassive ? { passive: true } : false;

  /**
   * The raw value or a given component option.
   *
   * @typedef {string | Element | Function | number | boolean | null} niceValue
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

    // string / function / Element / object
    return value;
  }

  /**
   * Shortcut for `Object.keys()` static method.
   * @param  {Record<string, any>} obj a target object
   * @returns {string[]}
   */
  var ObjectKeys = function (obj) { return Object.keys(obj); };

  /**
   * Utility to normalize component options
   *
   * @param {Element} element target
   * @param {Record<string, any>} defaultOps component default options
   * @param {Record<string, any>} inputOps component instance options
   * @param {string=} ns component namespace
   * @return {Record<string, any>} normalized component options object
   */
  function normalizeOptions(element, defaultOps, inputOps, ns) {
    // @ts-ignore -- usually our `Element` is `HTMLElement` as well
    var data = Object.assign({}, element.dataset);
    var normalOps = {};
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
   * Utility to force re-paint of an `Element` target.
   *
   * @param {Element | HTMLElement} element is the target
   * @return {number} the `Element.offsetHeight` value
   */
  function reflow(element) {
    // @ts-ignore -- our `Element` is always an `HTMLElement`
    return element.offsetHeight;
  }

  /**
   * Shortcut for `Array.from()` static method.
   *
   * @param  {any[] | HTMLCollection | NodeList} arr array-like iterable object
   * @returns {Array}
   */
  var ArrayFrom = function (arr) { return Array.from(arr); };

  /**
   * Shortcut for `Float32Array.from()` static method.
   * @param  {any[] | HTMLCollection | NodeList} arr array-like iterable object
   * @returns {Float32Array}
   */
  var Float32ArrayFrom = function (arr) {
    var array = Array.from(arr);
    return Float32Array.from(array);
  };

  /**
   * Shortcut for `Float64Array.from()` static method.
   * @param  {any[] | HTMLCollection | NodeList} arr array-like iterable object
   * @returns {Float64Array}
   */
  var Float64ArrayFrom = function (arr) {
    var array = Array.from(arr);
    return Float64Array.from(array);
  };

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
   * Shortcut for `window.getComputedStyle(element).propertyName`
   * static method.
   * * If `element` parameter is not an `Element`, `getComputedStyle`
   * throws a `ReferenceError`.
   * * If no property is defined, the entire `CSSStyleDeclaration`
   * instance is returned.
   *
   * @param {Element} element target
   * @param {string=} property the css property
   * @return {string} the css property value
   */
  function getElementStyle(element, property) {
    var computedStyle = getComputedStyle(element);

    return property && property in computedStyle
      ? computedStyle[property]
      : computedStyle;
  }

  /**
   * Shortcut for `Element.getAttribute()` method.
   * @param  {Element} element target element
   * @param  {string} attribute attribute name
   */
  var getAttribute = function (element, attribute) { return element.getAttribute(attribute); };

  /**
   * Shortcut for `Element.setAttribute()` method.
   * @param  {Element} element target element
   * @param  {string} attribute attribute name
   * @param  {string} value attribute value
   */
  var setAttribute = function (element, attribute, value) { return element.setAttribute(attribute, value); };

  /**
   * Shortcut for `Element.removeAttribute()` method.
   * @param  {Element} element target element
   * @param  {string} attribute attribute name
   */
  var removeAttribute = function (element, attribute) { return element.removeAttribute(attribute); };

  /**
   * Shortcut for `Array.isArray()` static method.
   *
   * @param  {any} arr array-like iterable object
   * @returns {boolean} the query result
   */
  var isArray = function (arr) { return Array.isArray(arr); };

  /**
   * Checks if an element is an `HTMLElement`.
   *
   * @param {any} element the target object
   * @returns {boolean} the query result
   */
  function isHTMLElement(element) {
    return element instanceof HTMLElement;
  }

  /**
   * Checks if an object is an `HTMLCollection`.
   *
   * @param {any} object the target object
   * @returns {boolean} the query result
   */
  function isHTMLCollection(object) {
    return object instanceof HTMLCollection;
  }

  /**
   * Checks if an object is a `NodeList`.
   *
   * @param {any} object the target object
   * @returns {boolean} the query result
   */
  function isNodeList(object) {
    return object instanceof NodeList;
  }

  /**
   * Checks if an object is an `Array` in which all items are `Element`.
   *
   * @param {any} object the target object
   * @returns {boolean} the query result
   */
  function isElementsArray(object) {
    return Array.isArray(object) && object.every(function (el) { return isElement(el); });
  }

  /**
   * Utility to check if target is typeof `Element`
   * or find one that matches a selector.
   *
   * @deprecated
   *
   * @param {Element | string} selector the input selector or target element
   * @param {Element=} parent optional Element to look into
   * @return {Element?} the Element or `querySelector` result
   */
  function queryElement(selector, parent) {
    return querySelector(selector, parent);
  }

  /**
   * A shortcut for `(document|Element).querySelectorAll`.
   *
   * @param {string} selector the input selector
   * @param {ParentNode=} parent optional Element to look into
   * @return {NodeList} the query result
   */
  function querySelectorAll(selector, parent) {
    var lookUp = parent && isElement(parent) ? parent : document;
    return lookUp.querySelectorAll(selector);
  }

  /**
   * Shortcut for `Element.getElementsByTagName` method.
   *
   * @param {string} selector the tag name
   * @param {Element=} parent optional Element to look into
   * @return {HTMLCollection} the 'HTMLCollection'
   */
  function getElementsByTagName(selector, parent) {
    var lookUp = parent && isElement(parent) ? parent : document;
    return lookUp.getElementsByTagName(selector);
  }

  /**
   * Shortcut for `Element.getElementsByClassName` method.
   *
   * @param {string} selector the class name
   * @param {Element=} parent optional Element to look into
   * @return {HTMLCollection} the 'HTMLCollection'
   */
  function getElementsByClassName(selector, parent) {
    var lookUp = parent && isElement(parent) ? parent : document;
    return lookUp.getElementsByClassName(selector);
  }

  var version = "0.2.23";

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
    animationDuration: animationDuration,
    animationDelay: animationDelay,
    animationName: animationName,
    animationEndEvent: animationEndEvent,
    transitionDuration: transitionDuration,
    transitionDelay: transitionDelay,
    transitionEndEvent: transitionEndEvent,
    transitionProperty: transitionProperty,
    isMobile: isMobile,
    isApple: isApple,
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
    addClass: addClass,
    removeClass: removeClass,
    hasClass: hasClass,
    on: on,
    off: off,
    one: one,
    Data: Data,
    Timer: Timer,
    getInstance: getInstance,
    emulateAnimationEnd: emulateAnimationEnd,
    emulateTransitionEnd: emulateTransitionEnd,
    isElementInScrollRange: isElementInScrollRange,
    isElementInViewport: isElementInViewport,
    passiveHandler: passiveHandler,
    getElementAnimationDuration: getElementAnimationDuration,
    getElementAnimationDelay: getElementAnimationDelay,
    getElementTransitionDuration: getElementTransitionDuration,
    getElementTransitionDelay: getElementTransitionDelay,
    isArray: isArray,
    isElement: isElement,
    isHTMLElement: isHTMLElement,
    isNodeList: isNodeList,
    isHTMLCollection: isHTMLCollection,
    isElementsArray: isElementsArray,
    isMedia: isMedia,
    isRTL: isRTL,
    queryElement: queryElement,
    querySelector: querySelector,
    querySelectorAll: querySelectorAll,
    getElementsByClassName: getElementsByClassName,
    getElementsByTagName: getElementsByTagName,
    normalizeValue: normalizeValue,
    normalizeOptions: normalizeOptions,
    tryWrapper: tryWrapper,
    reflow: reflow,
    ArrayFrom: ArrayFrom,
    Float32ArrayFrom: Float32ArrayFrom,
    Float64ArrayFrom: Float64ArrayFrom,
    ObjectAssign: ObjectAssign,
    ObjectKeys: ObjectKeys,
    ObjectValues: ObjectValues,
    getElementStyle: getElementStyle,
    getAttribute: getAttribute,
    setAttribute: setAttribute,
    removeAttribute: removeAttribute,
    Version: Version,
  };

  return SHORTER;

})));
