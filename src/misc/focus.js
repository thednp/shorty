/**
 * Utility to focus an `HTMLElement` target.
 *
 * @param {SHORTER.ElementNodes} element is the target
 */
// @ts-ignore -- `Element`s resulted from querySelector can focus too
const focus = (element) => element.focus();
export default focus;
