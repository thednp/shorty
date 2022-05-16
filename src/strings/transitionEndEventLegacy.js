import documentHead from '../blocks/documentHead';

/**
 * A global namespace for 'transitionend' string.
 * @type {string}
 */
const transitionEndEvent = 'webkitTransition' in documentHead.style ? 'webkitTransitionEnd'
  : /* istanbul ignore next */'transitionend';
export default transitionEndEvent;
