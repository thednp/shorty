/**
 * Remove eventListener from Element
 *
 * @param {Element} element event.target
 * @param {String} eventName event.type
 * @param {object | Function} handler callback
 * @param {object | Boolean | null} options other event options
 */
export default function off(element: Element, eventName: string, handler: object | Function, options: object | boolean | null): void;
