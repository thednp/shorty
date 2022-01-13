import documentHead from '../blocks/documentHead';

/**
 * A global namespace for 'transitionDelay' string.
 * @type {string}
 */
const transitionDelay = 'webkitTransition' in documentHead.style ? 'webkitTransitionDelay' : 'transitionDelay';
export default transitionDelay;
