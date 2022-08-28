import ObjectAssign from './ObjectAssign';
import ObjectEntries from './ObjectEntries';
import { CSS4Declaration } from '../interface/css4Declaration';
import isString from '../is/isString';

/**
 * Shortcut for multiple uses of `HTMLElement.style.propertyName` method.
 *
 * @param element target element
 * @param styles attribute value
 */
const setElementStyle = (element: HTMLElement, styles: Partial<CSS4Declaration>): void => {
  ObjectEntries(styles).forEach(([key, value]) => {
    if (value && isString(key as string) && (key as string).includes('--')) {
      element.style.setProperty(key as string, value);
    } else {
      const propObject: Partial<CSS4Declaration> = {};
      propObject[key] = value;
      ObjectAssign(element.style, propObject);
    }
  });
};
export default setElementStyle;
