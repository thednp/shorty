/**
 * The raw value or a given component option.
 *
 * @typedef {string | Element | Function | number | boolean | null} niceValue
 */

/**
 * Utility to normalize component options
 *
 * @param {any} value the input value
 * @return {niceValue} the normalized value
 */
export default function normalizeValue(value) {
  if (value === 'true') { // boolean
    return true;
  }

  if (value === 'false') { // boolean
    return false;
  }

  if (!Number.isNaN(+value)) { // number
    return +value;
  }

  if (value === '' || value === 'null') { // null
    return null;
  }

  // string / function / Element / object
  return value;
}
