/*!
* shorter-js v0.2.25alpha1 (https://github.com/thednp/shorter-js)
* Copyright 2019-2022 © dnp_theme
* Licensed under MIT (https://github.com/thednp/shorter-js/blob/master/LICENSE)
*/
/**
 * A global namespace for aria-checked.
 * @type {string}
 */
const ariaChecked = 'aria-checked';

/**
 * A global namespace for aria-describedby.
 * @type {string}
 */
const ariaDescribedBy = 'aria-describedby';

/**
 * A global namespace for aria-expanded.
 * @type {string}
 */
const ariaExpanded = 'aria-expanded';

/**
 * A global namespace for aria-hidden.
 * @type {string}
 */
const ariaHidden = 'aria-hidden';

/**
 * A global namespace for aria-label.
 * @type {string}
 */
const ariaLabel = 'aria-label';

/**
 * A global namespace for aria-labelledby.
 * @type {string}
 */
const ariaLabelledBy = 'aria-labelledby';

/**
 * A global namespace for aria-modal.
 * @type {string}
 */
const ariaModal = 'aria-modal';

/**
 * A global namespace for aria-pressed.
 * @type {string}
 */
const ariaPressed = 'aria-pressed';

/**
 * A global namespace for aria-selected.
 * @type {string}
 */
const ariaSelected = 'aria-selected';

/**
 * A global namespace for all browser native events.
 * @type {string[]}
 */
const nativeEvents = [
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
  'scroll',
];

/**
 * A global namespace for `abort` event.
 * @type {string}
 */
const abortEvent = 'abort';

/**
 * A global namespace for `blur` event.
 * @type {string}
 */
const blurEvent = 'blur';

/**
 * A global namespace for `move` event.
 * @type {string}
 */
const moveEvent = 'move';

/**
 * A global namespace for `change` event.
 * @type {string}
 */
const changeEvent = 'change';

/**
 * A global namespace for `error` event.
 * @type {string}
 */
const errorEvent = 'error';

/**
 * A global namespace for `reset` event.
 * @type {string}
 */
const resetEvent = 'reset';

/**
 * A global namespace for `resize` event.
 * @type {string}
 */
const resizeEvent = 'resize';

/**
 * A global namespace for `scroll` event.
 * @type {string}
 */
const scrollEvent = 'scroll';

/**
 * A global namespace for `submit` event.
 * @type {string}
 */
const submitEvent = 'submit';

/**
 * A global namespace for `load` event.
 * @type {string}
 */
const loadEvent = 'load';

/**
 * A global namespace for `unload` event.
 * @type {string}
 */
const unloadEvent = 'unload';

/**
 * A global namespace for `readystatechange` event.
 * @type {string}
 */
const readystatechangeEvent = 'readystatechange';

/**
 * A global namespace for `beforeunload` event.
 * @type {string}
 */
const beforeunloadEvent = 'beforeunload';

/**
 * A global namespace for `orientationchange` event.
 * @type {string}
 */
const orientationchangeEvent = 'orientationchange';

/**
 * A global namespace for `contextmenu` event.
 * @type {string}
 */
const contextmenuEvent = 'contextmenu';

/**
 * A global namespace for `DOMContentLoaded` event.
 * @type {string}
 */
const DOMContentLoadedEvent = 'DOMContentLoaded';

/**
 * A global namespace for `DOMMouseScroll` event.
 * @type {string}
 */
const DOMMouseScrollEvent = 'DOMMouseScroll';

/**
 * A global namespace for `select` event.
 * @type {string}
 */
const selectEvent = 'select';

/**
 * A global namespace for the `selectend` event.
 * @type {string}
 */
const selectendEvent = 'selectend';

/**
 * A global namespace for the `selectstart` event.
 * @type {string}
 */
const selectstartEvent = 'selectstart';

/**
 * A global namespace for mouse events equivalent to touch events.
 * @type {Record<string, string>}
 */
const mouseSwipeEvents = {
  start: 'mousedown', end: 'mouseup', move: 'mousemove', cancel: 'mouseleave',
};

/**
 * A global namespace for mouse click events.
 * @type {Record<string, string>}
 */
const mouseClickEvents = { down: 'mousedown', up: 'mouseup' };

/**
 * A global namespace for `click` event.
 * @type {string}
 */
const mouseclickEvent = 'click';

/**
 * A global namespace for `dblclick` event.
 * @type {string}
 */
const mousedblclickEvent = 'dblclick';

/**
 * A global namespace for `mousedown` event.
 * @type {string}
 */
const mousedownEvent = 'mousedown';

/**
 * A global namespace for `mouseup` event.
 * @type {string}
 */
const mouseupEvent = 'mouseup';

/**
 * A global namespace for `hover` event.
 * @type {string}
 */
const mousehoverEvent = 'hover';

/**
 * A global namespace for mouse hover events.
 * @type {[string, string]}
 */
const mouseHoverEvents = ('onmouseleave' in document) ? ['mouseenter', 'mouseleave'] : ['mouseover', 'mouseout'];

/**
 * A global namespace for `mouseenter` event.
 * @type {string}
 */
const mouseenterEvent = 'mouseenter';

/**
 * A global namespace for `mouseleave` event.
 * @type {string}
 */
const mouseleaveEvent = 'mouseleave';

/**
 * A global namespace for `mousein` event.
 * @type {string}
 */
const mouseinEvent = 'mousein';

/**
 * A global namespace for `mouseout` event.
 * @type {string}
 */
const mouseoutEvent = 'mouseout';

