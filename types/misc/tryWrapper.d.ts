/**
 * Utility to wrap a callback in a try() catch(e)
 *
 * @param {Function} fn callback
 * @param {string} origin callback context description
 */
export default function tryWrapper(fn: Function, origin: string): void;
