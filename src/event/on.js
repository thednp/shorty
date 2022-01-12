/**
 * Add eventListener to an `Element` | `HTMLElement` | `Document` target.
 *
 * @param {HTMLElement | Element | Document | Window} element event.target
 * @param {string} eventName event.type
 * @param {EventListenerObject['handleEvent']} handler callback
 * @param {(EventListenerOptions | boolean)=} options other event options
 */
export default function on(element, eventName, handler, options) {
  const ops = options || false;
  element.addEventListener(eventName, handler, ops);
}
