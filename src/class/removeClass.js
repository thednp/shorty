/**
 * Remove class from Element.classList
 *
 * @param {Element} element target
 * @param {string} classNAME to remove
 */
export default function removeClass(element, classNAME) {
  element.classList.remove(classNAME);
}
