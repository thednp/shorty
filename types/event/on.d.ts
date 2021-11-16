/**
 * Add eventListener to Element
 *
 * @param {Element} element target
 * @param {string} eventName name
 * @param {object | Function} handler callback
 * @param {object | Boolean | undefined} options other event options
 */
export default function on(element: Element, eventName: string, handler: object | Function, options: object | boolean | undefined): void;
