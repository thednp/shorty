/**
 * Add class to `HTMLElement.classList`.
 *
 * @param {HTMLElement} element target
 * @param {string} classNAME to add
 * @returns {void}
 */
export default function addClass(element, classNAME) {
  element.classList.add(classNAME);
}
