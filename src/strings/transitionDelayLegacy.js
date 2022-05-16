import documentHead from '../blocks/documentHead';

/**
 * A global namespace for 'transitionDelay' string.
 * @type {string}
 */
const transitionDelay = 'webkitTransition' in documentHead.style ? 'webkitTransitionDelay'
  : /* istanbul ignore next */'transitionDelay';
export default transitionDelay;
