import { Fn } from "../interface/fn";

/**
 * Checks if an object is a `Function`.
 *
 * @param fn the target object
 * @returns the query result
 */
const isFunction = (fn?: unknown): fn is Fn =>
  typeof fn === "function" || false;

export default isFunction;
