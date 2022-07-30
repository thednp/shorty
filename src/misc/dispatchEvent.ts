/**
 * Shortcut for the `Element.dispatchEvent(Event)` method.
 *
 * @param element is the target
 * @param event is the `Event` object
 */
const dispatchEvent = (element: HTMLElement, event: Event): boolean => element.dispatchEvent(event);

export default dispatchEvent;
