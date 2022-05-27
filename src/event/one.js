import on from './on';
import off from './off';

/**
 * Add an `eventListener` to an `HTMLElement` | `Document` | `Window`
 * target and remove it once callback is called.
 *
 * @type {SHORTY.OnOff<EventTarget>}
 */
export default function one(element, eventName, listener, options) {
/**
 * Wrap the listener for easy on -> off
 * @type {EventListener}
 */
  const handlerWrapper = (e) => {
    /* istanbul ignore else */
    if (e.target === element) {
      listener.apply(element, [e]);
      off(element, eventName, handlerWrapper, options);
    }
  };
  on(element, eventName, handlerWrapper, options);
}
