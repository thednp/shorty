/**
 * Remove eventListener from Element
 *
 * @param {HTMLElement} element event.target
 * @param {string} eventName event.type
 * @param {EventListener} handler callback
 * @param {EventListenerOptions | boolean | null} options other event options
 */
export default function off(element: HTMLElement, eventName: string, handler: EventListener, options: EventListenerOptions | boolean | null): void;
