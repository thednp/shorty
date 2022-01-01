/**
 * Shortcut for `Float32Array.from()` static method.
 * @param  {any[] | HTMLCollection | NodeList} arr array-like iterable object
 * @returns {Float32Array}
 */
const Float32ArrayFrom = (arr) => Float32Array.from(Array.from(arr));
export default Float32ArrayFrom;
