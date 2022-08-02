import CustomElement from "../interface/customElement";
declare const isCustomElement: <T extends CustomElement>(element?: any) => element is T;
export default isCustomElement;
