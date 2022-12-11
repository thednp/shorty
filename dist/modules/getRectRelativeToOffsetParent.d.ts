export declare interface OffsetRect {
	width: number;
	height: number;
	x: number;
	y: number;
}
declare const getRectRelativeToOffsetParent: (element: HTMLElement, offsetParent: HTMLElement, scroll: {
	x: number;
	y: number;
}) => OffsetRect;

export {
	getRectRelativeToOffsetParent as default,
};

export {};
