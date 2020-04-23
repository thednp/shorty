# shorter-js
A small ES6/ES7 library with various JavaScript tools useful for creating light libraries.
Featured in [KUTE.js](https://github.com/thednp/kute.js), [BSN](https://github.com/thednp/bootstrap.native) and other libraries.

The purpose if the library is to speed up the development workflow, minimize the size of larger libraries by providing a shorter syntax for most used JavaScript API methods, most used strings or other helpful utilities.

While the library comes with a working build in the `dist` folder, the main purpose of the library is mainly to be used in other libraries.

# npm
```
npm install shorter-js
```

# ES6/ES7 Base usage
```js
// import the tool you need
import {on} from 'shorter-js'

// use the tool in your ES6/ES7 sources
on(elementTarget,eventName,eventHandler,options)
```
	
# Class
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

# Event
* ***mouseEvents*** - preserves the pointer events from mouse actions: down: `mousedown`, up: `mouseup`
* ***touchEvents*** - preserves the pointer events from touch actions: start: `touchstart`, end: `touchend`, move: `touchmove`, cancel: `touchcancel`
* ***mouseHover*** - preserve browser specific mouse hover events: `mouseenter` and `mouseleave` OR `mouseover` and `mouseout`
* ***on*** - attach an event handler to a specific target *Element*
* ***off*** - detach an event handler from a specific target *Element*
* ***one*** - attach an event handler to a specific target *Element*, and detach when complete
* ***supportPassive*** - a constant that checks and preserves the client browser for `passive` event capability
* ***passiveHandler*** - a constant that preserves a standard handler `options` with `passive: true event` option used

```js 
// EXAMPLES
import {on,off,one,mouseEvents,touchEvents,passiveHandler} from 'shorter-js'

// attach a passive mousedown eventHandler
on(targetElement,mouseEvents.down,eventHandler,passiveHandler)
// detach a passive mousedown eventHandler
off(targetElement,mouseEvents.down,eventHandler,passiveHandler)
// attach a single instance passive mousedown eventHandler
one(targetElement,touchEvents.start,eventHandler,passiveHandler)
```

# Transition
* ***supportTransform*** - checks and preserves the client browser capability for webKit `transform` 
* ***supportTransitions*** - checks and preserves the client browser capability for webKit `transition` 
* ***transitionEndEvent*** - preserves the `transitionend` event name supported by the client browser 
* ***transitionDuration*** - preserves the `transitionDuration` event property supported by the client browser 
* ***getElementTransitionDuration*** - returns the `transitionDuration` property of a `transition` property
* ***emulateTransitionEnd*** - utility to execute a callback function when `transitionend` event is triggered

```js 
// EXAMPLES
import {on,supportTransitions,transitionEndEvent,emulateTransitionEnd} from 'shorter-js'

// check if client supports transitions
if (supportTransitions){
  // attach transitionend handler
  on(targetElement,transitionEndEvent,eventHandler,options)
} else {
  eventHandler()
}

// the above should be equivalent to a much shorter
emulateTransitionEnd(targetElement,eventHandler)
```


# License
[MIT License](https://github.com/thednp/shorter-js/blob/master/LICENSE)
