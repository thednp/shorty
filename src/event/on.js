/**
 * Add eventListener to an `Element` | `HTMLElement` | `Document` target.
 *
 * @param {HTMLElement | Element | Document | Window} element event.target
 * @param {string} eventName event.type
 * @param {EventListener} listener callback
 * @param {(EventListenerOptions | boolean)=} options other event options
 * @returns {void}
 */
export default function on(element, eventName, listener, options) {
  const ops = options || false;
  element.addEventListener(eventName, listener, ops);
}
