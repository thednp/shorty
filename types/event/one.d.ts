/**
 * Add an eventListener to Element
 * and remove it once callback is called.
 *
 * @param {HTMLElement} element event.target
 * @param {string} eventName event.type
 * @param {EventListener} handler callback
 * @param {EventListenerOptions | boolean | null} options other event options
 */
export default function one(element: HTMLElement, eventName: string, handler: EventListener, options: EventListenerOptions | boolean | null): void;
