import documentHead from '../blocks/documentHead';

/**
 * A global `boolean` for CSS3 3D transform support.
 * @type {boolean}
 */
const support3DTransform = 'webkitPerspective' in documentHead.style || 'perspective' in documentHead.style;
export default support3DTransform;
