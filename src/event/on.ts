/**
 * Add eventListener to an `EventTarget` object.
 */
export default function on(
  element: EventTarget,
  eventName: string,
  listener: EventListener,
  options?: AddEventListenerOptions
) {
  const ops = options || false;
  element.addEventListener(eventName, listener, ops);
}
