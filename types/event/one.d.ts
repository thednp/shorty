/**
 * Add an eventListener to Element
 * and remove it once callback is called.
 *
 * @param {Element} element target
 * @param {string} eventName name of the event
 * @param {object | Function} handler callback
 * @param {object | Boolean | undefined} options other event options
 */
export default function one(element: Element, eventName: string, handler: object | Function, options: object | boolean | undefined): void;
