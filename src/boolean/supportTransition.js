import documentHead from '../blocks/documentHead';

/**
 * A global `boolean` for CSS3 transition support.
 * @type {boolean}
 */
const supportTransition = 'webkitTransition' in documentHead.style || 'transition' in documentHead.style;
export default supportTransition;
