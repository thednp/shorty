export declare interface CustomElement extends HTMLElement {
	shadowRoot: ShadowRoot;
	connectedCallback?: () => void;
	disconnectedCallback?: () => void;
	adoptedCallback?: () => void;
	attributeChangedCallback?: () => void;
}
declare const isCustomElement: <T extends CustomElement>(element?: unknown) => element is T;

export {
	isCustomElement as default,
};

export {};
