/**
 * The raw value or a given component option.
 *
 * @typedef {} niceValue
 */

/**
 * Utility to normalize component options
 *
 * @param value the input value
 * @return the normalized value
 */
const normalizeValue = (value: any): string | HTMLElement | Function | number | boolean | null => {
  if (["true", true].includes(value)) {
    // boolean
    // if ('true' === value) { // boolean
    return true;
  }

  if (["false", false].includes(value)) {
    // boolean
    // if ('false' === value) { // boolean
    return false;
  }

  if (value === "" || value === "null") {
    // null
    return null;
  }

  if (value !== "" && !Number.isNaN(+value)) {
    // number
    return +value;
  }

  // string / function / HTMLElement / object
  return value;
};

export default normalizeValue;
