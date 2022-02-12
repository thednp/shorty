# shorter-js
A small ES6+ library with various JavaScript tools, all ESLint valid and with TypeScript definitions, all useful for creating light libraries.

Featured in [KUTE.js](https://github.com/thednp/kute.js), [BSN](https://github.com/thednp/bootstrap.native), [Navbar.js](https://github.com/thednp/navbar.js) and other libraries.

* The purpose of the library is to speed up the development workflow, minimize the size of larger libraries by providing a shorter syntax for most used JavaScript API methods, most used strings or other helpful utilities.
* While the library comes with a working build in the `dist` folder, that is mainly for build consistency testing. You can make use of "tree shaking" to import one or anything your code needs.

# npm
```
npm install shorter-js
```

# ES6+ Base usage
```js
// import the tool you need
import {supportTransform} from 'shorter-js'

// use the tool in your ES6/ES7 sources
if (supportTransform) {
  doSomeAction()
}
```

# attr
* ***getAttribute*** - returns the value of a specified *Element* attribute
* ***getAttributeNS*** - returns the value of a specified namespaced *Element* attribute (eg: namespaced SVG attributes)
* ***hasAttribute*** - check if element has a specified attribute
* ***hasAttributeNS*** - check if element has a specified namespaced attribute
* ***removeAttribute*** - removes a specified attribute from an element
* ***removeAttributeNS*** - removes a specified namespaced attribute from an element
* ***setAttribute*** - set a new attribute value for a given element
* ***setAttributeNS*** - set a new namespaced attribute value for a given element

# blocks
* ***documentBody*** - a shortcut for `document.body`
* ***documentElement*** - a shortcut for `document.documentElement`
* ***documentHead*** - a shortcut for `document.head`

# boolean
* ***isApple*** - checks and preserves the client browser is a Apple Safari browser
* ***isFirefox*** - checks and preserves the client browser is Firefox
* ***isMobile*** - checks and preserves the client browser is a on Mobile device
* ***support3DTransform*** - checks and preserves the client browser capability for webKit `perspective` 
* ***supportTouch*** - checks and preserves the client browser capability for `touch` events
* ***supportPassive*** - checks and preserves the client browser capability for `passive` event option
* ***supportTransform*** - checks and preserves the client browser capability for webKit `transform` 
* ***supportAnimation*** - checks and preserves the client browser capability for webKit keyframe `animation` 
* ***supportTransition*** - checks and preserves the client browser capability for webKit `transition` 

```js 
// EXAMPLES
import { support3DTransform } from 'shorter-js'

// filter myAction to supported browsers
if (support3DTransform) {
  // do something with modern browsers
}
```
	
# class
* ***addClass*** - add a class to a target *Element*
* ***removeClass*** - remove a class from a target *Element*
* ***hasClass*** - checks the existence of a class for a target *Element*

```js 
// EXAMPLES
import {addClass,removeClass,hasClass} from 'shorter-js'

// add a class
addClass(targetElement,'className')
// remove a class
removeClass(targetElement,'className')
// check for a class
if (hasClass(targetElement,'className')) {
  myAction()
}
```

# event
* ***on*** - attach an event listener to a specific target *Element*;
* ***off*** - detach an event listener from a specific target *Element*;
* ***one*** - attach an event listener to a specific target *Element*, and detach when complete;
```js 
// EXAMPLES
import {on,off,one,passiveHandler} from 'shorter-js'

// attach a passive mousedown eventHandler
on(targetElement,'click',eventHandler,passiveHandler)
// detach a passive mouseup eventHandler
off(targetElement,'mouseup',eventHandler,passiveHandler)
// attach a single instance passive touchstart eventHandler
one(targetElement,'touchstart',eventHandler,passiveHandler)
```

# get
* ***getBoundingClientRect*** - returns the bounding client rectangle of a given *Element*;
* ***getDocument*** - returns the containing `#Document` for a given *Element* or just any *Document*, useful when working with *iframe*s;
* ***getWindow*** - returns the containing `Window` for a given *Element* or just any *Window*;
* ***getDocumentBody*** - returns the containing `<body>` for a given *Element* or just any;
* ***getDocumentElement*** - returns the containing `<html>` for a given *Element* or just any;
* ***getDocumentHead*** - returns the containing `<head>` for a given *Element* or just any;
* ***getElementAnimationDuration*** - returns the `animationDuration` property of a `animation` property;
* ***getElementAnimationDurationLegacy*** - for legacy browsers;
* ***getElementAnimationDelay*** - returns the `animationDelay` property of an `animation` property; 
* ***getElementAnimationDelayLegacy*** - for legacy browsers;
* ***getElementTransitionDuration*** - returns the `transitionDuration` property of a `transition` property;
* ***getElementTransitionDurationLegacy*** - for legacy browsers;
* ***getElementTransitionDelay*** - returns the `transitionDelay` property of a `transition` property;
* ***getElementTransitionDelayLegacy*** - for legacy browsers;
* ***getElementStyle*** - returns the *Element* computed style for a given property;
* ***getNodeScroll*** - returns the *Element* / *Window* current `{ x, y }` scroll position;
* ***getParentNode*** - returns parent of a given *Element*;
* ***getRectRelativeToOffsetParent*** - returns the bounding client rectangle of a given *Element* relative to a given `offsetParent`;

# is
* ***isArray*** - check if a given value is an `Array`;
* ***isCustomElement*** - check if a given value is a `CustomElement` instance;
* ***isDocument*** - check if a given value is a `Document` instance;
* ***isElement*** - check if a given value is an `Element` instance;
* ***isElementInScrollRange*** - check if a given `Element` is partially visible in the viewport;
* ***isElementInViewport*** - check if a given `Element` is fully visible in the viewport;
* ***isElementsArray*** - check if a given value is an `Array` with `Element` instances;
* ***isFunction*** - check if a given value is a `Function` instance;
* ***isHTMLCollection*** - check if a given value is an `HTMLCollection` instance;
* ***isHTMLElement*** - check if a given value is an `HTMLElement` instance;
* ***isHTMLImageElement*** - check if a given value is an `HTMLImageElement` instance;
* ***isMedia*** - check if a given value is an `SVGElement`, `HTMLImageElement` or `HTMLVideoElement` instance;
* ***isNode*** - check if a given value is a `Node` instance;
* ***isNodeList*** - check if a given value is a `NodeList` instance;
* ***isRTL*** - check if a given node is contained in a `<html dir="rtl">`;
* ***isScaledElement*** - check if a given *Element* is affected by scale;
* ***isShadowRoot*** - check if a given *Node* is a `ShadowRoot` instance;
* ***isString*** - check if a given value is string;
* ***isSVGElement*** - check if a given value is `SVGElement` instance;
* ***isTableElement*** - check if a given value is `<table>`, `<td>` or `<th>` *Element*;
* ***isWindow*** - check if a given value is a `Window` instance;


# misc
* ***ArrayFrom*** - a shortie for `Array.from()` method;
* ***Data*** - a small utility to store web components data;
* ***dispatchEvent*** - a shortie for `Element.dispatchEvent()` method;
* ***distinct*** - a shortie you can use to filter duplicate values in an `Array`;
* ***emulateAnimationEnd*** - utility to execute a callback function when `animationend` event is triggered, or execute the callback right after for legacy browsers;
* ***emulateAnimationEndLegacy*** - for legacy browsers;
* ***emulateTransitionEnd*** - utility to execute a callback function when `transitionend` event is triggered, or execute the callback right after for legacy browsers;
* ***emulateTransitionEndLegacy*** - for legacy browsers;
* ***Float32ArrayFrom*** - a shortie for `Float32Array.from()` method;
* ***Float64ArrayFrom*** - a shortie for `Float64Array.from()` method;
* ***focus*** - a shortie for `Element.focus()` method;
* ***getUID*** - a nice utility that creates a unique ID for a given *Element* and returns it;
* ***noop*** - is your regular `() => {}` NOOP;
* ***normalizeOptions*** - a cool utility to normalize and crosscheck JavaScript options and their DATA API counterparts for various web components; supports namespaced options like `data-NAMESPACE-option="value"`; priority: JavaScript options > DATA API options > default options
* ***ObjectAssign*** - a shortie for `Object.assign()` method;
* ***ObjectKeys*** - a shortie for `Object.keys()` method;
* ***ObjectValues*** - a shortie for `Object.values()` method;
* ***OriginalEvent*** - a small utility that returns a synthetic `CustomEvent` with the added `relatedTarget` and other properties;
* ***passiveHandler*** - a constant that preserves a standard listener `options` with `passive: true` event option used;
* ***passiveHandlerLegacy*** - for legacy browsers;
* ***reflow*** - a small utility that force repaint of a given *Element* by "checking" its `offsetHeight` value, also because using just `element.offsetHeight;` won't validate on ESLint;
* ***setElementStyle*** - a small utility that allows you to set multiple CSS properties at once for a given *Element* target;
* ***Timer*** - a small but powerful utility that makes `setTimeout` have a meaning;
* ***toLowerCase*** - a shortie for `String.toLowerCase()` method;
* ***toUpperCase*** - a shortie for `String.toUpperCase()` method;
* ***tryWrapper*** - a simple `try()` and `catch()` wrapper for functions, with option to preffix the error logs, pointing out the context of the errors;

```js 
// EXAMPLES
import {
  querySelector,
  emulateTransitionEnd,
  normalizeOptions,
} from 'shorter-js';

// get some target
let targetElement = querySelector('.mySelectorClass');

// emulateTransitionEnd for the above
emulateTransitionEnd(targetElement, callback);

// check if element is in scroll range
// emulateTransitionEnd for the above
if (isElementInScrollRange(targetElement)) {
  // do something meaningful but not JANKing around
}

// set component options
const options = normalizeOptions(element, defaultOptions, inputOptions, nameSpace);
// element - the component target, the owned of the DATA API attributes
// defaultOptions - the component default options
// inputOptions - the component JavaScript options
// namaSpace - the DATA API namespace 
// ..required to get the value of `data-NAMESPACE-option="value"`
```

# selectors
* ***closest*** - a shortie for `Element.closest()` method;
* ***documentAll*** - a quick bit equivalent of the deprecated `document.all` collection;
* ***getCustomElements*** - returns an `Array` with all registered `CustomElement`;
* ***getElementsByClassName*** - a shortie for `Element.getElementsByClassName()` method;
* ***getElementsByTagName*** - a shortie for `Element.getElementsByTagName()` method;
* ***matches*** - a shortie for `Element.matches()` method;
* ***matchesLegacy*** - for legacy browsers;
* ***querySelector*** - a simple utility to check if a given value is an *Element* or a selector string, and if a selector string find the FIRST *Element* and return it;
* ***querySelectorAll*** - a simple utility to check if a certain item is an *Element* or a selector string, and if a selector string find the FIRST *Element* and return it;

# strings
* ***bezierEasing*** - an *Object* comprised or a set of valid CSS `transition-timing-function` based on Cubic Bezier; EG: `cubic-bezier(0.215,0.61,0.355,1)` for `bezierEasing.easingCubicOut`
* ***mouseSwipeEvents*** - preserves the pointer events from mouse actions: start: `mousedown`, end: `mouseup`, move: `mousemove`, cancel: `mouseout`
* ***mouseClickEvents*** - preserves the pointer events from mouse actions: down: `mousedown`, up: `mouseup`
* ***mouseHoverEvents*** - preserve browser specific mouse hover events: `mouseenter` and `mouseleave` OR `mouseover` and `mouseout`
* ***touchEvents*** - preserves the pointer events from touch actions: start: `touchstart`, end: `touchend`, move: `touchmove`, cancel: `touchcancel`
* ***animationDuration*** - preserves the `animationDuration` property name supported by the client browser 
* ***animationDelay*** - preserves the `animationDelay` property name supported by the client browser 
* ***animationEndEvent*** - preserves the `animationEndEvent` event name supported by the client browser 
* ***animationName*** - preserves the `animationName` property name supported by the client browser 
* ***transitionDuration*** - preserves the `transitionDuration` property name supported by the client browser 
* ***transitionDelay*** - preserves the `transitionDelay` property name supported by the client browser 
* ***transitionEndEvent*** - preserves the `transitionend` event name supported by the client browser 
* ***transitionProperty*** - preserves the `transitionProperty` property name supported by the client browser 
* ***addEventListener*** - preserves the `addEventListener` method name
* ***removeEventListener*** - preserves the `removeEventListener` method name

There are lots more string constants available which include native event names, browser strings or ARIA specific attribute names. Be sure to check the `src/strings` folder for a complete list.

```js 
// EXAMPLES
import {on,off,one,mouseClickEvents,touchEvents,passiveHandler} from 'shorter-js'

// attach a passive mousedown eventHandler
on(targetElement,mouseClickEvents.down,eventHandler,passiveHandler)
// detach a passive mousedown eventHandler
off(targetElement,mouseClickEvents.down,eventHandler,passiveHandler)
// attach a single instance passive touchstart eventHandler
one(targetElement,touchEvents.start,eventHandler,passiveHandler)
```

For a more advanced method to handle event listeners, I recommend using the [event-listener.js](github.com/thednp/event-listener.js).

# Advanced Use
To avoid adding un-necessary shorties into your code, you might want to import them directly from their location. Tree shake it!

```js
// Example
import on from 'shorter-js/src/event/on.js'
import addClass from 'shorter-js/src/class/addClass.js'

on(document.getElementById('my-elem'),'eventName',function(e){
  addClass(document.getElementById('my-elem'),'my-className')
})
```

# License
*shorter-js* is released under the [MIT License](https://github.com/thednp/shorter-js/blob/master/LICENSE)
