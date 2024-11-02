import getDocument from "../get/getDocument";

/**
 * Returns an `HTMLElement` that matches the id in the document.
 * Within multiple <iframe> elements, a `parent` parameter
 * would decisively locate the correct element.
 *
 * @param id the ID selector
 * @param context an element in it's document or document
 * @returns the requested element
 */
const getElementById = <T extends HTMLElement | SVGElement>(
  id: string,
  context?: Node,
) => {
  return (getDocument(context).getElementById(id) as T) || null;
};

export default getElementById;
