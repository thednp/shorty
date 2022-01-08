import documentHead from '../blocks/documentHead';

/**
 * A global `boolean` for CSS3 animation support.
 * @type {boolean}
 */
const supportAnimation = 'webkitAnimation' in documentHead.style || 'animation' in documentHead.style;
export default supportAnimation;
