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
export default function normalizeValue(value: any): niceValue;
/**
 * The raw value or a given component option.
 */
export type niceValue = string | Element | Function | number | boolean | null;
