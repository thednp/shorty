/**
 * Check class in `Element.classList`.
 *
 * @param element target
 * @param classNAME to check
 */
const hasClass = (element: Element, classNAME: string): boolean => {
  return element.classList.contains(classNAME);
};

export default hasClass;
