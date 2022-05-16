import documentHead from '../blocks/documentHead';

/**
 * A global namespace for 'transitionDuration' string.
 * @type {string}
 */
const transitionDuration = 'webkitTransition' in documentHead.style ? 'webkitTransitionDuration'
  : /* istanbul ignore next */'transitionDuration';
export default transitionDuration;
