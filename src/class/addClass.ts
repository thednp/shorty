/**
 * Add one or more CSS classes to `Element.classList`.
 *
 * @param element target
 * @param classNAME to add
 */
const addClass = (element: Element, ...classNAME: string[]): void => {
  element.classList.add(...classNAME);
};

export default addClass;
