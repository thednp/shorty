import ariaHidden from "../strings/ariaHidden.ts";
import focusableSelector from "../strings/focusableSelector.ts";
import querySelectorAll from "../selectors/querySelectorAll.ts";
import getAttribute from "../attr/getAttribute.ts";
import hasAttribute from "../attr/hasAttribute.ts";
import off from "../event/off.ts";
import on from "../event/on.ts";
import getDocument from "../get/getDocument.ts";
import { KeyboardEvent } from "../interface/event.d.ts";

const focusTrapMap = new Map<Element, boolean>();

export type FocusableElement =
  | HTMLAnchorElement
  | HTMLButtonElement
  | HTMLInputElement
  | HTMLTextAreaElement
  | HTMLDataListElement
  | HTMLDetailsElement
  | HTMLSelectElement;

export function handleKeyboardNavigation<T extends Element & EventTarget>(
  this: T,
  event: KeyboardEvent<T>,
) {
  const { shiftKey, code } = event;
  const doc = getDocument(this);
  const focusableElements = [
    ...querySelectorAll<FocusableElement>(focusableSelector, this),
  ].filter(
    (el) => !hasAttribute(el, "disabled") && !getAttribute(el, ariaHidden),
  );

  if (!focusableElements.length) return;
  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];

  /* istanbul ignore else @preserve */
  if (code === "Tab") {
    if (shiftKey && doc.activeElement === firstFocusable) {
      lastFocusable.focus();
      event.preventDefault();
    } else if (!shiftKey && doc.activeElement === lastFocusable) {
      firstFocusable.focus();
      event.preventDefault();
    }
  }
}

/**
 * Utility to check if a designated element is affected by focus trap;
 * @param target
 */
export const hasFocusTrap = (target: Element) =>
  focusTrapMap.has(target) === true;

/**
 * Utility to add focus trap inside a designated target element;
 * @param target
 */
export const addFocusTrap = (target: Element) => {
  if (hasFocusTrap(target)) return;
  on(target, "keydown", handleKeyboardNavigation);
  focusTrapMap.set(target, true);
};

/**
 * Utility to remove focus trap inside a designated target element;
 * @param target
 */
export const removeFocusTrap = (target: Element) => {
  if (!hasFocusTrap(target)) return;
  off(target, "keydown", handleKeyboardNavigation);
  focusTrapMap.delete(target);
};

/**
 * Utility to toggle focus trap inside a designated target element;
 * @param target
 */
export const toggleFocusTrap = (target: Element) => {
  if (hasFocusTrap(target)) removeFocusTrap(target);
  else addFocusTrap(target);
};
