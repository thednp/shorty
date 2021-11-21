/**
 * Add an eventListener to Element
 * and remove it once callback is called.
 *
 * @param {Element} element event.target
 * @param {String} eventName event.type
 * @param {object | Function} handler callback
 * @param {object | Boolean | null} options other event options
 */
export default function one(element: Element, eventName: string, handler: object | Function, options: object | boolean | null): void;
