export default function tryWrapper(fn, origin) {
  try { fn(); } catch (e) {
    throw TypeError(`${origin} ${e}`);
  }
}
