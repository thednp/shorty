declare const Data: {
	/**
	 * Sets web components data.
	 *
	 * @param element target element
	 * @param component the component's name or a unique key
	 * @param instance the component instance
	 */
	set: <T>(element: HTMLElement, component: string, instance: T) => void;
	/**
	 * Returns all instances for specified component.
	 *
	 * @param component the component's name or a unique key
	 * @returns all the component instances
	 */
	getAllFor: <T_1>(component: string) => Map<HTMLElement, T_1> | null;
	/**
	 * Returns the instance associated with the target.
	 *
	 * @param element target element
	 * @param component the component's name or a unique key
	 * @returns the instance
	 */
	get: <T_2>(element: HTMLElement, component: string) => T_2 | null;
	/**
	 * Removes web components data.
	 *
	 * @param element target element
	 * @param component the component's name or a unique key
	 */
	remove: <T_3>(element: HTMLElement, component: string) => void;
};

export {
	Data as default,
};

export {};
