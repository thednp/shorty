import documentHead from '../blocks/documentHead';

/**
 * A global namespace for 'animationName' string.
 * @type {string}
 */
const animationName = 'webkitAnimation' in documentHead.style ? 'webkitAnimationName' : 'animationName';
export default animationName;
