/**
 * A global `boolean` for CSS3 3D transform support.
 */
const support3DTransform = () =>
  ["webkitPerspective", "perspective"].some((p) => p in document.head.style);

export default support3DTransform;
