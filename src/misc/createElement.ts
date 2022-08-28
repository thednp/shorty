import isString from '../is/isString';
import setAttribute from '../attr/setAttribute';
import getDocument from '../get/getDocument';
import ObjectEntries from './ObjectEntries';

/**
 * Shortie for `document.createElement` method
 * which allows you to create a new `HTMLElement` for a given `tagName`
 * or based on an object with specific non-readonly attributes with string values:
 * `id`, `className`, `textContent`, `style`, etc.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
 *
 * @param param `tagName` or object
 * @return a new `HTMLElement`
 */
const createElement = (
  param?: string | Exclude<HTMLElement, ((...args: any[]) => any) | object>,
): HTMLElement | undefined => {
  if (!param) return undefined;

  if (isString(param)) {
    return getDocument().createElement(param);
  }

  const { tagName } = param;
  const newElement = createElement(tagName as string);

  if (!newElement) return undefined;

  const attr = { ...(param as Record<string, unknown>) };
  delete attr.tagName;

  ObjectEntries(attr).forEach(([key, value]) => {
    if (isString(key as string) && isString(value as string)) {
      setAttribute(newElement, key as string, value as string);
    }
  });
  return newElement;
};

export default createElement;
