declare const Data: {
    set: (element: HTMLElement, component: string, instance: Record<string, any>) => void;
    getAllFor: (component: string) => Map<HTMLElement, Record<string, any>> | null;
    get: (element: HTMLElement, component: string) => Record<string, any> | null;
    remove: (element: HTMLElement, component: string) => void;
};
export declare const getInstance: (target: HTMLElement, component: string) => Record<string, any>;
export default Data;
//# sourceMappingURL=data.d.ts.map