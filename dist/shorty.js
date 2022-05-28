/*!
* Shorty v1.0.3 (https://github.com/thednp/shorty)
* Copyright 2019-2022 © dnp_theme
* Licensed under MIT (https://github.com/thednp/shorty/blob/master/LICENSE)
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.SHORTY = factory());
})(this, (function () { 'use strict';

  /**
   * A global namespace for aria-checked.
   * @type {string}
   */
  var ariaChecked = 'aria-checked';

  /**
   * A global namespace for aria-description.
   * @type {string}
   */
  var ariaDescription = 'aria-description';

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
   * A global namespace for aria-haspopup.
   * @type {string}
   */
  var ariaHasPopup = 'aria-haspopup';

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
   * A global namespace for aria-valuemin.
   * @type {string}
   */
  var ariaValueMin = 'aria-valuemin';

  /**
   * A global namespace for aria-valuemax.
   * @type {string}
   */
  var ariaValueMax = 'aria-valuemax';

  /**
   * A global namespace for aria-valuenow.
   * @type {string}
   */
  var ariaValueNow = 'aria-valuenow';

  /**
   * A global namespace for aria-valuetext.
   * @type {string}
   */
  var ariaValueText = 'aria-valuetext';

  /**
   * A global namespace for `abort` event.
   * @type {string}
   */
  var abortEvent = 'abort';

  /**
   * A global namespace for `beforeunload` event.
   * @type {string}
   */
  var beforeunloadEvent = 'beforeunload';

  /**
   * A global namespace for `blur` event.
   * @type {string}
   */
  var blurEvent = 'blur';

  /**
   * A global namespace for `change` event.
   * @type {string}
   */
  var changeEvent = 'change';

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
   * A global namespace for `error` event.
   * @type {string}
   */
  var errorEvent = 'error';

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
   * A global namespace for `keydown` event.
   * @type {string}
   */
  var keydownEvent = 'keydown';

  /**
   * A global namespace for `keypress` event.
   * @type {string}
   */
  var keypressEvent = 'keypress';

  /**
   * A global namespace for `keyup` event.
   * @type {string}
   */
  var keyupEvent = 'keyup';

  /**
   * A global namespace for `load` event.
   * @type {string}
   */
  var loadEvent = 'load';

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
   * A global namespace for `mouseover` event.
   * @type {string}
   */
  var mouseoverEvent = 'mouseover';

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
   * A global namespace for `move` event.
   * @type {string}
   */
  var moveEvent = 'move';

  /**
   * A global namespace for `orientationchange` event.
   * @type {string}
   */
  var orientationchangeEvent = 'orientationchange';

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
   * A global namespace for `readystatechange` event.
   * @type {string}
   */
  var readystatechangeEvent = 'readystatechange';

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
   * A global namespace for `unload` event.
   * @type {string}
   */
  var unloadEvent = 'unload';

  /**
   * A global namespace for all browser native events.
   */
  var nativeEvents = {
    DOMContentLoaded: DOMContentLoadedEvent,
    DOMMouseScroll: DOMMouseScrollEvent,
    abort: abortEvent,
    beforeunload: beforeunloadEvent,
    blur: blurEvent,
    change: changeEvent,
    click: mouseclickEvent,
    contextmenu: contextmenuEvent,
    dblclick: mousedblclickEvent,
    error: errorEvent,
    focus: focusEvent,
    focusin: focusinEvent,
    focusout: focusoutEvent,
    gesturechange: gesturechangeEvent,
    gestureend: gestureendEvent,
    gesturestart: gesturestartEvent,
    hover: mousehoverEvent,
    keydown: keydownEvent,
    keypress: keypressEvent,
    keyup: keyupEvent,
    load: loadEvent,
    mousedown: mousedownEvent,
    mousemove: mousemoveEvent,
    mousein: mouseinEvent,
    mouseout: mouseoutEvent,
    mouseenter: mouseenterEvent,
    mouseleave: mouseleaveEvent,
    mouseover: mouseoverEvent,
    mouseup: mouseupEvent,
    mousewheel: mousewheelEvent,
    move: moveEvent,
    orientationchange: orientationchangeEvent,
    pointercancel: pointercancelEvent,
    pointerdown: pointerdownEvent,
    pointerleave: pointerleaveEvent,
    pointermove: pointermoveEvent,
    pointerup: pointerupEvent,
    readystatechange: readystatechangeEvent,
    reset: resetEvent,
    resize: resizeEvent,
    scroll: scrollEvent,
    select: selectEvent,
    selectend: selectendEvent,
    selectstart: selectstartEvent,
    submit: submitEvent,
    touchcancel: touchcancelEvent,
    touchend: touchendEvent,
    touchmove: touchmoveEvent,
    touchstart: touchstartEvent,
    unload: unloadEvent,
  };

  /**
   * A global namespace for `loadstart` event.
   * @type {string}
   */
  var loadstartEvent = 'loadstart';

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
   * A global namespace for mouse hover events.
   * @type {[string, string]}
   */
  var mouseHoverEvents = ('onmouseleave' in document) ? ['mouseenter', 'mouseleave']
    : /* istanbul ignore next */['mouseover', 'mouseout'];

  /**
   * A global namespace for touch events.
   * @type {Record<string, string>}
   */
  var touchEvents = {
    start: 'touchstart', end: 'touchend', move: 'touchmove', cancel: 'touchcancel',
  };

  /**
   * A global namespace for focus event names.
   * @type {{in: string, out: string}}
   */
  var focusEvents = { in: 'focusin', out: 'focusout' };

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
   * A global namespace for `document.head`.
   */
  var documentHead = document.head;

  /**
   * A global namespace for 'animationDuration' string.
   * @type {string}
   */
  var animationDuration = 'webkitAnimation' in documentHead.style ? 'webkitAnimationDuration'
    : /* istanbul ignore next */'animationDuration';

  /**
   * A global namespace for 'animationDelay' string.
   * @type {string}
   */
  var animationDelay$1 = 'animationDelay';

  /**
   * A global namespace for 'animationDelay' string.
   * @type {string}
   */
  var animationDelay = 'webkitAnimation' in documentHead.style ? 'webkitAnimationDelay'
    : /* istanbul ignore next */'animationDelay';

  /**
   * A global namespace for 'animationName' string.
   * @type {string}
   */
  var animationName$1 = 'animationName';

  /**
   * A global namespace for 'animationName' string.
   * @type {string}
   */
  var animationName = 'webkitAnimation' in documentHead.style ? 'webkitAnimationName'
    : /* istanbul ignore next */'animationName';

  /**
   * A global namespace for 'animationend' string.
   * @type {string}
   */
  var animationEndEvent$1 = 'animationend';

  /**
   * A global namespace for 'animationend' string.
   * @type {string}
   */
  var animationEndEvent = 'webkitAnimation' in documentHead.style ? 'webkitAnimationEnd'
    : /* istanbul ignore next */'animationend';

  /**
   * A global namespace for 'transitionDuration' string.
   * @type {string}
   */
  var transitionDuration$1 = 'transitionDuration';

  /**
   * A global namespace for 'transitionDuration' string.
   * @type {string}
   */
  var transitionDuration = 'webkitTransition' in documentHead.style ? 'webkitTransitionDuration'
    : /* istanbul ignore next */'transitionDuration';

  /**
   * A global namespace for 'transitionDelay' string.
   * @type {string}
   */
  var transitionDelay$1 = 'transitionDelay';

  /**
   * A global namespace for 'transitionDelay' string.
   * @type {string}
   */
  var transitionDelay = 'webkitTransition' in documentHead.style ? 'webkitTransitionDelay'
    : /* istanbul ignore next */'transitionDelay';

  /**
   * A global namespace for 'transitionend' string.
   * @type {string}
   */
  var transitionEndEvent$1 = 'transitionend';

  /**
   * A global namespace for 'transitionend' string.
   * @type {string}
   */
  var transitionEndEvent = 'webkitTransition' in documentHead.style ? 'webkitTransitionEnd'
    : /* istanbul ignore next */'transitionend';

  /**
   * A global namespace for `transitionProperty` string for modern browsers.
   *
   * @type {string}
   */
  var transitionProperty$1 = 'transitionProperty';

  /**
   * A global namespace for:
   * * `transitionProperty` string for modern brosers,
   * * `webkitTransition` for legacy Chrome / Safari browsers
   *
   * @type {string}
   */
  var transitionProperty = 'webkitTransition' in documentHead.style ? 'webkitTransitionProperty'
    : /* istanbul ignore next */'transitionProperty';

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

  var uaDATA = navigator.userAgentData;

  /**
   * A global namespace for `userAgentData` object.
   */
  var userAgentData = uaDATA;

  var userAgentString = navigator.userAgent;

  /**
   * A global namespace for `navigator.userAgent` string.
   */
  var userAgent = userAgentString;

  var mobileBrands = /iPhone|iPad|iPod|Android/i;
  var isMobileCheck = false;

  /* istanbul ignore else */
  if (userAgentData) {
    isMobileCheck = userAgentData.brands.some(function (x) { return mobileBrands.test(x.brand); });
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
  var isApple = userAgentData ? userAgentData.brands.some(function (x) { return appleBrands.test(x.brand); })
    : /* istanbul ignore next */appleBrands.test(userAgent);

  /**
   * A global boolean for Gecko browsers. When writing this file,
   * Gecko was not supporting `userAgentData`.
   * @type {boolean}
   */
  var isFirefox = userAgent ? userAgent.includes('Firefox')
    : /* istanbul ignore next */false;

  /**
   * A global `boolean` for CSS3 3D transform support.
   * @type {boolean}
   */
  var support3DTransform = 'webkitPerspective' in documentHead.style
    || /* istanbul ignore next */'perspective' in documentHead.style;

  /**
   * Add eventListener to an `HTMLElement` | `Document` target.
   *
   * @type {SHORTY.OnOff<EventTarget>}
   */
  function on(element, eventName, listener, options) {
    var ops = options || false;
    element.addEventListener(eventName, listener, ops);
  }

  /**
   * Remove eventListener from an `HTMLElement` | `Document` | `Window` target.
   *
   * @type {SHORTY.OnOff<EventTarget>}
   */
  function off(element, eventName, listener, options) {
    var ops = options || false;
    element.removeEventListener(eventName, listener, ops);
  }

  /**
   * Add an `eventListener` to an `HTMLElement` | `Document` | `Window`
   * target and remove it once callback is called.
   *
   * @type {SHORTY.OnOff<EventTarget>}
   */
  function one(element, eventName, listener, options) {
  /**
   * Wrap the listener for easy on -> off
   * @type {EventListener}
   */
    var handlerWrapper = function (e) {
      /* istanbul ignore else */
      if (e.target === element) {
        listener.apply(element, [e]);
        off(element, eventName, handlerWrapper, options);
      }
    };
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
      /* istanbul ignore next */
      one(document, DOMContentLoadedEvent, function () {}, opts);
    } catch (e) {
      // throw Error('Passive events are not supported');
    }

    return result;
  })();

  /**
   * A global `boolean` for CSS3 transform support.
   * @type {boolean}
   */
  var supportTransform = 'webkitTransform' in documentHead.style
    || /* istanbul ignore next */'transform' in documentHead.style;

  /**
   * A global `boolean` for touch events support.
   * @type {boolean}
   */
  var supportTouch = 'ontouchstart' in window
    || /* istanbul ignore next */'msMaxTouchPoints' in navigator;

  /**
   * A global `boolean` for CSS3 animation support.
   * @type {boolean}
   */
  var supportAnimation = 'webkitAnimation' in documentHead.style
    || /* istanbul ignore next */'animation' in documentHead.style;

  /**
   * A global `boolean` for CSS3 transition support.
   * @type {boolean}
   */
  var supportTransition = 'webkitTransition' in documentHead.style
    || /* istanbul ignore next */'transition' in documentHead.style;

  /**
   * Shortcut for `HTMLElement.getAttribute()` method.
   * @param {HTMLElement} element target element
   * @param {string} attribute attribute name
   * @returns {string?} attribute value
   */
  var getAttribute = function (element, attribute) { return element.getAttribute(attribute); };

  /**
   * Shortcut for `HTMLElement.getAttributeNS()` method.
   * @param {string} ns attribute namespace
   * @param {HTMLElement} element target element
   * @param {string} attribute attribute name
   * @returns {string?} attribute value
   */
  var getAttributeNS = function (ns, element, attribute) { return element.getAttributeNS(ns, attribute); };

  /**
   * Shortcut for `HTMLElement.hasAttribute()` method.
   * @param  {HTMLElement} element target element
   * @param  {string} attribute attribute name
   * @returns {boolean} the query result
   */
  var hasAttribute = function (element, attribute) { return element.hasAttribute(attribute); };

  /**
   * Shortcut for `HTMLElement.hasAttributeNS()` method.
   * @param  {string} ns attribute namespace
   * @param  {HTMLElement} element target element
   * @param  {string} att attribute name
   * @returns {boolean} the query result
   */
  var hasAttributeNS = function (ns, element, att) { return element.hasAttributeNS(ns, att); };

  /**
   * Shortcut for `HTMLElement.setAttribute()` method.
   * @param  {HTMLElement} element target element
   * @param  {string} attribute attribute name
   * @param  {string} value attribute value
   * @returns {void}
   */
  var setAttribute = function (element, attribute, value) { return element.setAttribute(attribute, value); };

  /**
   * Shortcut for `SVGElement.setAttributeNS()` method.
   * @param  {string} ns attribute namespace
   * @param  {HTMLElement} element target element
   * @param  {string} att attribute name
   * @param  {string} value attribute value
   * @returns {void}
   */
  var setAttributeNS = function (ns, element, att, value) { return element.setAttributeNS(ns, att, value); };

  /**
   * Shortcut for `HTMLElement.removeAttribute()` method.
   * @param  {HTMLElement} element target element
   * @param  {string} attribute attribute name
   * @returns {void}
   */
  var removeAttribute = function (element, attribute) { return element.removeAttribute(attribute); };

  /**
   * Shortcut for `HTMLElement.removeAttributeNS()` method.
   * @param  {string} ns attribute namespace
   * @param  {HTMLElement} element target element
   * @param  {string} att attribute name
   * @returns {void}
   */
  var removeAttributeNS = function (ns, element, att) { return element.removeAttributeNS(ns, att); };

  /**
   * Add class to `HTMLElement.classList`.
   *
   * @param {HTMLElement} element target
   * @param {string} classNAME to add
   * @returns {void}
   */
  function addClass(element, classNAME) {
    element.classList.add(classNAME);
  }

  /**
   * Remove class from `HTMLElement.classList`.
   *
   * @param {HTMLElement} element target
   * @param {string} classNAME to remove
   * @returns {void}
   */
  function removeClass(element, classNAME) {
    element.classList.remove(classNAME);
  }

  /**
   * Check class in `HTMLElement.classList`.
   *
   * @param {HTMLElement} element target
   * @param {string} classNAME to check
   * @returns {boolean}
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
   * Checks if an element is an `HTMLElement`.
   * @see https://dom.spec.whatwg.org/#node
   *
   * @param {any} element the target object
   * @returns {boolean} the query result
   */
  var isHTMLElement = function (element) { return (element && element.nodeType === 1) || false; };

  /** @type {Map<string, Map<HTMLElement, Record<string, any>>>} */
  var componentData = new Map();
  /**
   * An interface for web components background data.
   * @see https://github.com/thednp/bootstrap.native/blob/master/src/components/base-component.js
   */
  var Data = {
    /**
     * Sets web components data.
     * @param {HTMLElement} element target element
     * @param {string} component the component's name or a unique key
     * @param {Record<string, any>} instance the component instance
     */
    set: function (element, component, instance) {
      if (!isHTMLElement(element)) { return; }

      /* istanbul ignore else */
      if (!componentData.has(component)) {
        componentData.set(component, new Map());
      }

      var instanceMap = componentData.get(component);
      // not undefined, but defined right above
      instanceMap.set(element, instance);
    },

    /**
     * Returns all instances for specified component.
     * @param {string} component the component's name or a unique key
     * @returns {Map<HTMLElement, Record<string, any>>?} all the component instances
     */
    getAllFor: function (component) {
      var instanceMap = componentData.get(component);

      return instanceMap || null;
    },

    /**
     * Returns the instance associated with the target.
     * @param {HTMLElement} element target element
     * @param {string} component the component's name or a unique key
     * @returns {Record<string, any>?} the instance
     */
    get: function (element, component) {
      if (!isHTMLElement(element) || !component) { return null; }
      var allForC = Data.getAllFor(component);
      var instance = element && allForC && allForC.get(element);

      return instance || null;
    },

    /**
     * Removes web components data.
     * @param {HTMLElement} element target element
     * @param {string} component the component's name or a unique key
     */
    remove: function (element, component) {
      var instanceMap = componentData.get(component);
      if (!instanceMap || !isHTMLElement(element)) { return; }

      instanceMap.delete(element);

      /* istanbul ignore else */
      if (instanceMap.size === 0) {
        componentData.delete(component);
      }
    },
  };

  /**
   * An alias for `Data.get()`.
   * @type {SHORTY.getInstance<any>}
   */
  var getInstance = function (target, component) { return Data.get(target, component); };

  /**
   * Checks if an object is a `Node`.
   *
   * @param {any} node the target object
   * @returns {boolean} the query result
   */
  var isNode = function (element) { return (element && [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    .some(function (x) { return +element.nodeType === x; })) || false; };

  /**
   * Check if a target object is `Window`.
   * => equivalent to `object instanceof Window`
   *
   * @param {any} object the target object
   * @returns {boolean} the query result
   */
  var isWindow = function (object) { return (object && object.constructor.name === 'Window') || false; };

  /**
   * Checks if an object is a `Document`.
   * @see https://dom.spec.whatwg.org/#node
   *
   * @param {any} object the target object
   * @returns {boolean} the query result
   */
  var isDocument = function (object) { return (object && object.nodeType === 9) || false; };

  /**
   * Returns the `document` or the `#document` element.
   * @see https://github.com/floating-ui/floating-ui
   * @param {(Node | Window)=} node
   * @returns {Document}
   */
  function getDocument(node) {
    // node instanceof Document
    if (isDocument(node)) { return node; }
    // node instanceof Node
    if (isNode(node)) { return node.ownerDocument; }
    // node instanceof Window
    if (isWindow(node)) { return node.document; }
    // node is undefined | NULL
    return window.document;
  }

  /**
   * Shortcut for `Object.assign()` static method.
   * @param  {Record<string, any>} obj a target object
   * @param  {Record<string, any>} source a source object
   */
  var ObjectAssign = function (obj, source) { return Object.assign(obj, source); };

  /**
   * This is a shortie for `document.createElement` method
   * which allows you to create a new `HTMLElement` for a given `tagName`
   * or based on an object with specific non-readonly attributes:
   * `id`, `className`, `textContent`, `style`, etc.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
   *
   * @param {Record<string, string> | string} param `tagName` or object
   * @return {HTMLElement} a new `HTMLElement` or `Element`
   */
  function createElement(param) {
    if (!param) { return null; }

    if (typeof param === 'string') {
      return getDocument().createElement(param);
    }

    var tagName = param.tagName;
    var attr = Object.assign({}, param);
    var newElement = createElement(tagName);
    delete attr.tagName;
    ObjectAssign(newElement, attr);
    return newElement;
  }

  /**
   * Shortcut for `Object.entries()` static method.
   * @param  {Record<string, any>} obj a target object
   * @returns {[string, any][]}
   */
  var ObjectEntries = function (obj) { return Object.entries(obj); };

  /**
   * This is a shortie for `document.createElementNS` method
   * which allows you to create a new `HTMLElement` for a given `tagName`
   * or based on an object with specific non-readonly attributes:
   * `id`, `className`, `textContent`, `style`, etc.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/createElementNS
   *
   * @param {string} namespace `namespaceURI` to associate with the new `HTMLElement`
   * @param {Record<string, string> | string} param `tagName` or object
   * @return {HTMLElement} a new `HTMLElement` or `Element`
   */
  function createElementNS(namespace, param) {
    if (!namespace && !param) { return null; }
    if (typeof param === 'string') {
      return getDocument().createElementNS(namespace, param);
    }

    var tagName = param.tagName;
    var attr = Object.assign({}, param);
    var newElement = createElementNS(namespace, tagName);
    delete attr.tagName;
    ObjectEntries(attr).forEach(function (ref) {
      var key = ref[0];
      var value = ref[1];

      setAttribute(newElement, key, value);
    });
    return newElement;
  }

  /**
   * Shortcut for the `Element.dispatchEvent(Event)` method.
   *
   * @param {HTMLElement} element is the target
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
   * @param {HTMLElement} element target
   * @param {string} property the css property
   * @return {string} the css property value
   */
  function getElementStyle(element, property) {
    var computedStyle = getComputedStyle(element);

    // must use camelcase strings,
    // or non-camelcase strings with `getPropertyValue`
    return property.includes('--')
      ? computedStyle.getPropertyValue(property)
      : computedStyle[property];
  }

  /**
   * Utility to get the computed `animationDelay`
   * from Element in miliseconds.
   *
   * @param {HTMLElement} element target
   * @return {number} the value in miliseconds
   */
  function getElementAnimationDelay$1(element) {
    var propertyValue = getElementStyle(element, animationName$1);
    var durationValue = getElementStyle(element, animationDelay$1);
    var durationScale = durationValue.includes('ms') ? /* istanbul ignore next */1 : 1000;
    var duration = propertyValue && propertyValue !== 'none'
      ? parseFloat(durationValue) * durationScale : 0;

    /* istanbul ignore next */
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
    var propertyValue = getElementStyle(element, animationName$1);
    var durationValue = getElementStyle(element, animationDuration$1);
    var durationScale = durationValue.includes('ms') ? /* istanbul ignore next */1 : 1000;
    var duration = propertyValue && propertyValue !== 'none'
      ? parseFloat(durationValue) * durationScale : 0;

    return !Number.isNaN(duration) ? duration : /* istanbul ignore next */0;
  }

  /**
   * Utility to make sure callbacks are consistently
   * called when animation ends.
   *
   * @param {HTMLElement} element target
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
       * @type {EventListener}
       */
      var animationEndWrapper = function (e) {
        /* istanbul ignore else */
        if (e.target === element) {
          handler.apply(element, [e]);
          element.removeEventListener(animationEndEvent$1, animationEndWrapper);
          called = 1;
        }
      };
      element.addEventListener(animationEndEvent$1, animationEndWrapper);
      setTimeout(function () {
        /* istanbul ignore next */
        if (!called) { dispatchEvent(element, endEvent); }
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
    var propertyValue = getElementStyle(element, animationName);
    var durationValue = getElementStyle(element, animationDelay);
    var durationScale = durationValue.includes('ms') ? /* istanbul ignore next */1 : 1000;
    var duration = supportAnimation && propertyValue && propertyValue !== 'none'
      ? parseFloat(durationValue) * durationScale : 0;

    return !Number.isNaN(duration) ? duration : /* istanbul ignore next */0;
  }

  /**
   * Utility to get the computed `animationDuration`
   * from `HTMLElement` in miliseconds.
   *
   * @param {HTMLElement} element target
   * @return {number} the value in miliseconds
   */
  function getElementAnimationDuration(element) {
    var propertyValue = getElementStyle(element, animationName);
    var durationValue = getElementStyle(element, animationDuration);
    var durationScale = durationValue.includes('ms') ? /* istanbul ignore next */1 : 1000;
    var duration = supportAnimation && propertyValue && propertyValue !== 'none'
      ? parseFloat(durationValue) * durationScale : 0;

    return !Number.isNaN(duration) ? duration : /* istanbul ignore next */0;
  }

  /**
   * Utility to make sure callbacks are consistently
   * called when animation ends.
   *
   * @param {HTMLElement} element target
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
        /* istanbul ignore else */
        if (e.target === element) {
          handler.apply(element, [e]);
          element.removeEventListener(animationEndEvent, animationEndWrapper);
          called = 1;
        }
      };
      element.addEventListener(animationEndEvent, animationEndWrapper);
      setTimeout(function () {
        /* istanbul ignore next */
        if (!called) { dispatchEvent(element, endEvent); }
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
    var propertyValue = getElementStyle(element, transitionProperty$1);
    var delayValue = getElementStyle(element, transitionDelay$1);
    var delayScale = delayValue.includes('ms') ? /* istanbul ignore next */1 : 1000;
    var duration = propertyValue && propertyValue !== 'none'
      ? parseFloat(delayValue) * delayScale : 0;

    return !Number.isNaN(duration) ? duration : /* istanbul ignore next */0;
  }

  /**
   * Utility to get the computed `transitionDuration`
   * from Element in miliseconds.
   *
   * @param {HTMLElement} element target
   * @return {number} the value in miliseconds
   */
  function getElementTransitionDuration$1(element) {
    var propertyValue = getElementStyle(element, transitionProperty$1);
    var durationValue = getElementStyle(element, transitionDuration$1);
    var durationScale = durationValue.includes('ms') ? /* istanbul ignore next */1 : 1000;
    var duration = propertyValue && propertyValue !== 'none'
      ? parseFloat(durationValue) * durationScale : 0;

    return !Number.isNaN(duration) ? duration : /* istanbul ignore next */0;
  }

  /**
   * Utility to make sure callbacks are consistently
   * called when transition ends.
   *
   * @param {HTMLElement} element target
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
       * @type {EventListener} e Event object
       */
      var transitionEndWrapper = function (e) {
        /* istanbul ignore else */
        if (e.target === element) {
          handler.apply(element, [e]);
          element.removeEventListener(transitionEndEvent$1, transitionEndWrapper);
          called = 1;
        }
      };
      element.addEventListener(transitionEndEvent$1, transitionEndWrapper);
      setTimeout(function () {
        /* istanbul ignore next */
        if (!called) { dispatchEvent(element, endEvent); }
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
    var propertyValue = getElementStyle(element, transitionProperty);
    var delayValue = getElementStyle(element, transitionDelay);
    var delayScale = delayValue.includes('ms') ? /* istanbul ignore next */1 : 1000;
    var duration = supportTransition && propertyValue && propertyValue !== 'none'
      ? parseFloat(delayValue) * delayScale : 0;

    return !Number.isNaN(duration) ? duration : /* istanbul ignore next */0;
  }

  /**
   * Utility to get the computed `transitionDuration`
   * from Element in miliseconds.
   *
   * @param {HTMLElement} element target
   * @return {number} the value in miliseconds
   */
  function getElementTransitionDuration(element) {
    var propertyValue = getElementStyle(element, transitionProperty);
    var durationValue = getElementStyle(element, transitionDuration);
    var durationScale = durationValue.includes('ms') ? /* istanbul ignore next */1 : 1000;
    var duration = supportTransition && propertyValue && propertyValue !== 'none'
      ? parseFloat(durationValue) * durationScale : 0;

    return !Number.isNaN(duration) ? duration : /* istanbul ignore next */0;
  }

  /**
   * Utility to make sure callbacks are consistently
   * called when transition ends.
   *
   * @param {HTMLElement} element target
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
        /* istanbul ignore else */
        if (e.target === element) {
          handler.apply(element, [e]);
          element.removeEventListener(transitionEndEvent, transitionEndWrapper);
          called = 1;
        }
      };
      element.addEventListener(transitionEndEvent, transitionEndWrapper);
      setTimeout(function () {
        /* istanbul ignore next */
        if (!called) { dispatchEvent(element, endEvent); }
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
   * @param {HTMLElement} element is the target
   */
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
    if (['true', true].includes(value)) { // boolean
    // if ('true' === value) { // boolean
      return true;
    }

    if (['false', false].includes(value)) { // boolean
    // if ('false' === value) { // boolean
      return false;
    }

    if (value === '' || value === 'null') { // null
      return null;
    }

    if (value !== '' && !Number.isNaN(+value)) { // number
      return +value;
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
   * Shortcut for `String.toLowerCase()`.
   *
   * @param {string} source input string
   * @returns {string} lowercase output string
   */
  var toLowerCase = function (source) { return source.toLowerCase(); };

  /**
   * Utility to normalize component options.
   *
   * @param {HTMLElement} element target
   * @param {Record<string, any>} defaultOps component default options
   * @param {Record<string, any>} inputOps component instance options
   * @param {string=} ns component namespace
   * @return {Record<string, any>} normalized component options object
   */
  function normalizeOptions(element, defaultOps, inputOps, ns) {
    var data = Object.assign({}, element.dataset);
    /** @type {Record<string, any>} */
    var normalOps = {};
    /** @type {Record<string, any>} */
    var dataOps = {};
    var title = 'title';

    ObjectKeys(data).forEach(function (k) {
      var key = ns && k.includes(ns)
        ? k.replace(ns, '').replace(/[A-Z]/, function (match) { return toLowerCase(match); })
        : k;

      dataOps[key] = normalizeValue(data[k]);
    });

    ObjectKeys(inputOps).forEach(function (k) {
      inputOps[k] = normalizeValue(inputOps[k]);
    });

    ObjectKeys(defaultOps).forEach(function (k) {
      /* istanbul ignore else */
      if (k in inputOps) {
        normalOps[k] = inputOps[k];
      } else if (k in dataOps) {
        normalOps[k] = dataOps[k];
      } else {
        normalOps[k] = k === title
          ? getAttribute(element, title)
          : defaultOps[k];
      }
    });

    return normalOps;
  }

  /**
   * Shortcut for `Object.values()` static method.
   * @param  {Record<string, any>} obj a target object
   * @returns {any[]}
   */
  var ObjectValues = function (obj) { return Object.values(obj); };

  /**
   * Checks if an object is an `Object`.
   *
   * @param {any} obj the target object
   * @returns {boolean} the query result
   */
  var isObject = function (obj) { return (typeof obj === 'object') || false; };

  /**
   * Returns a namespaced `CustomEvent` specific to each component.
   * @param {string} EventType Event.type
   * @param {Record<string, any>=} config Event.options | Event.properties
   * @returns {SHORTY.OriginalEvent} a new namespaced event
   */
  function OriginalEvent(EventType, config) {
    var OriginalCustomEvent = new CustomEvent(EventType, {
      cancelable: true, bubbles: true,
    });

    /* istanbul ignore else */
    if (isObject(config)) {
      ObjectAssign(OriginalCustomEvent, config);
    }
    return OriginalCustomEvent;
  }

  /**
   * A global namespace for most scroll event listeners.
   * @type {Partial<AddEventListenerOptions>}
   */
  var passiveHandler$1 = { passive: true };

  /**
   * A global namespace for most scroll event listeners in legacy browsers.
   * @type {Partial<AddEventListenerOptions> | boolean}
   */
  var passiveHandler = supportPassive ? { passive: true }
    : /* istanbul ignore next */false;

  /**
   * Utility to force re-paint of an `HTMLElement` target.
   *
   * @param {HTMLElement} element is the target
   * @return {number} the `Element.offsetHeight` value
   */
  var reflow = function (element) { return element.offsetHeight; };

  /**
   * Shortcut for multiple uses of `HTMLElement.style.propertyName` method.
   * @param  {HTMLElement} element target element
   * @param  {Partial<CSSStyleDeclaration>} styles attribute value
   */
  var setElementStyle = function (element, styles) {
    ObjectEntries(styles).forEach(function (ref) {
      var key = ref[0];
      var value = ref[1];

      if (key.includes('--')) {
        element.style.setProperty(key, value);
      } else {
        var propObject = {}; propObject[key] = value;
        ObjectAssign(element.style, propObject);
      }
    });
  };

  /** @type {Map<HTMLElement, any>} */
  var TimeCache = new Map();
  /**
   * An interface for one or more `TimerHandler`s per `Element`.
   * @see https://github.com/thednp/navbar.js/
   */
  var Timer = {
    /**
     * Sets a new timeout timer for an element, or element -> key association.
     * @param {HTMLElement} element target element
     * @param {ReturnType<TimerHandler>} callback the callback
     * @param {number} delay the execution delay
     * @param {string=} key a unique key
     */
    set: function (element, callback, delay, key) {
      if (!isHTMLElement(element)) { return; }

      /* istanbul ignore else */
      if (key && key.length) {
        /* istanbul ignore else */
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
     * @param {HTMLElement} element target element
     * @param {string=} key a unique
     * @returns {number?} the timer
     */
    get: function (element, key) {
      if (!isHTMLElement(element)) { return null; }
      var keyTimers = TimeCache.get(element);

      if (key && key.length && keyTimers && keyTimers.get) {
        return keyTimers.get(key) || /* istanbul ignore next */null;
      }
      return keyTimers || null;
    },

    /**
     * Clears the element's timer.
     * @param {HTMLElement} element target element
     * @param {string=} key a unique key
     */
    clear: function (element, key) {
      if (!isHTMLElement(element)) { return; }

      if (key && key.length) {
        var keyTimers = TimeCache.get(element);
        /* istanbul ignore else */
        if (keyTimers && keyTimers.get) {
          clearTimeout(keyTimers.get(key));
          keyTimers.delete(key);
          /* istanbul ignore else */
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
   * Shortcut for `String.toUpperCase()`.
   *
   * @param {string} source input string
   * @returns {string} uppercase output string
   */
  var toUpperCase = function (source) { return source.toUpperCase(); };

  /**
   * Returns the bounding client rect of a target `HTMLElement`.
   *
   * @see https://github.com/floating-ui/floating-ui
   *
   * @param {HTMLElement} element event.target
   * @param {boolean=} includeScale when *true*, the target scale is also computed
   * @returns {SHORTY.BoundingClientRect} the bounding client rect object
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

    if (includeScale && isHTMLElement(element)) {
      var offsetWidth = element.offsetWidth;
      var offsetHeight = element.offsetHeight;
      scaleX = offsetWidth > 0 ? Math.round(width) / offsetWidth
        : /* istanbul ignore next */1;
      scaleY = offsetHeight > 0 ? Math.round(height) / offsetHeight
        : /* istanbul ignore next */1;
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
   * @param {(Node | Window)=} node
   * @returns {HTMLBodyElement}
   */
  function getDocumentBody(node) {
    return getDocument(node).body;
  }

  /**
   * Returns the `document.documentElement` or the `<html>` element.
   *
   * @param {(Node | Window)=} node
   * @returns {HTMLHtmlElement}
   */
  function getDocumentElement(node) {
    return getDocument(node).documentElement;
  }

  /**
   * Returns the `document.head` or the `<head>` element.
   *
   * @param {(Node | Window)=} node
   * @returns {HTMLHeadElement}
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
   * @param {HTMLElement | Window} element target node / element
   * @returns {{x: number, y: number}} the scroll tuple
   */
  function getNodeScroll(element) {
    var isWin = 'scrollX' in element;
    var x = isWin ? element.scrollX : element.scrollLeft;
    var y = isWin ? element.scrollY : element.scrollTop;

    return { x: x, y: y };
  }

  /**
   * Check if target is a `ShadowRoot`.
   *
   * @param {any} element target
   * @returns {boolean} the query result
   */
  var isShadowRoot = function (element) { return (element && element.constructor.name === 'ShadowRoot')
    || false; };

  /**
   * Returns the `parentNode` also going through `ShadowRoot`.
   * @see https://github.com/floating-ui/floating-ui
   *
   * @param {Node} node the target node
   * @returns {Node} the apropriate parent node
   */
  function getParentNode(node) {
    if (node.nodeName === 'HTML') {
      return node;
    }

    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    return (
      node.assignedSlot // step into the shadow DOM of the parent of a slotted node
      || node.parentNode // DOM Element detected
      || (isShadowRoot(node) && node.host) // ShadowRoot detected
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
    if (!element || !isHTMLElement(element)) { return false; }
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
   * @param {HTMLElement} element target
   * @param {ParentNode | Window} offsetParent the container / offset parent
   * @param {{x: number, y: number}} scroll the offsetParent scroll position
   * @returns {SHORTY.OffsetRect}
   */
  function getRectRelativeToOffsetParent(element, offsetParent, scroll) {
    var isParentAnElement = isHTMLElement(offsetParent);
    var rect = getBoundingClientRect(element, isParentAnElement && isScaledElement(offsetParent));
    var offsets = { x: 0, y: 0 };

    /* istanbul ignore next */
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

  var elementUID = 0;
  var elementMapUID = 0;
  var elementIDMap = new Map();

  /**
   * Returns a unique identifier for popover, tooltip, scrollspy.
   *
   * @param {HTMLElement} element target element
   * @param {string=} key predefined key
   * @returns {number} an existing or new unique ID
   */
  function getUID(element, key) {
    var result = key ? elementUID : elementMapUID;

    if (key) {
      var elID = getUID(element);
      var elMap = elementIDMap.get(elID) || new Map();
      if (!elementIDMap.has(elID)) {
        elementIDMap.set(elID, elMap);
      }
      if (!elMap.has(key)) {
        elMap.set(key, result);
        elementUID += 1;
      } else { result = elMap.get(key); }
    } else {
      var elkey = element.id || element;

      if (!elementIDMap.has(elkey)) {
        elementIDMap.set(elkey, result);
        elementMapUID += 1;
      } else { result = elementIDMap.get(elkey); }
    }
    return result;
  }

  /**
   * Returns the `Window` object of a target node.
   * @see https://github.com/floating-ui/floating-ui
   *
   * @param {(Node | Window)=} node target node
   * @returns {Window} the `Window` object
   */
  function getWindow(node) {
    // node is undefined | NULL
    if (!node) { return window; }
    // node instanceof Document
    if (isDocument(node)) { return node.defaultView; }
    // node instanceof Node
    if (isNode(node)) { return node.ownerDocument.defaultView; }
    // node is instanceof Window
    return node;
  }

  /**
   * Shortcut for `Array.isArray()` static method.
   *
   * @param  {any} arr array-like iterable object
   * @returns {boolean} the query result
   */
  var isArray = function (arr) { return Array.isArray(arr); };

  /**
   * Checks if an object is a `CustomElement`.
   *
   * @param {any} element the target object
   * @returns {boolean} the query result
   */
  var isCustomElement = function (element) { return (element && !!element.shadowRoot) || false; };

  /**
   * Checks if an object is an `Element`.
   * @see https://dom.spec.whatwg.org/#node
   * ELEMENT_NODE = 1;
   * ATTRIBUTE_NODE = 2;
   * TEXT_NODE = 3;
   * CDATA_SECTION_NODE = 4;
   * ENTITY_REFERENCE_NODE = 5; // legacy
   * ENTITY_NODE = 6; // legacy
   * PROCESSING_INSTRUCTION_NODE = 7;
   * COMMENT_NODE = 8;
   * DOCUMENT_NODE = 9;
   * DOCUMENT_TYPE_NODE = 10;
   * DOCUMENT_FRAGMENT_NODE = 11;
   *
   * @param {any} element the target object
   * @returns {boolean} the query result
   */
  var isElement = function (element) { return (element && [1, 2, 3, 4, 5, 6, 7, 8]
    .some(function (x) { return element.nodeType === x; })) || false; };

  /**
   * Utility to determine if an `HTMLElement`
   * is partially visible in viewport.
   *
   * @param {HTMLElement} element target
   * @return {boolean} the query result
   */
  var isElementInScrollRange = function (element) {
    if (!element || !isNode(element)) { return false; }

    var ref = getBoundingClientRect(element);
    var top = ref.top;
    var bottom = ref.bottom;
    var ref$1 = getDocumentElement(element);
    var clientHeight = ref$1.clientHeight;
    return top <= clientHeight && bottom >= 0;
  };

  /**
   * Utility to determine if an `HTMLElement`
   * is fully visible in the viewport.
   *
   * @param {HTMLElement} element target
   * @return {boolean} the query result
   */
  var isElementInViewport = function (element) {
    if (!element || !isNode(element)) { return false; }

    var ref = getDocumentElement(element);
    var clientWidth = ref.clientWidth;
    var clientHeight = ref.clientHeight;
    var ref$1 = getBoundingClientRect(element, true);
    var top = ref$1.top;
    var left = ref$1.left;
    var bottom = ref$1.bottom;
    var right = ref$1.right;

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
    && object.every(isHTMLElement); };

  /**
   * Checks if an object is a `Function`.
   *
   * @param {any} fn the target object
   * @returns {boolean} the query result
   */
  var isFunction = function (fn) { return (fn && fn.constructor.name === 'Function') || false; };

  /**
   * Checks if an object is an `HTMLCollection`.
   *
   * @param {any} object the target object
   * @returns {boolean} the query result
   */
  var isHTMLCollection = function (object) { return (object && object.constructor.name === 'HTMLCollection') || false; };

  /**
   * Check if a target element is an `<img>`.
   * @param {any} element the target element
   * @returns {boolean} the query result
   */
  var isHTMLImageElement = function (element) { return (element && element.tagName === 'IMG') || false; };

  /**
   * Checks if an element is an `<svg>` (or any type of SVG element),
   * `<img>` or `<video>`.
   *
   * *Tooltip* / *Popover* works different with media elements.
   * @param {any} element the target element
   * @returns {boolean} the query result
   */

  var isMedia = function (element) { return (
    element
    && element.nodeType === 1
    && ['SVG', 'Image', 'Video'].some(function (s) { return element.constructor.name.includes(s); })) || false; };

  /**
   * Checks if an object is a `NodeList`.
   * => equivalent to `object instanceof NodeList`
   *
   * @param {any} object the target object
   * @returns {boolean} the query result
   */
  var isNodeList = function (object) { return (object && object.constructor.name === 'NodeList') || false; };

  /**
   * Shortcut for `typeof SOMETHING === "number"`.
   *
   * @param  {any} num input value
   * @returns {boolean} the query result
   */
  var isNumber = function (num) { return typeof num === 'number'; };

  /**
   * Checks if a page is Right To Left.
   * @param {HTMLElement=} node the target
   * @returns {boolean} the query result
   */
  var isRTL = function (node) { return getDocumentElement(node).dir === 'rtl'; };

  /**
   * Shortcut for `typeof SOMETHING === "string"`.
   *
   * @param  {any} str input value
   * @returns {boolean} the query result
   */
  var isString = function (str) { return typeof str === 'string'; };

  /**
   * Check if an element is an `<svg>` or any other SVG element.
   * @param {any} element the target element
   * @returns {boolean} the query result
   */
  var isSVGElement = function (element) { return (element && element instanceof getWindow(element).SVGElement)
    || false; };

  /**
   * Check if a target element is a `<table>`, `<td>` or `<th>`.
   * This specific check is important for determining
   * the `offsetParent` of a given element.
   *
   * @param {any} element the target element
   * @returns {boolean} the query result
   */
  var isTableElement = function (element) { return (element && ['TABLE', 'TD', 'TH'].includes(element.tagName))
    || false; };

  /**
   * Shortcut for `HTMLElement.closest` method which also works
   * with children of `ShadowRoot`. The order of the parameters
   * is intentional since they're both required.
   *
   * @see https://stackoverflow.com/q/54520554/803358
   *
   * @param {HTMLElement} element Element to look into
   * @param {string} selector the selector name
   * @return {HTMLElement?} the query result
   */
  function closest(element, selector) {
    return element ? (element.closest(selector)
      // break out of `ShadowRoot`
      || closest(element.getRootNode().host, selector)) : null;
  }

  /**
   * Utility to check if target is typeof `HTMLElement`, `Element`, `Node`
   * or find one that matches a selector.
   *
   * @param {Node | string} selector the input selector or target element
   * @param {ParentNode=} parent optional node to look into
   * @return {HTMLElement?} the `HTMLElement` or `querySelector` result
   */
  function querySelector(selector, parent) {
    if (isNode(selector)) {
      return selector;
    }
    var lookUp = isNode(parent) ? parent : getDocument();

    return lookUp.querySelector(selector);
  }

  /**
   * Shortcut for `HTMLElement.getElementsByTagName` method. Some `Node` elements
   * like `ShadowRoot` do not support `getElementsByTagName`.
   *
   * @param {string} selector the tag name
   * @param {ParentNode=} parent optional Element to look into
   * @return {HTMLCollectionOf<HTMLElement>} the 'HTMLCollection'
   */
  function getElementsByTagName(selector, parent) {
    var lookUp = isNode(parent) ? parent : getDocument();
    return lookUp.getElementsByTagName(selector);
  }

  /**
   * Returns an `Array` of `Node` elements that are registered as
   * `CustomElement`.
   * @see https://stackoverflow.com/questions/27334365/how-to-get-list-of-registered-custom-elements
   *
   * @param {ParentNode=} parent parent to look into
   * @returns {Array<HTMLElement>} the query result
   */
  function getCustomElements(parent) {
    var collection = getElementsByTagName('*', parent);

    return [].concat( collection ).filter(isCustomElement);
  }

  /**
   * Returns an `Element` that matches the id in the document.
   * Within multiple <iframe> elements, a `parent` parameter
   * would decisively locate the correct element.
   *
   * @param {string} id
   * @param {ParentNode=} context
   * @returns {HTMLElement?}
   */
  function getElementById(id, context) {
    return getDocument(context).getElementById(id);
  }

  /**
   * A shortcut for `(document|Element).querySelectorAll`.
   *
   * @param {string} selector the input selector
   * @param {ParentNode=} parent optional node to look into
   * @return {NodeListOf<HTMLElement>} the query result
   */
  function querySelectorAll(selector, parent) {
    var lookUp = isNode(parent) ? parent : getDocument();
    return lookUp.querySelectorAll(selector);
  }

  /**
   * Shortcut for `HTMLElement.getElementsByClassName` method. Some `Node` elements
   * like `ShadowRoot` do not support `getElementsByClassName`.
   *
   * @param {string} selector the class name
   * @param {ParentNode=} parent optional Element to look into
   * @return {HTMLCollectionOf<HTMLElement>} the 'HTMLCollection'
   */
  function getElementsByClassName(selector, parent) {
    var lookUp = isNode(parent) ? parent : getDocument();
    return lookUp.getElementsByClassName(selector);
  }

  /**
   * Check if element matches a CSS selector.
   *
   * @param {HTMLElement} target
   * @param {string} selector
   * @returns {boolean}
   */
  function matches$1(target, selector) {
    return target.matches(selector);
  }

  var ElementProto = Element.prototype;

  var matchesFn = ElementProto.matches
    || /* istanbul ignore next */ ElementProto.matchesSelector
    || /* istanbul ignore next */ ElementProto.webkitMatchesSelector
    || /* istanbul ignore next */ ElementProto.mozMatchesSelector
    || /* istanbul ignore next */ ElementProto.msMatchesSelector
    || /* istanbul ignore next */ ElementProto.oMatchesSelector
    || /* istanbul ignore next */ function matchesNotSupported() {
      return false;
    };

  /**
   * Check if element matches a CSS selector,
   * supporting a range of legacy browsers.
   *
   * @param {HTMLElement} target
   * @param {string} selector
   * @returns {boolean}
   */
  function matches(target, selector) {
    return matchesFn.call(target, selector);
  }

  var version = "1.0.3";

  /**
   * A global namespace for library version.
   * @type {string}
   */
  var Version = version;

  /** @typedef {import('../types/index')} */

  var SHORTY = {
    ariaChecked: ariaChecked,
    ariaDescription: ariaDescription,
    ariaDescribedBy: ariaDescribedBy,
    ariaExpanded: ariaExpanded,
    ariaHidden: ariaHidden,
    ariaHasPopup: ariaHasPopup,
    ariaLabel: ariaLabel,
    ariaLabelledBy: ariaLabelledBy,
    ariaModal: ariaModal,
    ariaPressed: ariaPressed,
    ariaSelected: ariaSelected,
    ariaValueMin: ariaValueMin,
    ariaValueMax: ariaValueMax,
    ariaValueNow: ariaValueNow,
    ariaValueText: ariaValueText,
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
    loadstartEvent: loadstartEvent,
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
    mouseoverEvent: mouseoverEvent,
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
    getInstance: getInstance,
    createElement: createElement,
    createElementNS: createElementNS,
    toUpperCase: toUpperCase,
    toLowerCase: toLowerCase,
    Timer: Timer,
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
    isNumber: isNumber,
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
    isFunction: isFunction,
    isObject: isObject,
    isWindow: isWindow,
    isMedia: isMedia,
    isRTL: isRTL,
    closest: closest,
    querySelector: querySelector,
    getCustomElements: getCustomElements,
    getElementById: getElementById,
    querySelectorAll: querySelectorAll,
    getElementsByClassName: getElementsByClassName,
    getElementsByTagName: getElementsByTagName,
    matches: matches$1,
    matchesLegacy: matches,
    normalizeValue: normalizeValue,
    normalizeOptions: normalizeOptions,
    reflow: reflow,
    noop: noop,
    focus: focus,
    getUID: getUID,
    ArrayFrom: ArrayFrom,
    Float32ArrayFrom: Float32ArrayFrom,
    Float64ArrayFrom: Float64ArrayFrom,
    ObjectAssign: ObjectAssign,
    ObjectEntries: ObjectEntries,
    ObjectKeys: ObjectKeys,
    ObjectValues: ObjectValues,
    OriginalEvent: OriginalEvent,
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

  return SHORTY;

}));
