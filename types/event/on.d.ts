/**
 * Add eventListener to Element
 *
 * @param {HTMLElement} element event.target
 * @param {string} eventName event.type
 * @param {EventListener} handler callback
 * @param {EventListenerOptions | boolean | null} options other event options
 */
export default function on(element: HTMLElement, eventName: string, handler: EventListener, options: EventListenerOptions | boolean | null): void;
