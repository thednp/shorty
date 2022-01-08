/**
 * Remove class from `HTMLElement.classList`.
 *
 * @param {HTMLElement | Element} element target
 * @param {string} classNAME to remove
 */
export default function removeClass(element, classNAME) {
  element.classList.remove(classNAME);
}
