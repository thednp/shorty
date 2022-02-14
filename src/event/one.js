import on from './on';
import off from './off';

/**
 * Add an `eventListener` to an `Element` | `HTMLElement` | `Document` | `Window`
 * target and remove it once callback is called.
 *
 * @param {HTMLElement | Element | Document | Window} element event.target
 * @param {string} eventName event.type
 * @param {EventListener} listener callback
 * @param {(EventListenerOptions | boolean)=} options other event options
 * @returns {void}
 */
export default function one(element, eventName, listener, options) {
/**
 * Wrap the listener for easy on -> off
 * @type {EventListener}
 */
  const handlerWrapper = (e) => {
    if (e.target === element) {
      listener.apply(element, [e]);
      off(element, eventName, handlerWrapper, options);
    }
  };
  on(element, eventName, handlerWrapper, options);
}
