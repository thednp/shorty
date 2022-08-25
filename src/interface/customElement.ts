export interface CustomElement extends HTMLElement {
  shadowRoot: ShadowRoot;
  connectedCallback?: () => void;
  disconnectedCallback?: () => void;
  adoptedCallback?: () => void;
  attributeChangedCallback?: () => void;
  [key: string]: any;
}
