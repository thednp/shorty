declare const Timer: {
	/**
	 * Sets a new timeout timer for an element, or element -> key association.
	 *
	 * @param element target element
	 * @param callback the callback
	 * @param delay the execution delay
	 * @param key a unique key
	 */
	set: (element: HTMLElement, callback: TimerHandler, delay: number, key?: string) => void;
	/**
	 * Returns the timer associated with the target.
	 *
	 * @param element target element
	 * @param key a unique
	 * @returns the timer
	 */
	get: (element: HTMLElement, key?: string) => number | null;
	/**
	 * Clears the element's timer.
	 *
	 * @param element target element
	 * @param key a unique key
	 */
	clear: (element: HTMLElement, key?: string) => void;
};

export {
	Timer as default,
};

export {};
