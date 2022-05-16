/**
 * Add eventListener to an `Element` | `HTMLElement` | `Document` target.
 *
 * @type {SHORTY.OnOff<EventTarget>}
 */
export default function on(element, eventName, listener, options) {
  const ops = options || false;
  element.addEventListener(eventName, listener, ops);
}
