/**
 * Shortcut for `Object.assign()` static method.
 * @param obj a target object
 * @param source source object(s)
 * @see https://github.com/devinrhode2/ObjectTyped/blob/master/src/index.ts
 */

const ObjectAssign = <A extends {}, B>(obj: A, ...source: B[]): B extends any[] ? any : A & B =>
  Object.assign(obj, ...source);

export default ObjectAssign;
