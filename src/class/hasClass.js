/**
 * Check class in Element.classList
 *
 * @param {Element} element target
 * @param {string} classNAME to check
 * @return {boolean}
 */
export default function hasClass(element, classNAME) {
  return element.classList.contains(classNAME);
}
