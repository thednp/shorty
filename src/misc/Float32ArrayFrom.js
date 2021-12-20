/**
 * Shortcut for `Float32Array.from()` static method.
 * @param  {any[] | HTMLCollection | NodeList} arr array-like iterable object
 * @returns {Float32Array}
 */
const Float32ArrayFrom = (arr) => {
  const array = Array.from(arr);
  return Float32Array.from(array);
};
export default Float32ArrayFrom;
