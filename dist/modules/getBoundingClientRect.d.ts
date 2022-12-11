export declare interface BoundingClientRect {
	width: number;
	height: number;
	top: number;
	left: number;
	right: number;
	bottom: number;
	x: number;
	y: number;
}
declare const getBoundingClientRect: (element: HTMLElement, includeScale?: boolean) => BoundingClientRect;

export {
	getBoundingClientRect as default,
};

export {};
