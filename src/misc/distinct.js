/**
 * JavaScript `Array` distinct.
 * @see https://codeburst.io/javascript-array-distinct-5edc93501dc4
 *
 * @example
 * ```
 * [0,1,1,2].filter(distinct)
 * // => [0,1,2]
 * ```
 * @param value array item value
 * @param index array item index
 * @param arr a clone of the target array
 * @returns the query result
 */
const distinct = (value, index, arr) => arr.indexOf(value) === index;
export default distinct;
//# sourceMappingURL=distinct.js.map