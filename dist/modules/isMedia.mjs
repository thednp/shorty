import isNode from './isNode.mjs';
import './isObject.mjs';

const isMedia = (element) => isNode(element) && ["SVG", "Image", "Video", "Canvas"].some((s) => element.constructor.name.includes(s)) || false;

export { isMedia as default };
//# sourceMappingURL=isMedia.mjs.map
