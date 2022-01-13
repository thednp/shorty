import documentHead from '../blocks/documentHead';

/**
 * A global namespace for 'animationDuration' string.
 * @type {string}
 */
const animationDuration = 'webkitAnimation' in documentHead.style ? 'webkitAnimationDuration' : 'animationDuration';
export default animationDuration;
