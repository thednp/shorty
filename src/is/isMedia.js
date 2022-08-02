const isMedia = (element) => (element &&
    element.nodeType === 1 &&
    ["SVG", "Image", "Video", "Canvas"].some((s) => element.constructor.name.includes(s))) ||
    false;
export default isMedia;
//# sourceMappingURL=isMedia.js.map