import ObjectAssign from './ObjectAssign';
import ObjectEntries from './ObjectEntries';
import isString from '../is/isString';
/**
 * Shortcut for multiple uses of `HTMLElement.style.propertyName` method.
 * @param element target element
 * @param styles attribute value
 */
const setElementStyle = (element, styles) => {
    ObjectEntries(styles).forEach(([key, value]) => {
        if (isString(key) && key.includes('--')) {
            element.style.setProperty(key, value);
        }
        else {
            const propObject = {};
            propObject[key] = value;
            ObjectAssign(element.style, propObject);
        }
    });
};
export default setElementStyle;
//# sourceMappingURL=setElementStyle.js.map