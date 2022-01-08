/**
 * JavaScript `Array` distinct.
 * @see https://codeburst.io/javascript-array-distinct-5edc93501dc4
 * @param {*} value
 * @param {number} index
 * @param {*} self
 * @returns {boolean}
 */
const distinct = (value, index, self) => self.indexOf(value) === index;
export default distinct;
