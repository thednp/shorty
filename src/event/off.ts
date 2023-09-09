/**
 * Remove eventListener from an `EventTarget` object.
 */
const off = <T extends EventTarget, L = EventListener>(
  element: T,
  eventName: string,
  listener: L,
  options?: AddEventListenerOptions,
) => {
  const ops = options || false;
  element.removeEventListener(eventName, listener as EventListenerOrEventListenerObject, ops);
};

export default off;
