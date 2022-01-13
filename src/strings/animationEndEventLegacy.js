import documentHead from '../blocks/documentHead';

/**
 * A global namespace for 'animationend' string.
 * @type {string}
 */
const animationEndEvent = 'webkitAnimation' in documentHead.style ? 'webkitAnimationEnd' : 'animationend';
export default animationEndEvent;
