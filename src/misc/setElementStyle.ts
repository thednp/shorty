import ObjectAssign from "./ObjectAssign";
import ObjectEntries from "./ObjectEntries";

/**
 * Shortcut for multiple uses of `HTMLElement.style.propertyName` method.
 * @param element target element
 * @param styles attribute value
 */
const setElementStyle = (element: HTMLElement, styles: Partial<CSSStyleDeclaration>): void => {
  ObjectEntries(styles).forEach(([key, value]: [string, string]) => {
    if (key.includes("--")) {
      element.style.setProperty(key, value);
    } else {
      const propObject: Record<string, string> = {};
      propObject[key] = value;
      ObjectAssign(element.style, propObject);
    }
  });
};
export default setElementStyle;
