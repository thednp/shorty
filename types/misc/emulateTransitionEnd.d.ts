/**
 * Utility to make sure callbacks are consistently
 * called when transition ends.
 *
 * @param {HTMLElement} element target
 * @param {function} handler `transitionend` callback
 */
export default function emulateTransitionEnd(element: HTMLElement, handler: Function): void;
