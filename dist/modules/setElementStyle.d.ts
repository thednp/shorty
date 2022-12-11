export declare interface CSS4Declaration extends Exclude<() => string | symbol, CSSStyleDeclaration> {
	[key: string]: string;
}
declare const setElementStyle: (element: HTMLElement, styles: Partial<CSS4Declaration>) => void;

export {
	setElementStyle as default,
};

export {};
