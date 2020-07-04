# shorter-js
**A small ES6/ES7 library with various JavaScript tools useful for creating light libraries.
Featured in [KUTE.js](https://github.com/thednp/kute.js), [BSN](https://github.com/thednp/bootstrap.native), [Navbar.js](https://github.com/thednp/navbar.js) and other libraries.**

* The purpose if the library is to speed up the development workflow, minimize the size of larger libraries by providing a shorter syntax for most used JavaScript API methods, most used strings or other helpful utilities.
* While the library comes with a working build in the `dist` folder, that is mainly for build consistency testing.

# npm
```
npm install shorter-js
```

# ES6/ES7 Base usage
```js
// import the tool you need
import {supportTransform} from 'shorter-js'

// use the tool in your ES6/ES7 sources
if (supportTransform) {
  doSomeAction()
}
```

# boolean
* ***isMobile*** - checks and preserves the client browser is a on Mobile device
* ***support3DTransform*** - checks and preserves the client browser capability for webKit `perspective` 
* ***supportTouch*** - checks and preserves the client browser capability for `touch` events
* ***supportPassive*** - checks and preserves the client browser capability for `passive` event option
* ***supportTransform*** - checks and preserves the client browser capability for webKit `transform` 
* ***supportAnimation*** - checks and preserves the client browser capability for webKit keyframe `animation` 
* ***supportTransition*** - checks and preserves the client browser capability for webKit `transition` 

```js 
// EXAMPLES
import {support3DTransform} from 'shorter-js'

// filter myAction to supported browsers
if (support3DTransform) {
  myAction()
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
* ***on*** - attach an event handler to a specific target *Element*
* ***off*** - detach an event handler from a specific target *Element*
* ***one*** - attach an event handler to a specific target *Element*, and detach when complete
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

# misc
* ***emulateAnimationEnd*** - utility to execute a callback function when `animationend` event is triggered, or execute the callback right after for legacy browsers
* ***emulateTransitionEnd*** - utility to execute a callback function when `transitionend` event is triggered, or execute the callback right after for legacy browsers
* ***getElementTransitionDuration*** - returns the `transitionDuration` property of a `transition` property
* ***isElementInScrollRange*** - a quick utility that checks if a target *Element* surface is scrolled within the visible area of the window
* ***isElementInViewport*** - a quick utility that checks if a target *Element* is scrolled fully into visible window area, might not be useful for elements larger in size than the window itself, the above might be more useful
* ***passiveHandler*** - a constant that preserves a standard handler `options` with `passive: true event` option used
* ***queryElement*** - a simple utility to check if a certain item is an *Element* or a selector string, and if a selector string find the FIRST *Element* and return it
* ***tryWrapper*** - a simple `try()` and `catch()` wrapper for functions, with option to preffix the error logs, poiting out the source of the errors

```js 
// EXAMPLES
import {queryElement,emulateTransitionEnd} from 'shorter-js'

// get some target
let targetElement = queryElement('.mySelectorClass');

// emulateTransitionEnd for the above
emulateTransitionEnd(targetElement,callback)

// check if element is in scroll range
// emulateTransitionEnd for the above
if (isElementInScrollRange(targetElement)){
  doSomeAction()
}
```

# strings
* ***mouseSwipeEvents*** - preserves the pointer events from mouse actions: start: `mousedown`, end: `mouseup`, move: `mousemove`, cancel: `mouseout`
* ***mouseClickEvents*** - preserves the pointer events from mouse actions: down: `mousedown`, up: `mouseup`
* ***mouseHoverEvents*** - preserve browser specific mouse hover events: `mouseenter` and `mouseleave` OR `mouseover` and `mouseout`
* ***touchEvents*** - preserves the pointer events from touch actions: start: `touchstart`, end: `touchend`, move: `touchmove`, cancel: `touchcancel`
* ***animationDuration*** - preserves the `animationDuration` property name supported by the client browser 
* ***animationEndEvent*** - preserves the `animationEndEvent` event name supported by the client browser 
* ***transitionDuration*** - preserves the `transitionDuration` property name supported by the client browser 
* ***transitionEndEvent*** - preserves the `transitionend` event name supported by the client browser 

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

# Advanced Use
To avoid adding un-necessary shorties into your code, you might want to import them directly from their location

```js
// Example
import on from 'shorter-js/src/event/on.js'
import addClass from 'shorter-js/src/class/addClass.js'
```

# License
[MIT License](https://github.com/thednp/shorter-js/blob/master/LICENSE)
