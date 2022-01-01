/**
 * Shortcut for `Float64Array.from()` static method.
 * @param  {any[] | HTMLCollection | NodeList} arr array-like iterable object
 * @returns {Float64Array}
 */
const Float64ArrayFrom = (arr) => Float64Array.from(Array.from(arr));
export default Float64ArrayFrom;
