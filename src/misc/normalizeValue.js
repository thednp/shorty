/**
 * The raw value or a given component option.
 *
 * @typedef rawValue
 * @type {string | Function | Element | Boolean | object}
 */

/**
 * The raw value or a given component option.
 *
 * @typedef niceValue
 * @type {string | Function | Element | object | Number | Boolean}
 */

/**
 * Utility to normalize component options
 *
 * @param {rawValue} value the input value
 * @return {niceValue} the normalized value
 */
export default function normalizeValue(value) {
  if (value === 'true') {
    return true;
  }

  if (value === 'false') {
    return false;
  }

  if (!Number.isNaN(+value)) {
    return +value;
  }

  if (value === '' || value === 'null') {
    return null;
  }

  // string / function / Element / Object
  return value;
}
