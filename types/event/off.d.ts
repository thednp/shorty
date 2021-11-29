/**
 * Remove eventListener from Element
 *
 * @param {Element} element event.target
 * @param {string} eventName event.type
 * @param {EventListener} handler callback
 * @param {EventListenerOptions | boolean | null} options other event options
 */
export default function off(element: Element, eventName: string, handler: EventListener, options: EventListenerOptions | boolean | null): void;
