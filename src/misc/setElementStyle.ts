import ObjectAssign from './ObjectAssign';
import ObjectEntries from './ObjectEntries';
import CSS4Declaration from '../interface/css4Declaration';

/**
 * Shortcut for multiple uses of `HTMLElement.style.propertyName` method.
 * @param element target element
 * @param styles attribute value
 */
const setElementStyle = (element: HTMLElement, styles: CSS4Declaration): void => {
  ObjectEntries(styles).forEach(([key, value]: [string, string]) => {
    if (key.includes('--')) {
      element.style.setProperty(key, value);
    } else {
      const propObject: Partial<CSS4Declaration> = {};
      propObject[key] = value;
      ObjectAssign(element.style, propObject);
    }
  });
};
export default setElementStyle;
