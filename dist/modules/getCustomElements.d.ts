export declare interface CustomElement extends HTMLElement {
	shadowRoot: ShadowRoot;
	connectedCallback?: () => void;
	disconnectedCallback?: () => void;
	adoptedCallback?: () => void;
	attributeChangedCallback?: () => void;
}
declare const getCustomElements: (parent?: ParentNode) => CustomElement[];

export {
	getCustomElements as default,
};

export {};
