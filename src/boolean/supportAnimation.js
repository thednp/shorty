const supportAnimation = 'webkitAnimation' in document.head.style || 'animation' in document.head.style;
export default supportAnimation;
