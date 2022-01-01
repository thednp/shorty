/**
 * Add class to `HTMLElement.classList`.
 *
 * @param {HTMLElement} element target
 * @param {string} classNAME to add
 */
export default function addClass(element, classNAME) {
  element.classList.add(classNAME);
}
