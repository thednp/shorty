/**
 * Remove eventListener from an `Element` | `HTMLElement` | `Document` | `Window` target.
 *
 * @param {HTMLElement | Element | Document | Window} element event.target
 * @param {string} eventName event.type
 * @param {EventListener} listener callback
 * @param {(EventListenerOptions | boolean)=} options other event options
 * @returns {void}
 */
export default function off(element, eventName, listener, options) {
  const ops = options || false;
  element.removeEventListener(eventName, listener, ops);
}