/**
 * A global namespace for `mousemove` event.
 * @type {string}
 */
const mousemoveEvent = 'mousemove';

/**
 * A global namespace for `mousewheel` event.
 * @type {string}
 */
const mousewheelEvent = 'mousewheel';

/**
 * A global namespace for touch events.
 * @type {Record<string, string>}
 */
const touchEvents = {
  start: 'touchstart', end: 'touchend', move: 'touchmove', cancel: 'touchcancel',
};

/**
 * A global namespace for `touchstart` event.
 * @type {string}
 */
const touchstartEvent = 'touchstart';

/**
 * A global namespace for `touchmove` event.
 * @type {string}
 */
const touchmoveEvent = 'touchmove';

/**
 * A global namespace for `touchcancel` event.
 * @type {string}
 */
const touchcancelEvent = 'touchcancel';

/**
 * A global namespace for `touchend` event.
 * @type {string}
 */
const touchendEvent = 'touchend';

/**
 * A global namespace for `pointercancel` event.
 * @type {string}
 */
const pointercancelEvent = 'pointercancel';

/**
 * A global namespace for `pointerdown` event.
 * @type {string}
 */
const pointerdownEvent = 'pointerdown';

/**
 * A global namespace for `pointerleave` event.
 * @type {string}
 */
const pointerleaveEvent = 'pointerleave';

/**
 * A global namespace for `pointermove` event.
 * @type {string}
 */
const pointermoveEvent = 'pointermove';

/**
 * A global namespace for `pointerup` event.
 * @type {string}
 */
const pointerupEvent = 'pointerup';

/**
 * A global namespace for focus event names.
 * @type {{in: string, out: string}}
 */
const focusEvents = { in: 'focusin', out: 'focusout' };

/**
 * A global namespace for `focus` event.
 * @type {string}
 */
const focusEvent = 'focus';

/**
 * A global namespace for `focusin` event.
 * @type {string}
 */
const focusinEvent = 'focusin';

/**
 * A global namespace for `focusout` event.
 * @type {string}
 */
const focusoutEvent = 'focusout';

/**
 * A global namespace for `gesturechange` event.
 * @type {string}
 */
const gesturechangeEvent = 'gesturechange';

/**
 * A global namespace for `gestureend` event.
 * @type {string}
 */
const gestureendEvent = 'gestureend';

/**
 * A global namespace for `gesturestart` event.
 * @type {string}
 */
const gesturestartEvent = 'gesturestart';

/**
 * A global namespace for keyboard event keys.
 * @type {Record<string, string>}
 */
