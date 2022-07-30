declare const isCustomElement: <T extends HTMLElement & {
    shadowRoot: Node;
}>(element?: any) => element is T;
export default isCustomElement;
//# sourceMappingURL=isCustomElement.d.ts.map