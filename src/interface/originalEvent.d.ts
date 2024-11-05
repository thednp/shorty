export declare interface OriginalEvent extends CustomEvent<unknown> {
  readonly type: string;
  relatedTarget?: EventTarget & HTMLElement;
}
