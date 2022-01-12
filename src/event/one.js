import on from './on';
import off from './off';

/**
 * Add an `eventListener` to an `Element` | `HTMLElement` | `Document` | `Window`
 * target and remove it once callback is called.
 *
 * @param {HTMLElement | Element | Document | Window} element event.target
 * @param {string} eventName event.type
 * @param {EventListenerObject['handleEvent']} handler callback
 * @param {(EventListenerOptions | boolean)=} options other event options
 */
export default function one(element, eventName, handler, options) {
/**
 * Wrap the handler for easy on -> off
 * @type {EventListenerObject['handleEvent']}
 */
  const handlerWrapper = (e) => {
    if (e.target === element) {
      handler.apply(element, [e]);
      off(element, eventName, handlerWrapper, options);
    }
  };
  on(element, eventName, handlerWrapper, options);
}
