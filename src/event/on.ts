import { NativeEventTypes, PossibleEventTarget, SupportedEventHandler } from '../interface/event';

/**
 * Add eventListener to an `EventTarget` object.
 */
const on = <T extends PossibleEventTarget>(
  element: T,
  eventName: NativeEventTypes,
  listener: EventListenerObject & SupportedEventHandler<T>,
  options?: AddEventListenerOptions,
) => {
  const ops = options || false;
  element.addEventListener(eventName, listener, ops);
};

export default on;
