import documentHead from '../blocks/documentHead';

/**
 * A global `boolean` for CSS3 transform support.
 * @type {boolean}
 */
const supportTransform = 'webkitTransform' in documentHead.style || 'transform' in documentHead.style;
export default supportTransform;
