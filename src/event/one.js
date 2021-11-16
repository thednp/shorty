import on from './on.js';
import off from './off.js';

/**
 * Add an eventListener to Element
 * and remove it once callback is called.
 *
 * @param {Element} element target
 * @param {string} eventName name of the event
 * @param {object | Function} handler callback
 * @param {object | Boolean | undefined} options other event options
 */
export default function one(element, eventName, handler, options) {
/**
 * Wrap the handler for easy on -> off
 * @param {Event} e the Event object
 */
  function handlerWrapper(e) {
    if (e.target === element) {
      handler.apply(element, [e]);
      off(element, eventName, handlerWrapper, options);
    }
  }
  on(element, eventName, handlerWrapper, options);
}
