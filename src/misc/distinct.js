/**
 * JavaScript `Array` distinct.
 * @see https://codeburst.io/javascript-array-distinct-5edc93501dc4
 * @param {any} value
 * @param {number} index
 * @param {any} self
 * @returns {boolean}
 */
const distinct = (value, index, self) => self.indexOf(value) === index;
export default distinct;