const keyboardEventKeys = {
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
const keydownEvent = 'keydown';

/**
 * A global namespace for `keyup` event.
 * @type {string}
 */
const keyupEvent = 'keyup';

/**
 * A global namespace for `keypress` event.
 * @type {string}
 */
const keypressEvent = 'keypress';

/**
 * A global namespace for `Alt` key.
 * @type {string} e.which = 18
 */
const keyAlt = 'Alt';

/**
 * A global namespace for `ArrowDown` key.
 * @type {string} e.which = 40 equivalent
 */
const keyArrowDown = 'ArrowDown';

/**
 * A global namespace for `ArrowUp` key.
 * @type {string} e.which = 38 equivalent
 */
const keyArrowUp = 'ArrowUp';

/**
 * A global namespace for `ArrowLeft` key.
 * @type {string} e.which = 37 equivalent
 */
const keyArrowLeft = 'ArrowLeft';

/**
 * A global namespace for `ArrowRight` key.
 * @type {string} e.which = 39 equivalent
 */
const keyArrowRight = 'ArrowRight';

/**
 * A global namespace for `Backspace` key.
 * @type {string} e.which === 8 equivalent
 */
const keyBackspace = 'Backspace';

/**
 * A global namespace for `CapsLock` key.
 * @type {string} e.which = 20 equivalent
 */
const keyCapsLock = 'CapsLock';

/**
 * A global namespace for `Control` key.
 * @type {string} e.which = 17
 */
const keyControl = 'Control';

/**
 * A global namespace for `Delete` key.
 * @type {string} e.which = 46 equivalent
 */
const keyDelete = 'Delete';

/**
 * A global namespace for `Enter` key.
 * @type {string} e.which = 13 equivalent
 */
const keyEnter = 'Enter';

/**
 * A global namespace for `Escape` key.
 * @type {string} e.which = 27 equivalent
 */
const keyEscape = 'Escape';

/**
 * A global namespace for `Insert` key.
 * @type {string} e.which = 45 equivalent
 */
const keyInsert = 'Insert';

/**
 * A global namespace for `Meta` key.
 * @type {string} e.which = 93 equivalent
 */
const keyMeta = 'Meta';

/**
 * A global namespace for `Pause` key.
 * @type {string} e.which = 19
 */
const keyPause = 'Pause';

/**
 * A global namespace for `ScrollLock` key.
 * @type {string} e.which = 145 equivalent
 */
const keyScrollLock = 'ScrollLock';

/**
 * A global namespace for `Shift` key.
 * @type {string} e.which = 16
 */
const keyShift = 'Shift';

/**
 * A global namespace for `Space` key.
 * @type {string} e.which = 32 equivalent
 */
const keySpace = 'Space';

/**
 * A global namespace for `Tab` key.
 * @type {string} e.which = 9 equivalent
 */
const keyTab = 'Tab';

/**
 * A global namespace for 'animationDuration' string.
 * @type {string}
 */
const animationDuration$1 = 'animationDuration';

/**
 * A global namespace for 'animationDuration' string.
 * @type {string}
 */
const animationDuration = 'webkitAnimation' in document.head.style ? 'webkitAnimationDuration' : 'animationDuration';

/**
 * A global namespace for 'animationDelay' string.
 * @type {string}
 */
const animationDelay$1 = 'animationDelay';

/**
 * A global namespace for 'animationDelay' string.
 * @type {string}
 */
const animationDelay = 'webkitAnimation' in document.head.style ? 'webkitAnimationDelay' : 'animationDelay';

/**
 * A global namespace for 'animationName' string.
 * @type {string}
 */
const animationName$1 = 'animationName';

/**
 * A global namespace for 'animationName' string.
 * @type {string}
 */
const animationName = 'webkitAnimation' in document.head.style ? 'webkitAnimationName' : 'animationName';

/**
 * A global namespace for 'animationend' string.
 * @type {string}
 */
const animationEndEvent$1 = 'animationend';

/**
 * A global namespace for 'animationend' string.
 * @type {string}
 */
const animationEndEvent = 'webkitAnimation' in document.head.style ? 'webkitAnimationEnd' : 'animationend';

/**
 * A global namespace for 'transitionDuration' string.
 * @type {string}
 */
const transitionDuration$1 = 'transitionDuration';

/**
 * A global namespace for 'transitionDuration' string.
 * @type {string}
 */
const transitionDuration = 'webkitTransition' in document.head.style ? 'webkitTransitionDuration' : 'transitionDuration';

/**
 * A global namespace for 'transitionDelay' string.
 * @type {string}
 */
const transitionDelay$1 = 'transitionDelay';

/**
 * A global namespace for 'transitionDelay' string.
 * @type {string}
 */
const transitionDelay = 'webkitTransition' in document.head.style ? 'webkitTransitionDelay' : 'transitionDelay';

/**
 * A global namespace for 'transitionend' string.
 * @type {string}
 */
const transitionEndEvent$1 = 'transitionend';

/**
 * A global namespace for 'transitionend' string.
 * @type {string}
 */
const transitionEndEvent = 'webkitTransition' in document.head.style ? 'webkitTransitionEnd' : 'transitionend';

/**
 * A global namespace for 'transitionProperty' string.
 * @type {string}
 */
const transitionProperty$1 = 'transitionProperty';

/**
 * A global namespace for 'transitionProperty' string.
 * @type {string}
 */
const transitionProperty = 'webkitTransition' in document.head.style ? 'webkitTransitionProperty' : 'transitionProperty';

/**
 * A global namespace for 'addEventListener' string.
 * @type {string}
 */
const addEventListener = 'addEventListener';

/**
 * A global namespace for 'removeEventListener' string.
 * @type {string}
 */
const removeEventListener = 'removeEventListener';

/**
 * A global namespace for predefined
 * CSS3 'cubic-bezier()' easing functions.
 * @type {Record<string, string>}
 */
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

/**
 * A global namespace for `offsetHeight` property.
 * @type {string}
 */
const offsetHeight = 'offsetHeight';

/**
 * A global namespace for `offsetWidth` property.
 * @type {string}
 */
const offsetWidth = 'offsetWidth';

/**
 * A global namespace for `scrollHeight` property.
 * @type {string}
 */
const scrollHeight = 'scrollHeight';

/**
 * A global namespace for `scrollWidth` property.
 * @type {string}
 */
const scrollWidth = 'scrollWidth';

/**
 * A global namespace for `userAgentData` event.
 * @type {string}
 */
const userAgentData = 'userAgentData';

const mobileBrands = /iPhone|iPad|iPod|Android/i;
let isMobileCheck = false;

// @ts-ignore
if (navigator[userAgentData]) {
  // @ts-ignore
  isMobileCheck = navigator[userAgentData].brands.some((x) => mobileBrands.test(x.brand));
} else {
  isMobileCheck = mobileBrands.test(navigator.userAgent);
}

/**
 * A global namespace for mobile detection.
 * @type {boolean}
 */
const isMobile = isMobileCheck;

/** @type {Record<string, any>} */
// @ts-ignore
const agentData = navigator[userAgentData];
const appleBrands = /(iPhone|iPod|iPad)/;

/**
 * A global boolean for Apple browsers.
 * @type {boolean}
 */
const isApple = !agentData ? appleBrands.test(navigator.userAgent)
  : agentData.brands.some((/** @type {Record<string, any>} */x) => appleBrands.test(x.brand));

/**
 * A global `boolean` for CSS3 3D transform support.
 * @type {boolean}
 */
const support3DTransform = 'webkitPerspective' in document.head.style || 'perspective' in document.head.style;

/**
 * Add eventListener to an `HTMLElement` | `Document` target.
 *
 * @param {HTMLElement | Document} element event.target
 * @param {string} eventName event.type
 * @param {EventListener} handler callback
 * @param {EventListenerOptions | boolean | undefined} options other event options
 */
function on(element, eventName, handler, options) {
  const ops = options || false;
  element.addEventListener(eventName, handler, ops);
}

/**
 * Remove eventListener from an `HTMLElement` | `Document` target.
 *
 * @param {HTMLElement | Document} element event.target
 * @param {string} eventName event.type
 * @param {EventListener} handler callback
 * @param {EventListenerOptions | boolean | undefined} options other event options
 */
function off(element, eventName, handler, options) {
  const ops = options || false;
  element.removeEventListener(eventName, handler, ops);
}

/**
 * Add an `eventListener` to an `HTMLElement` | `Document` target
 * and remove it once callback is called.
 *
 * @param {HTMLElement | Document} element event.target
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
 * A global namespace for passive events support.
 * @type {boolean}
 */
const supportPassive = (() => {
  let result = false;
  try {
    const opts = Object.defineProperty({}, 'passive', {
      get() {
        result = true;
        return result;
      },
    });
    one(document, DOMContentLoadedEvent, () => {}, opts);
  } catch (e) {
    throw Error('Passive events are not supported');
  }

  return result;
})();

/**
 * A global namespace for CSS3 transform support.
 * @type {boolean}
 */
const supportTransform = 'webkitTransform' in document.head.style || 'transform' in document.head.style;

/**
 * A global namespace for touch events support.
 * @type {boolean}
 */
const supportTouch = 'ontouchstart' in window || 'msMaxTouchPoints' in navigator;

/**
 * A global `boolean` for CSS3 animation support.
 * @type {boolean}
 */
const supportAnimation = 'webkitAnimation' in document.head.style || 'animation' in document.head.style;

/**
 * A global namespace for CSS3 transition support.
 * @type {boolean}
 */
const supportTransition = 'webkitTransition' in document.head.style || 'transition' in document.head.style;

/**
 * Add class to `HTMLElement.classList`.
 *
 * @param {HTMLElement} element target
 * @param {string} classNAME to add
 */
function addClass(element, classNAME) {
  element.classList.add(classNAME);
}

/**
 * Remove class from `HTMLElement.classList`.
 *
 * @param {HTMLElement} element target
 * @param {string} classNAME to remove
 */
function removeClass(element, classNAME) {
  element.classList.remove(classNAME);
}

/**
 * Check class in `HTMLElement.classList`.
 *
 * @param {HTMLElement} element target
 * @param {string} classNAME to check
 * @return {boolean}
 */
function hasClass(element, classNAME) {
  return element.classList.contains(classNAME);
}

/**
 * Checks if an element is an `HTMLElement`.
 *
 * @param {any} element the target object
 * @returns {boolean} the query result
 */
const isHTMLElement = (element) => typeof element === 'object' && element instanceof HTMLElement;

/**
 * Utility to check if target is typeof `HTMLElement`
 * or find one that matches a selector.
 *
 * @param {HTMLElement | string} selector the input selector or target element
 * @param {(ParentNode | HTMLElement)=} parent optional `HTMLElement` to look into
 * @return {HTMLElement?} the `HTMLElement` or `querySelector` result
 */
function querySelector(selector, parent) {
  const lookUp = parent && isHTMLElement(parent) ? parent : document;
  return typeof selector === 'object' ? selector : lookUp.querySelector(selector);
}

const TimeCache = new Map();
/**
 * An interface for one or more `TimerHandler`s per `Element`.
 * @see https://github.com/thednp/navbar.js/
 */
const Timer = {
  /**
   * Sets a new timeout timer for an element, or element -> key association.
   * @param {HTMLElement | string} target target element
   * @param {ReturnType<TimerHandler>} callback the callback
   * @param {number} delay the execution delay
   * @param {string=} key a unique
   */
  set: (target, callback, delay, key) => {
    const element = querySelector(target);

    if (!isHTMLElement(element)) return;

    if (key && key.length) {
      if (!TimeCache.has(element)) {
        TimeCache.set(element, new Map());
      }
      const keyTimers = TimeCache.get(element);
      keyTimers.set(key, setTimeout(callback, delay));
    } else {
      TimeCache.set(element, setTimeout(callback, delay));
    }
  },

  /**
   * Returns the timer associated with the target.
   * @param {HTMLElement | string} target target element
   * @param {string=} key a unique
   * @returns {Map<Element, TimerHandler>?} the timer
   */
  get: (target, key) => {
    const element = querySelector(target);

    if (!isHTMLElement(element)) return null;

    if (key && key.length) {
      if (!TimeCache.has(element)) {
        TimeCache.set(element, new Map());
      }
      const keyTimers = TimeCache.get(element);
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
   * @param {HTMLElement} target target element
   * @param {string=} key a unique
   */
  clear: (target, key) => {
    const element = querySelector(target);

    if (!isHTMLElement(element) || !TimeCache.has(element)) return;

    if (key && key.length) {
      const keyTimers = TimeCache.get(element);

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

/** @type {Map<string, Map<HTMLElement, SHORTER.Component>>} */
const componentData = new Map();
/**
 * An interface for web components background data.
 * @see https://github.com/thednp/bootstrap.native/blob/master/src/components/base-component.js
 */
const Data = {
  /**
   * Sets web components data.
   * @param {HTMLElement | string} target target element
   * @param {string} component the component's name or a unique key
   * @param {SHORTER.Component} instance the component instance
   */
  set: (target, component, instance) => {
    const element = querySelector(target);
    if (!element || !isHTMLElement(element)) return;

    if (!componentData.has(component)) {
      componentData.set(component, new Map());
    }

    const instanceMap = componentData.get(component);
    // @ts-ignore - not undefined, but defined right above
    instanceMap.set(element, instance);
  },

  /**
   * Returns all instances for specified component.
   * @param {string} component the component's name or a unique key
   * @returns {Map<HTMLElement, SHORTER.Component> | null | undefined} all the component instances
   */
  getAllFor: (component) => {
    if (componentData.has(component)) {
      return componentData.get(component);
    }
    return null;
  },

  /**
   * Returns the instance associated with the target.
   * @param {HTMLElement | string} target target element
   * @param {string} component the component's name or a unique key
   * @returns {SHORTER.Component | null | undefined} the instance
   */
  get: (target, component) => {
    const element = querySelector(target);

    const allForC = Data.getAllFor(component);
    if (allForC && element && isHTMLElement(element) && allForC.has(element)) {
      return allForC.get(element);
    }
    return null;
  },

  /**
   * Removes web components data.
   * @param {HTMLElement | string} target target element
   * @param {string} component the component's name or a unique key
   */
  remove: (target, component) => {
    const element = querySelector(target);
    const instanceMap = componentData.get(component);
    if (!instanceMap || !element) return;

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
const getInstance = (target, component) => Data.get(target, component);

/**
 * Shortcut for `window.getComputedStyle(element).propertyName`
 * static method.
 *
 * * If `element` parameter is not an `HTMLElement`, `getComputedStyle`
 * throws a `ReferenceError`.
 *
 * @param {HTMLElement} element target
 * @param {string=} property the css property
 * @return {string} the css property value
 */
function getElementStyle(element, property) {
  const computedStyle = getComputedStyle(element);

  return property && property in computedStyle
    ? computedStyle.getPropertyValue(property)
    : '';
}

/**
 * Utility to get the computed `animationDelay`
 * from Element in miliseconds.
 *
 * @param {HTMLElement} element target
 * @return {number} the value in miliseconds
 */
function getElementAnimationDelay$1(element) {
  const propertyValue = getElementStyle(element, animationName$1);
  const durationValue = getElementStyle(element, animationDelay$1);

  const durationScale = durationValue.includes('ms') ? 1 : 1000;
  const duration = propertyValue && propertyValue !== 'none'
    ? parseFloat(durationValue) * durationScale : 0;

  return !Number.isNaN(duration) ? duration : 0;
}

/**
 * Utility to get the computed `animationDuration`
 * from `HTMLElement` in miliseconds.
 *
 * @param {HTMLElement} element target
 * @return {number} the value in miliseconds
 */
function getElementAnimationDuration$1(element) {
  const propertyValue = getElementStyle(element, animationName$1);
  const durationValue = getElementStyle(element, animationDuration$1);
  const durationScale = durationValue.includes('ms') ? 1 : 1000;
  const duration = propertyValue && propertyValue !== 'none'
    ? parseFloat(durationValue) * durationScale : 0;

  return !Number.isNaN(duration) ? duration : 0;
}

/**
 * Utility to make sure callbacks are consistently
 * called when animation ends.
 *
 * @param {HTMLElement} element target
 * @param {EventListener} handler `animationend` callback
 */
function emulateAnimationEnd$1(element, handler) {
  let called = 0;
  const endEvent = new Event(animationEndEvent$1);
  const duration = getElementAnimationDuration$1(element);
  const delay = getElementAnimationDelay$1(element);

  if (duration) {
    /**
     * Wrap the handler in on -> off callback
     * @param {Event} e Event object
     */
    const animationEndWrapper = (e) => {
      if (e.target === element) {
        handler.apply(element, [e]);
        element.removeEventListener(animationEndEvent$1, animationEndWrapper);
        called = 1;
      }
    };
    element.addEventListener(animationEndEvent$1, animationEndWrapper);
    setTimeout(() => {
      if (!called) element.dispatchEvent(endEvent);
    }, duration + delay + 17);
  } else {
    handler.apply(element, [endEvent]);
  }
}

/**
 * Utility to get the computed `animationDelay`
 * from Element in miliseconds.
 *
 * @param {HTMLElement} element target
 * @return {number} the value in miliseconds
 */
function getElementAnimationDelay(element) {
  const propertyValue = getElementStyle(element, animationName);
  const durationValue = getElementStyle(element, animationDelay);
  const durationScale = durationValue.includes('ms') ? 1 : 1000;
  const duration = supportAnimation && propertyValue && propertyValue !== 'none'
    ? parseFloat(durationValue) * durationScale : 0;

  return !Number.isNaN(duration) ? duration : 0;
}

/**
 * Utility to get the computed `animationDuration`
 * from `HTMLElement` in miliseconds.
 *
 * @param {HTMLElement} element target
 * @return {number} the value in miliseconds
 */
function getElementAnimationDuration(element) {
  const propertyValue = getElementStyle(element, animationName);
  const durationValue = getElementStyle(element, animationDuration);
  const durationScale = durationValue.includes('ms') ? 1 : 1000;
  const duration = supportAnimation && propertyValue && propertyValue !== 'none'
    ? parseFloat(durationValue) * durationScale : 0;

  return !Number.isNaN(duration) ? duration : 0;
}

/**
 * Utility to make sure callbacks are consistently
 * called when animation ends.
 *
 * @param {HTMLElement} element target
 * @param {EventListener} handler `animationend` callback
 */
function emulateAnimationEnd(element, handler) {
  let called = 0;
  const endEvent = new Event(animationEndEvent);
  const duration = getElementAnimationDuration(element);
  const delay = getElementAnimationDelay(element);

  if (supportAnimation && duration) {
    /**
     * Wrap the handler in on -> off callback
     * @param {Event} e Event object
     */
    const animationEndWrapper = (e) => {
      if (e.target === element) {
        handler.apply(element, [e]);
        element.removeEventListener(animationEndEvent, animationEndWrapper);
        called = 1;
      }
    };
    element.addEventListener(animationEndEvent, animationEndWrapper);
    setTimeout(() => {
      if (!called) element.dispatchEvent(endEvent);
    }, duration + delay + 17);
  } else {
    handler.apply(element, [endEvent]);
  }
}

/**
 * Utility to get the computed `transitionDelay`
 * from Element in miliseconds.
 *
 * @param {HTMLElement} element target
 * @return {number} the value in miliseconds
 */
function getElementTransitionDelay$1(element) {
  const propertyValue = getElementStyle(element, transitionProperty$1);
  const delayValue = getElementStyle(element, transitionDelay$1);

  const delayScale = delayValue.includes('ms') ? 1 : 1000;
  const duration = propertyValue && propertyValue !== 'none'
    ? parseFloat(delayValue) * delayScale : 0;

  return !Number.isNaN(duration) ? duration : 0;
}

/**
 * Utility to get the computed `transitionDuration`
 * from Element in miliseconds.
 *
 * @param {HTMLElement} element target
 * @return {number} the value in miliseconds
 */
function getElementTransitionDuration$1(element) {
  const propertyValue = getElementStyle(element, transitionProperty$1);
  const durationValue = getElementStyle(element, transitionDuration$1);
  const durationScale = durationValue.includes('ms') ? 1 : 1000;
  const duration = propertyValue && propertyValue !== 'none'
    ? parseFloat(durationValue) * durationScale : 0;

  return !Number.isNaN(duration) ? duration : 0;
}

/**
 * Utility to make sure callbacks are consistently
 * called when transition ends.
 *
 * @param {HTMLElement} element target
 * @param {EventListener} handler `transitionend` callback
 */
function emulateTransitionEnd$1(element, handler) {
  let called = 0;
  const endEvent = new Event(transitionEndEvent$1);
  const duration = getElementTransitionDuration$1(element);
  const delay = getElementTransitionDelay$1(element);

  if (duration) {
    /**
     * Wrap the handler in on -> off callback
     * @param {Event} e Event object
     */
    const transitionEndWrapper = (e) => {
      if (e.target === element) {
        handler.apply(element, [e]);
        element.removeEventListener(transitionEndEvent$1, transitionEndWrapper);
        called = 1;
      }
    };
    element.addEventListener(transitionEndEvent$1, transitionEndWrapper);
    setTimeout(() => {
      if (!called) element.dispatchEvent(endEvent);
    }, duration + delay + 17);
  } else {
    handler.apply(element, [endEvent]);
  }
}

/**
 * Utility to get the computed `transitionDelay`
 * from Element in miliseconds.
 *
 * @param {HTMLElement} element target
 * @return {number} the value in miliseconds
 */
function getElementTransitionDelay(element) {
  const propertyValue = getElementStyle(element, transitionProperty);
  const delayValue = getElementStyle(element, transitionDelay);
  const delayScale = delayValue.includes('ms') ? 1 : 1000;
  const duration = supportTransition && propertyValue && propertyValue !== 'none'
    ? parseFloat(delayValue) * delayScale : 0;

  return !Number.isNaN(duration) ? duration : 0;
}

/**
 * Utility to get the computed `transitionDuration`
 * from Element in miliseconds.
 *
 * @param {HTMLElement} element target
 * @return {number} the value in miliseconds
 */
function getElementTransitionDuration(element) {
  const propertyValue = getElementStyle(element, transitionProperty);
  const durationValue = getElementStyle(element, transitionDuration);
  const durationScale = durationValue.includes('ms') ? 1 : 1000;
  const duration = supportTransition && propertyValue && propertyValue !== 'none'
    ? parseFloat(durationValue) * durationScale : 0;

  return !Number.isNaN(duration) ? duration : 0;
}

/**
 * Utility to make sure callbacks are consistently
 * called when transition ends.
 *
 * @param {HTMLElement} element target
 * @param {EventListener} handler `transitionend` callback
 */
function emulateTransitionEnd(element, handler) {
  let called = 0;
  const endEvent = new Event(transitionEndEvent);
  const duration = getElementTransitionDuration(element);
  const delay = getElementTransitionDelay(element);

  if (supportTransition && duration) {
    /**
     * Wrap the handler in on -> off callback
     * @param {Event} e Event object
     */
    const transitionEndWrapper = (e) => {
      if (e.target === element) {
        handler.apply(element, [e]);
        element.removeEventListener(transitionEndEvent, transitionEndWrapper);
        called = 1;
      }
    };
    element.addEventListener(transitionEndEvent, transitionEndWrapper);
    setTimeout(() => {
      if (!called) element.dispatchEvent(endEvent);
    }, duration + delay + 17);
  } else {
    handler.apply(element, [endEvent]);
  }
}

// general event options

/**
 * A global namespace for most scroll event listeners.
 */
const passiveHandler = supportPassive ? { passive: true } : false;

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
const ObjectKeys = (obj) => Object.keys(obj);

/**
 * Utility to normalize component options
 *
 * @param {HTMLElement} element target
 * @param {Record<string, any>} defaultOps component default options
 * @param {Record<string, any>} inputOps component instance options
 * @param {string=} ns component namespace
 * @return {Record<string, any>} normalized component options object
 */
function normalizeOptions(element, defaultOps, inputOps, ns) {
  const data = { ...element.dataset };
  /** @type {Record<string, any>} */
  const normalOps = {};
  /** @type {Record<string, any>} */
  const dataOps = {};

  ObjectKeys(data).forEach((k) => {
    const key = ns && k.includes(ns)
      ? k.replace(ns, '').replace(/[A-Z]/, (match) => match.toLowerCase())
      : k;

    dataOps[key] = normalizeValue(data[k]);
  });

  ObjectKeys(inputOps).forEach((k) => {
    inputOps[k] = normalizeValue(inputOps[k]);
  });

  ObjectKeys(defaultOps).forEach((k) => {
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
    throw TypeError(`${origin} ${e}`);
  }
}

/**
 * Utility to force re-paint of an `HTMLElement` target.
 *
 * @param {HTMLElement} element is the target
 * @return {number} the `Element.offsetHeight` value
 */
const reflow = (element) => element.offsetHeight;

/**
 * Shortcut for `Array.from()` static method.
 *
 * @param  {any[] | HTMLCollection | NodeList} arr array-like iterable object
 * @returns {Array<any>}
 */
const ArrayFrom = (arr) => Array.from(arr);

/**
 * Shortcut for `Float32Array.from()` static method.
 * @param  {any[] | HTMLCollection | NodeList} arr array-like iterable object
 * @returns {Float32Array}
 */
const Float32ArrayFrom = (arr) => Float32Array.from(Array.from(arr));

/**
 * Shortcut for `Float64Array.from()` static method.
 * @param  {any[] | HTMLCollection | NodeList} arr array-like iterable object
 * @returns {Float64Array}
 */
const Float64ArrayFrom = (arr) => Float64Array.from(Array.from(arr));

/**
 * Shortcut for `Object.assign()` static method.
 * @param  {Record<string, any>} obj a target object
 * @param  {Record<string, any>} source a source object
 */
const ObjectAssign = (obj, source) => Object.assign(obj, source);

/**
 * Shortcut for `Object.values()` static method.
 * @param  {Record<string, any>} obj a target object
 * @returns {any[]}
 */
const ObjectValues = (obj) => Object.values(obj);

/**
 * Shortcut for `HTMLElement.getAttribute()` method.
 * @param  {HTMLElement} element target element
 * @param  {string} attribute attribute name
 */
const getAttribute = (element, attribute) => element.getAttribute(attribute);

/**
 * Shortcut for `HTMLElement.setAttribute()` method.
 * @param  {HTMLElement} element target element
 * @param  {string} attribute attribute name
 * @param  {string} value attribute value
 */
const setAttribute = (element, attribute, value) => element.setAttribute(attribute, value);

/**
 * Shortcut for `HTMLElement.removeAttribute()` method.
 * @param  {HTMLElement} element target element
 * @param  {string} attribute attribute name
 */
const removeAttribute = (element, attribute) => element.removeAttribute(attribute);

/**
 * Shortcut for `HTMLElement.style.propertyName` method.
 * @param  {HTMLElement} element target element
 * @param  {Record<string, string>} styles attribute value
 */
const setElementStyle = (element, styles) => ObjectAssign(element.style, styles);

/**
 * Utility to determine if an `HTMLElement`
 * is partially visible in viewport.
 *
 * @param {HTMLElement} element target
 * @return {boolean} Boolean
 */
function isElementInScrollRange(element) {
  const bcr = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  return bcr.top <= viewportHeight && bcr.bottom >= 0; // bottom && top
}

/**
 * Utility to determine if an `HTMLElement`
 * is fully visible in the viewport.
 *
 * @param {HTMLElement} element target
 * @return {boolean} Boolean
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

/**
 * Checks if an element is an `<svg>`, `<img>` or `<video>`.
 * *Tooltip* / *Popover* works different with media elements.
 * @param {any} element the target element
 * @returns {boolean} the query result
 */
const isMedia = (element) => typeof element === 'object'
  && [SVGElement, HTMLImageElement, HTMLVideoElement]
    .some((mediaType) => element instanceof mediaType);

/**
 * Checks if a page is Right To Left.
 * @returns {boolean} the query result
 */
const isRTL = () => document.documentElement.dir === 'rtl';

/**
 * Shortcut for `typeof` static method.
 *
 * @param  {any} str array-like iterable object
 * @returns {boolean} the query result
 */
const isString = (str) => str && typeof str === 'string';

/**
 * Shortcut for `Array.isArray()` static method.
 *
 * @param  {any} arr array-like iterable object
 * @returns {boolean} the query result
 */
const isArray = (arr) => Array.isArray(arr);

/**
 * Checks if an object is an `Element`.
 *
 * @param {any} element the target object
 * @returns {boolean} the query result
 */
const isElement = (element) => element && element instanceof Element;

/**
 * Checks if an object is an `HTMLCollection`.
 *
 * @param {any} object the target object
 * @returns {boolean} the query result
 */
const isHTMLCollection = (object) => object instanceof HTMLCollection;

/**
 * Checks if an object is a `NodeList`.
 *
 * @param {any} object the target object
 * @returns {boolean} the query result
 */
const isNodeList = (object) => object instanceof NodeList;

/**
 * Checks if an object is an `Array` in which all items are `Element`.
 *
 * @param {any} object the target object
 * @returns {boolean} the query result
 */
const isElementsArray = (object) => Array.isArray(object)
  && object.every((el) => isHTMLElement(el));

/**
 * Utility to check if target is typeof `HTMLElement`
 * or find one that matches a selector.
 *
 * @deprecated
 *
 * @param {HTMLElement | string} selector the input selector or target element
 * @param {(ParentNode | HTMLElement)=} parent optional `HTMLElement` to look into
 * @return {HTMLElement?} the Element or `querySelector` result
 */
function queryElement(selector, parent) {
  return querySelector(selector, parent);
}

/**
 * A shortcut for `(document|Element).querySelectorAll`.
 *
 * @param {string} selector the input selector
 * @param {(HTMLElement | ParentNode)=} parent optional Element to look into
 * @return {NodeListOf<HTMLElement>} the query result
 */
function querySelectorAll(selector, parent) {
  const lookUp = parent && isHTMLElement(parent) ? parent : document;
  return lookUp.querySelectorAll(selector);
}

/**
 * Shortcut for `HTMLElement.getElementsByTagName` method.
 *
 * @param {string} selector the tag name
 * @param {HTMLElement=} parent optional Element to look into
 * @return {HTMLCollectionOf<Element | HTMLElement>} the 'HTMLCollection'
 */
function getElementsByTagName(selector, parent) {
  const lookUp = parent && isHTMLElement(parent) ? parent : document;
  return lookUp.getElementsByTagName(selector);
}

/**
 * Shortcut for `HTMLElement.getElementsByClassName` method.
 *
 * @param {string} selector the class name
 * @param {(HTMLElement)=} parent optional Element to look into
 * @return {HTMLCollectionOf<HTMLElement | Element>} the 'HTMLCollection'
 */
function getElementsByClassName(selector, parent) {
  const lookUp = parent && isHTMLElement(parent) ? parent : document;
  return lookUp.getElementsByClassName(selector);
}

var version = "0.2.25alpha1";

// @ts-ignore

/**
 * A global namespace for library version.
 * @type {string}
 */
const Version = version;

// strings

const SHORTER = {
  ariaChecked,
  ariaDescribedBy,
  ariaExpanded,
  ariaHidden,
  ariaLabel,
  ariaLabelledBy,
  ariaModal,
  ariaPressed,
  ariaSelected,
  nativeEvents,
  abortEvent,
  blurEvent,
  moveEvent,
  changeEvent,
  errorEvent,
  resetEvent,
  resizeEvent,
  scrollEvent,
  submitEvent,
  loadEvent,
  unloadEvent,
  readystatechangeEvent,
  beforeunloadEvent,
  orientationchangeEvent,
  contextmenuEvent,
  DOMContentLoadedEvent,
  DOMMouseScrollEvent,
  selectEvent,
  selectendEvent,
  selectstartEvent,
  mouseClickEvents,
  mouseclickEvent,
  mousedblclickEvent,
  mousedownEvent,
  mouseupEvent,
  mousehoverEvent,
  mouseHoverEvents,
  mouseenterEvent,
  mouseleaveEvent,
  mouseinEvent,
  mouseoutEvent,
  mousemoveEvent,
  mousewheelEvent,
  mouseSwipeEvents,
  touchEvents,
  touchstartEvent,
  touchmoveEvent,
  touchcancelEvent,
  touchendEvent,
  pointercancelEvent,
  pointerdownEvent,
  pointerleaveEvent,
  pointermoveEvent,
  pointerupEvent,
  focusEvents,
  focusEvent,
  focusinEvent,
  focusoutEvent,
  gesturechangeEvent,
  gestureendEvent,
  gesturestartEvent,
  bezierEasings,
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
  isMobile,
  isApple,
  support3DTransform,
  supportPassive,
  supportTransform,
  supportTouch,
  supportAnimation,
  supportTransition,
  addEventListener,
  removeEventListener,
  keyboardEventKeys,
  keydownEvent,
  keypressEvent,
  keyupEvent,
  keyAlt,
  keyArrowDown,
  keyArrowLeft,
  keyArrowRight,
  keyArrowUp,
  keyBackspace,
  keyCapsLock,
  keyControl,
  keyDelete,
  keyEnter,
  keyEscape,
  keyInsert,
  keyMeta,
  keyPause,
  keyScrollLock,
  keyShift,
  keySpace,
  keyTab,
  offsetHeight,
  offsetWidth,
  scrollHeight,
  scrollWidth,
  userAgentData,
  addClass,
  removeClass,
  hasClass,
  on,
  off,
  one,
  Data,
  Timer,
  getInstance,
  emulateAnimationEnd: emulateAnimationEnd$1,
  emulateAnimationEndLegacy: emulateAnimationEnd,
  emulateTransitionEnd: emulateTransitionEnd$1,
  emulateTransitionEndLegacy: emulateTransitionEnd,
  isElementInScrollRange,
  isElementInViewport,
  passiveHandler,
  getElementAnimationDuration: getElementAnimationDuration$1,
  getElementAnimationDurationLegacy: getElementAnimationDuration,
  getElementAnimationDelay: getElementAnimationDelay$1,
  getElementAnimationDelayLegacy: getElementAnimationDelay,
  getElementTransitionDuration: getElementTransitionDuration$1,
  getElementTransitionDurationLegacy: getElementTransitionDuration,
  getElementTransitionDelay: getElementTransitionDelay$1,
  getElementTransitionDelayLegacy: getElementTransitionDelay,
  isArray,
  isString,
  isElement,
  isHTMLElement,
  isNodeList,
  isHTMLCollection,
  isElementsArray,
  isMedia,
  isRTL,
  queryElement,
  querySelector,
  querySelectorAll,
  getElementsByClassName,
  getElementsByTagName,
  normalizeValue,
  normalizeOptions,
  tryWrapper,
  reflow,
  ArrayFrom,
  Float32ArrayFrom,
  Float64ArrayFrom,
  ObjectAssign,
  ObjectKeys,
  ObjectValues,
  getElementStyle,
  setElementStyle,
  getAttribute,
  setAttribute,
  removeAttribute,
  Version,
};

export { SHORTER as default };
