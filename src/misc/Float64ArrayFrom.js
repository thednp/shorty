/**
 * Shortcut for `Float64Array.from()` static method.
 * @param  {any[] | HTMLCollection | NodeList} arr array-like iterable object
 * @returns {Float64Array}
 */
const Float64ArrayFrom = (arr) => {
  const array = Array.from(arr);
  return Float64Array.from(array);
};
export default Float64ArrayFrom;
