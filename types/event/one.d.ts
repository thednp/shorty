/**
 * Add an eventListener to Element
 * and remove it once callback is called.
 *
 * @param {Element} element event.target
 * @param {string} eventName event.type
 * @param {EventListener} handler callback
 * @param {EventListenerOptions | boolean | null} options other event options
 */
export default function one(element: Element, eventName: string, handler: EventListener, options: EventListenerOptions | boolean | null): void;
