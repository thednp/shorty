declare function ObjectAssignTyped<T, U>(target: T, source: U): T & U;
declare function ObjectAssignTyped<T, U, V>(target: T, source1: U, source2: V): T & U & V;
declare function ObjectAssignTyped<T, U, V, W>(target: T, source1: U, source2: V, source3: W): T & U & V & W;
declare function ObjectAssignTyped<T, U, V, W, Q>(target: T, source1: U, source2: V, source3: W, source4: Q): T & U & V & W & Q;
declare function ObjectAssignTyped<T, U, V, W, Q, R>(target: T, source1: U, source2: V, source3: W, source4: Q, source5: R): T & U & V & W & Q & R;
declare function ObjectAssignTyped(target: any, ...sources: any[]): any;
declare const ObjectAssign: typeof ObjectAssignTyped;

export {
	ObjectAssign as default,
};

export {};
