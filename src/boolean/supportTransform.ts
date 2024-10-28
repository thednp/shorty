/**
 * A global `boolean` for CSS3 transform support.
 */
const supportTransform = () =>
  ["webkitTransform", "transform"].some((p) => p in document.head.style);

export default supportTransform;
