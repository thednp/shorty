/**
 * Add eventListener to an `HTMLElement` | `Document` target.
 */
export default function on(
  element: EventTarget,
  eventName: string,
  listener: EventListenerObject["handleEvent"],
  options?: AddEventListenerOptions
) {
  const ops = options || false;
  element.addEventListener(eventName, listener, ops);
}
