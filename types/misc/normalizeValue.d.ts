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
export default function normalizeValue(value: rawValue): niceValue;
/**
 * The raw value or a given component option.
 */
export type rawValue = string | Function | Element | boolean | object;
/**
 * The raw value or a given component option.
 */
export type niceValue = string | Function | Element | object | number | boolean;
