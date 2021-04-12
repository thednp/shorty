const support3DTransform = 'webkitPerspective' in document.head.style || 'perspective' in document.head.style;
export default support3DTransform;
