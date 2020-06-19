// general event options
// not suited for scroll prevention
// https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
import supportPassive from '../boolean/supportPassive.js'

export default supportPassive ? { passive: true } : false