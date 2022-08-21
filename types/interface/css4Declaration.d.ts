export default interface CSS4Declaration extends Exclude<() => string | symbol, CSSStyleDeclaration> {
    [key: string]: string;
}
