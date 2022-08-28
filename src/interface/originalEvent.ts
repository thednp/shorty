export interface OriginalEvent extends CustomEvent<any> {
  readonly type: string;
  relatedTarget?: EventTarget;
}
