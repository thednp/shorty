# shorty
[![Coverage Status](https://coveralls.io/repos/github/thednp/shorty/badge.svg)](https://coveralls.io/github/thednp/shorty)
[![ci](https://github.com/thednp/shorty/actions/workflows/ci.yml/badge.svg)](https://github.com/thednp/shorty/actions/workflows/ci.yml)
[![NPM Version](https://img.shields.io/npm/v/@thednp/shorty.svg)](https://www.npmjs.com/package/@thednp/shorty)
[![NPM Downloads](https://img.shields.io/npm/dm/@thednp/shorty.svg)](http://npm-stat.com/charts.html?package=@thednp/shorty)
[![jsDelivr hits (npm)](https://img.shields.io/jsdelivr/npm/hw/@thednp/shorty)](https://www.jsdelivr.com/package/npm/@thednp/shorty)
![cypress version](https://img.shields.io/badge/cypress-9.7.0-brightgreen)
![typescript version](https://img.shields.io/badge/typescript-4.5.2-brightgreen)

A small ES6+ library with various JavaScript tools, all ESLint valid and with TypeScript definitions, everything useful for creating light libraries or web components. If there is anything that is consistently repeating itself, **shorty** can help you save up to 50% of the code required, with little to no performance cost.


**shorty** is featured in [ColorPicker](https://github.com/thednp/color-picker), [KUTE.js](https://github.com/thednp/kute.js), [BSN](https://github.com/thednp/bootstrap.native), [Navbar.js](https://github.com/thednp/navbar.js) and other libraries.

* The purpose of the library is to speed up the development workflow, minimize the size of larger libraries by providing a shorter syntax for most used JavaScript API methods, most used strings or other helpful utilities.
* Another excellent use for the library is for its selectors in a testing environment where you need to check the `instanceof` for various objects.
* While the library comes with a working build in the `dist` folder, that is mainly for build consistency testing. You can make use of "tree shaking" to import one or anything your code needs.
* On that note, all shorties are organized in folders inside the `src` root folder, the structure is key to understanding the purpose of each type of shortie, whether we have `boolean` for various basic browser detection or browser feature support, `attr` for all things *Element* attributes or `strings` for most common and most used *Element.prototype* methods.

# npm
```
npm install @thednp/shorty
```

# ES6+ Base usage
```js
// import the tool you need
import { supportTransform } from '@thednp/shorty';

// use the tool in your ES6/ES7 sources
if (supportTransform) {
  // have modern browsers do something about that
}
```

# attr
* ***getAttribute*** - returns the value of a specified *Element* attribute;
* ***getAttributeNS*** - returns the value of a specified namespaced *Element* attribute (eg: namespaced SVG attributes);
* ***hasAttribute*** - check if element has a specified attribute;
* ***hasAttributeNS*** - check if element has a specified namespaced attribute;
* ***removeAttribute*** - removes a specified attribute from an element;
* ***removeAttributeNS*** - removes a specified namespaced attribute from an element;
* ***setAttribute*** - set a new attribute value for a given element;
* ***setAttributeNS*** - set a new namespaced attribute value for a given element;

```js 
// EXAMPLES
import { getAttribute, hasAttribute, setAttribute } from '@thednp/shorty';

// check target has certain attribute
if (!hasAttribute(myTarget, 'attribute-name')) {
  setAttribute(myTarget, 'attribute-name', 'new-value');
}

// get attribute value
const currentAttrValue = getAttribute(myTarget, 'attribute-name');
```


# blocks
* ***documentBody*** - a shortie for `document.body`;
* ***documentElement*** - a shortie for `document.documentElement`;
* ***documentHead*** - a shortie for `document.head`;

# boolean
* ***isApple*** - checks and preserves a `boolean` value for the client browser is either Apple **Safari** browser or not;
* ***isFirefox*** - checks and preserves a `boolean` value for the client browser is either **Firefox** or not;
* ***isMobile*** - checks and preserves a `boolean` value for the client browser is either a Mobile device or not;
* ***support3DTransform*** - checks and preserves a `boolean` value for the client browser capability for webKit `perspective`;
* ***supportTouch*** - checks and preserves a `boolean` value for the client browser capability for `touch` events;
* ***supportPassive*** - checks and preserves a `boolean` value for the client browser capability for `passive` event option;
* ***supportTransform*** - checks and preserves a `boolean` value for the client browser capability for webKit `transform`;
* ***supportAnimation*** - checks and preserves a `boolean` value for the client browser capability for webKit keyframe `animation`;
* ***supportTransition*** - checks and preserves a `boolean` value for the client browser capability for webKit `transition`;

```js 
// EXAMPLES
import { support3DTransform } from '@thednp/shorty';

// filter myAction to supported browsers
if (support3DTransform) {
  // do something with modern browsers
}
```
	
# class
* ***addClass*** - add a class to a target *Element*;
* ***removeClass*** - remove a class from a target *Element*;
* ***hasClass*** - checks the existence of a class for a target *Element*;

```js 
// EXAMPLES
import { addClass, removeClass, hasClass } from '@thednp/shorty'

// add a class
addClass(targetElement, 'className');

// remove a class
removeClass(targetElement, 'className');

// check for a class
if (hasClass(targetElement, 'className')) {
  // do something about that
}
```

# event
* ***on*** - attach an event listener to a specific target *Element*;
* ***off*** - detach an event listener from a specific target *Element*;
* ***one*** - attach an event listener to a specific target *Element*, and detach when complete;

```js 
// EXAMPLES
import { on, off, one, passiveHandler } from '@thednp/shorty';

// attach a passive mousedown eventHandler
on(targetElement, 'click', eventHandler, passiveHandler);

// detach a passive mouseup eventHandler
off(targetElement, 'mouseup', eventHandler, passiveHandler);

// attach a single instance passive touchstart eventHandler
one(targetElement, 'touchstart', eventHandler, passiveHandler);
```

For a more advanced method to handle event listeners, I recommend using the [event-listener.js](github.com/thednp/event-listener.js).


# get
* ***getBoundingClientRect*** - returns the bounding client rectangle of a given *Element*;
* ***getDocument*** - returns the containing `#Document` for a given *Element* or just any *Document*, useful when working with *iframe*s;
* ***getDocumentBody*** - returns the containing `<body>` for a given *Element* or just any;
* ***getDocumentElement*** - returns the containing `<html>` for a given *Element* or just any;
* ***getDocumentHead*** - returns the containing `<head>` for a given *Element* or just any;
* ***getElementAnimationDelay*** - returns the `animationDelay` property of an `animation` property; 
* ***getElementAnimationDelayLegacy*** - for legacy browsers;
* ***getElementAnimationDuration*** - returns the `animationDuration` property of a `animation` property;
* ***getElementAnimationDurationLegacy*** - for legacy browsers;
* ***getElementTransitionDelay*** - returns the `transitionDelay` property of a `transition` property;
* ***getElementTransitionDelayLegacy*** - for legacy browsers;
* ***getElementTransitionDuration*** - returns the `transitionDuration` property of a `transition` property;
* ***getElementTransitionDurationLegacy*** - for legacy browsers;
* ***getElementStyle*** - returns the *Element* computed style for a given property;
* ***getNodeScroll*** - returns the *Element* / *Window* current `{ x, y }` scroll position;
* ***getParentNode*** - returns parent of a given *Element*;
* ***getRectRelativeToOffsetParent*** - returns the bounding client rectangle of a given *Element* relative to a given `offsetParent`;
* ***getUID*** - a nice utility that creates a unique ID for a given *Element* and returns it;
* ***getWindow*** - returns the containing `Window` for a given *Element* or just any *Window*;

```js 
// EXAMPLES
import {
  getElementAnimationDuration,
  getElementAnimationDurationLegacy,
} from '@thednp/shorty'

// store the transition duration for target element on a modern browser
const duration = getElementAnimationDuration(target);

// or do the same with legacy browser fallback
const duration = getElementAnimationDurationLegacy(target);
```

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
* ***isNumber*** - check if a given value is string;
* ***isRTL*** - check if a given node is contained in a `<html dir="rtl">`;
* ***isScaledElement*** - check if a given *Element* is affected by scale;
* ***isShadowRoot*** - check if a given *Node* is a `ShadowRoot` instance;
* ***isString*** - check if a given value is string;
* ***isSVGElement*** - check if a given value is `SVGElement` instance;
* ***isTableElement*** - check if a given value is `<table>`, `<td>` or `<th>` *Element*;
* ***isWindow*** - check if a given value is a `Window` instance;

```js 
// EXAMPLES
import { isArray,  isHTMLElement, isElementsArray } from '@thednp/shorty';

// check if a value is an `Array` of `Element` instances
if (isArray(myValue) && myValue.every(isHTMLElement)) {
  // do something with these instances
}

// or use the dedicated shortie of the above
if (isElementsArray(myValue)) {
  // do something with these instances
}
```

# misc
* ***ArrayFrom*** - a shortie for `Array.from()` method;
* ***Data*** - a small utility to store web components data that makes use of the native `Map`;
* ***dispatchEvent*** - a shortie for `Element.dispatchEvent()` method;
* ***distinct*** - a shortie you can use to filter duplicate values in an `Array`;
* ***emulateAnimationEnd*** - utility to execute a callback function when `animationend` event is triggered, or execute the callback right after for legacy browsers;
* ***emulateAnimationEndLegacy*** - for legacy browsers;
* ***emulateTransitionEnd*** - utility to execute a callback function when `transitionend` event is triggered, or execute the callback right after for legacy browsers;
* ***emulateTransitionEndLegacy*** - for legacy browsers;
* ***Float32ArrayFrom*** - a shortie for `Float32Array.from()` method;
* ***Float64ArrayFrom*** - a shortie for `Float64Array.from()` method;
* ***focus*** - a shortie for `Element.focus()` method;
* ***noop*** - is your regular `() => {}` NOOP;
* ***normalizeOptions*** - a cool utility to normalize and crosscheck JavaScript options and their DATA API counterparts for various web components; supports namespaced options like `data-NAMESPACE-option="value"`; priority: JavaScript options > DATA API options > default options
* ***ObjectAssign*** - a shortie for `Object.assign()` method;
* ***ObjectEntries*** - a shortie for `Object.entries()` method;
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

The ***Data*** and ***Timer*** utilities have their own specifics, you might want to check the [wiki](https://github.com/thednp/shorty/wiki).

```js 
// EXAMPLES
import {
  emulateTransitionEnd,
  distinct,
} from '@thednp/shorty';

// execute a callback when transitionend is triggered for the target
emulateTransitionEnd(targetElement, callback);

// define some arrays of numbers
const array1 = [0, 1, 3, 5, 7, 9];
const array2 = [0, 2, 4, 6, 8, 10];

// merge them and filter them to make sure we have distinct values
const array3 = [...array1, ...array2].filter(distinct);
// [0, 1, 3, 5, 7, 9, 2, 4, 6, 8, 10]
```

# selectors
* ***closest*** - a shortie for `Element.closest()` method;
* ***getCustomElements*** - returns an `Array` with all registered `CustomElement`;
* ***getElementById*** - a shortie for `document.getElementById()` method;
* ***getElementsByClassName*** - a shortie for `Element.getElementsByClassName()` method;
* ***getElementsByTagName*** - a shortie for `Element.getElementsByTagName()` method;
* ***matches*** - a shortie for `Element.matches()` method;
* ***matchesLegacy*** - for legacy browsers;
* ***querySelector*** - a simple utility to check if a given value is an *Element* or a selector string, and if a selector string find the FIRST *Element* and return it;
* ***querySelectorAll*** - a simple utility to check if a certain item is an *Element* or a selector string, and if a selector string find the FIRST *Element* and return it;

```js 
// EXAMPLES
import { querySelector, querySelectorAll, documentAll, matches } from '@thednp/shorty';

// get first element that matches a certain selector
const element = querySelector('.my-class-name');

// get all elements that matches same selector
const elements = querySelectorAll('.my-class-name');

// now do the same as the above, but differently
const elements = [...documentAll].filter((x) => matches(x, '.my-class-name'));
```

# strings
* ***bezierEasings*** - an *Object* comprised or a set of valid CSS `transition-timing-function` based on Cubic Bezier; EG: `cubic-bezier(0.215,0.61,0.355,1)` for `bezierEasings.easingCubicOut`;
* ***mouseSwipeEvents*** - preserves the pointer events from mouse actions: start: `mousedown`, end: `mouseup`, move: `mousemove`, cancel: `mouseout`;
* ***mouseClickEvents*** - preserves the pointer events from mouse actions: down: `mousedown`, up: `mouseup`;
* ***mouseHoverEvents*** - preserve browser specific mouse hover events: `mouseenter` and `mouseleave` OR `mouseover` and `mouseout`;
* ***touchEvents*** - preserves the pointer events from touch actions: start: `touchstart`, end: `touchend`, move: `touchmove`, cancel: `touchcancel`;
* ***animationDuration*** - preserves the `animationDuration` property for modern browsers;
* ***animationDurationLegacy*** - for legacy browsers fallback;
* ***animationDelay*** - preserves the `animationDelay` property for modern browsers;
* ***animationDelayLegacy*** - for legacy browsers fallback;
* ***animationEndEvent*** - preserves the `animationEndEvent` event for modern browsers;
* ***animationEndEventLegacy*** - for legacy browsers fallback;
* ***animationName*** - preserves the `animationName` property name for modern browsers;
* ***animationNameLegacy*** - for legacy browsers fallback;
* ***transitionDuration*** - preserves the `transitionDuration` property name for modern browsers;
* ***transitionDurationLegacy*** - for legacy browsers fallback;
* ***transitionDelay*** - preserves the `transitionDelay` property name for modern browsers;
* ***transitionDelayLegacy*** - for legacy browsers fallback;
* ***transitionEndEvent*** - preserves the `transitionend` event name for modern browsers;
* ***transitionEndEventLegacy*** - for legacy browsers fallback;
* ***transitionProperty*** - preserves the `transitionProperty` property name for modern browsers;
* ***transitionPropertyLegacy*** - for legacy browsers fallback;
* ***addEventListener*** - preserves the `addEventListener` method name;
* ***removeEventListener*** - preserves the `removeEventListener` method name;

There are lots more string constants available which include native event names, browser strings, keyboard key codes or ARIA specific attribute names. Be sure to check the `src/strings` folder for a complete list.

```js 
// EXAMPLES
import {on, off, one, mouseClickEvents, touchEvents, passiveHandler} from '@thednp/shorty';

// attach a passive mousedown eventHandler
on(targetElement, mouseClickEvents.down, eventHandler, passiveHandler);

// detach a passive mousedown eventHandler
off(targetElement, mouseClickEvents.down, eventHandler, passiveHandler);

// attach a single instance passive touchstart eventHandler
one(targetElement, touchEvents.start, eventHandler, passiveHandler);
```

# Advanced Use
Here's a simple example to showcase the benefit of using ***shorty***.

```js
// This is your typical day to day scripting
const target = document.getElementById('my-element');

target.addEventListener('click', function(e) {
  target.classList.add('my-className');
})
```

Now make it all shorty. You might want to import shorties directly from their location, something we like to call "tree shaking".
```js
// Example
import on from '@thednp/shorty/src/event/on';
import addClass from '@thednp/shorty/src/class/addClass';
import getElementById from '@thednp/shorty/src/selectors/getElementById';
import mouseclickEvent from '@thednp/shorty/src/strings/mouseclickEvent';

const target = getElementById('my-element');

on(target, mouseclickEvent, function(e) {
  addClass(target, 'my-className')
})
```


# License
**shorty** is released under the [MIT License](https://github.com/thednp/shorty/blob/master/LICENSE)
