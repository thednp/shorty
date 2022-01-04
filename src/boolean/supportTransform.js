/**
 * A global `boolean` for CSS3 transform support.
 * @type {boolean}
 */
const supportTransform = 'webkitTransform' in document.head.style || 'transform' in document.head.style;
export default supportTransform;
