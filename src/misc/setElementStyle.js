import ObjectAssign from './ObjectAssign';
import ObjectEntries from './ObjectEntries';

/**
 * Shortcut for multiple uses of `HTMLElement.style.propertyName` method.
 * @param  {HTMLElement} element target element
 * @param  {Partial<CSSStyleDeclaration>} styles attribute value
 */
const setElementStyle = (element, styles) => {
  ObjectEntries(styles).forEach(([key, value]) => {
    if (key.includes('--')) {
      element.style.setProperty(key, value);
    } else {
      const propObject = {}; propObject[key] = value;
      ObjectAssign(element.style, propObject);
    }
  });
};
export default setElementStyle;
