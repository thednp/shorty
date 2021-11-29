/**
 * Utility to check if target is typeof Element
 * or find one that matches a selector.
 *
 * @param {Element | string} selector the input selector or target element
 * @param {Element | null} parent optional Element to look into
 * @return {Element | null} the Element or result of the querySelector
 */
export default function queryElement(selector: Element | string, parent: Element | null): Element | null;
