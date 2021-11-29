/**
 * Utility to make sure callbacks are consistently
 * called when transition ends.
 *
 * @param {Element} element target
 * @param {function} handler `transitionend` callback
 */
export default function emulateTransitionEnd(element: Element, handler: Function): void;
