/**
 * Utility to focus an `HTMLElement` target.
 *
 * @param {HTMLElement | Element} element is the target
 */
// @ts-ignore -- `Element`s resulted from querySelector can focus too
const focus = (element) => element.focus();
export default focus;
