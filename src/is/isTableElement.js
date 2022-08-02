const isTableElement = (element) => (element && ["TABLE", "TD", "TH"].includes(element.tagName)) || false;
export default isTableElement;
