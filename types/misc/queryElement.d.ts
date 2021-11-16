/**
 * Utility to check if target is typeof Element
 * or find one that matches a selector.
 *
 * @param {string | Element} selector the input selector or target element
 * @param {undefined | Element} parent optional Element to look into
 * @return {null | Element} the Element
 */
export default function queryElement(selector: string | Element, parent: undefined | Element): null | Element;
