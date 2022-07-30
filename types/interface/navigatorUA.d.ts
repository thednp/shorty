export interface NavigatorUABrand {
    readonly brand: string;
    readonly version: string;
}
export interface NavigatorUAData {
    readonly brands: NavigatorUABrand[];
    readonly mobile: boolean;
    readonly platform: string;
}
export default interface NavigatorUA extends Navigator {
    readonly userAgentData: NavigatorUAData;
}
//# sourceMappingURL=navigatorUA.d.ts.map