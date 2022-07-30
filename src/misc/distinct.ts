/**
 * JavaScript `Array` distinct.
 * @see https://codeburst.io/javascript-array-distinct-5edc93501dc4
 *
 * @example
 * ```
 * [0,1,1,2].filter(distinct)
 * // => [0,1,2]
 * ```
 * @param value aray item value
 * @param index array item index
 * @param self the array
 * @returns the query result
 */
const distinct = (value: any, index: number, self: any[]): boolean => self.indexOf(value) === index;

export default distinct;
