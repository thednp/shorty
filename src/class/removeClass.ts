/**
 * Remove one or more classes from `Element.classList`.
 *
 * @param element target
 * @param classNAME to remove
 */
const removeClass = (element: Element, ...classNAME: string[]): void => {
  element.classList.remove(...classNAME);
};

export default removeClass;
