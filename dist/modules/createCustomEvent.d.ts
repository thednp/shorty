export declare interface OriginalEvent extends CustomEvent<any> {
	readonly type: string;
	relatedTarget?: EventTarget;
}
declare const createCustomEvent: <T extends OriginalEvent>(eventType: string, config?: CustomEventInit<any>) => T;

export {
	createCustomEvent as default,
};

export {};
