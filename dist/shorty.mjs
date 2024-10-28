const ariaChecked = "aria-checked", ariaDescription = "aria-description", ariaDescribedBy = "aria-describedby", ariaExpanded = "aria-expanded", ariaHasPopup = "aria-haspopup", ariaHidden = "aria-hidden", ariaLabel = "aria-label", ariaLabelledBy = "aria-labelledby", ariaModal = "aria-modal", ariaPressed = "aria-pressed", ariaSelected = "aria-selected", ariaValueMin = "aria-valuemin", ariaValueMax = "aria-valuemax", ariaValueNow = "aria-valuenow", ariaValueText = "aria-valuetext", abortEvent = "abort", beforeunloadEvent = "beforeunload", blurEvent = "blur", changeEvent = "change", contextmenuEvent = "contextmenu", DOMContentLoadedEvent = "DOMContentLoaded", DOMMouseScrollEvent = "DOMMouseScroll", errorEvent = "error", focusEvent = "focus", focusinEvent = "focusin", focusoutEvent = "focusout", gesturechangeEvent = "gesturechange", gestureendEvent = "gestureend", gesturestartEvent = "gesturestart", keydownEvent = "keydown", keypressEvent = "keypress", keyupEvent = "keyup", loadEvent = "load", mouseclickEvent = "click", mousedblclickEvent = "dblclick", mousedownEvent = "mousedown", mouseupEvent = "mouseup", mousehoverEvent = "hover", mouseenterEvent = "mouseenter", mouseleaveEvent = "mouseleave", mouseinEvent = "mousein", mouseoutEvent = "mouseout", mouseoverEvent = "mouseover", mousemoveEvent = "mousemove", mousewheelEvent = "mousewheel", moveEvent = "move", orientationchangeEvent = "orientationchange", pointercancelEvent = "pointercancel", pointerdownEvent = "pointerdown", pointerleaveEvent = "pointerleave", pointermoveEvent = "pointermove", pointerupEvent = "pointerup", readystatechangeEvent = "readystatechange", resetEvent = "reset", resizeEvent = "resize", selectEvent = "select", selectendEvent = "selectend", selectstartEvent = "selectstart", scrollEvent = "scroll", submitEvent = "submit", touchstartEvent = "touchstart", touchmoveEvent = "touchmove", touchcancelEvent = "touchcancel", touchendEvent = "touchend", unloadEvent = "unload", nativeEvents = {
  DOMContentLoaded: DOMContentLoadedEvent,
  DOMMouseScroll: DOMMouseScrollEvent,
  abort: abortEvent,
  beforeunload: beforeunloadEvent,
  blur: blurEvent,
  change: changeEvent,
  click: mouseclickEvent,
  contextmenu: contextmenuEvent,
  dblclick: mousedblclickEvent,
  error: errorEvent,
  focus: focusEvent,
  focusin: focusinEvent,
  focusout: focusoutEvent,
  gesturechange: gesturechangeEvent,
  gestureend: gestureendEvent,
  gesturestart: gesturestartEvent,
  hover: mousehoverEvent,
  keydown: keydownEvent,
  keypress: keypressEvent,
  keyup: keyupEvent,
  load: loadEvent,
  mousedown: mousedownEvent,
  mousemove: mousemoveEvent,
  mousein: mouseinEvent,
  mouseout: mouseoutEvent,
  mouseenter: mouseenterEvent,
  mouseleave: mouseleaveEvent,
  mouseover: mouseoverEvent,
  mouseup: mouseupEvent,
  mousewheel: mousewheelEvent,
  move: moveEvent,
  orientationchange: orientationchangeEvent,
  pointercancel: pointercancelEvent,
  pointerdown: pointerdownEvent,
  pointerleave: pointerleaveEvent,
  pointermove: pointermoveEvent,
  pointerup: pointerupEvent,
  readystatechange: readystatechangeEvent,
  reset: resetEvent,
  resize: resizeEvent,
  scroll: scrollEvent,
  select: selectEvent,
  selectend: selectendEvent,
  selectstart: selectstartEvent,
  submit: submitEvent,
  touchcancel: touchcancelEvent,
  touchend: touchendEvent,
  touchmove: touchmoveEvent,
  touchstart: touchstartEvent,
  unload: unloadEvent
}, dragEvent = "drag", dragstartEvent = "dragstart", dragenterEvent = "dragenter", dragleaveEvent = "dragleave", dragoverEvent = "dragover", dragendEvent = "dragend", loadstartEvent = "loadstart", mouseSwipeEvents = {
  start: "mousedown",
  end: "mouseup",
  move: "mousemove",
  cancel: "mouseleave"
}, mouseClickEvents = { down: "mousedown", up: "mouseup" }, mouseHoverEvents = "onmouseleave" in document ? ["mouseenter", "mouseleave"] : (
  /* istanbul ignore next @preserve */
  ["mouseover", "mouseout"]
), touchEvents = {
  start: "touchstart",
  end: "touchend",
  move: "touchmove",
  cancel: "touchcancel"
}, focusEvents = { in: "focusin", out: "focusout" }, focusableSelector = 'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"]', keyboardEventKeys = {
  Backspace: "Backspace",
  //  8
  Tab: "Tab",
  //  9
  Enter: "Enter",
  // 13
  Shift: "Shift",
  // 16
  Control: "Control",
  // 17
  Alt: "Alt",
  // 18
  Pause: "Pause",
  // 19
  CapsLock: "CapsLock",
  // 20
  Escape: "Escape",
  // 27
  Scape: "Space",
  // 32
  ArrowLeft: "ArrowLeft",
  // 37
  ArrowUp: "ArrowUp",
  // 38
  ArrowRight: "ArrowRight",
  // 39
  ArrowDown: "ArrowDown",
  // 40
  Insert: "Insert",
  // 45
  Delete: "Delete",
  // 46
  Meta: "Meta",
  // 91 windows key
  ContextMenu: "ContextMenu",
  // 93
  ScrollLock: "ScrollLock"
  // 145
}, keyAlt = "Alt", keyArrowDown = "ArrowDown", keyArrowUp = "ArrowUp", keyArrowLeft = "ArrowLeft", keyArrowRight = "ArrowRight", keyBackspace = "Backspace", keyCapsLock = "CapsLock", keyControl = "Control", keyDelete = "Delete", keyEnter = "Enter", keyNumpadEnter = "NumpadEnter", keyEscape = "Escape", keyInsert = "Insert", keyMeta = "Meta", keyPause = "Pause", keyScrollLock = "ScrollLock", keyShift = "Shift", keySpace = "Space", keyTab = "Tab", animationDuration = "animationDuration", animationDelay = "animationDelay", animationName = "animationName", animationEndEvent = "animationend", transitionDuration = "transitionDuration", transitionDelay = "transitionDelay", transitionEndEvent = "transitionend", transitionProperty = "transitionProperty", addEventListener = "addEventListener", removeEventListener = "removeEventListener", bezierEasings = {
  linear: "linear",
  easingSinusoidalIn: "cubic-bezier(0.47,0,0.745,0.715)",
  easingSinusoidalOut: "cubic-bezier(0.39,0.575,0.565,1)",
  easingSinusoidalInOut: "cubic-bezier(0.445,0.05,0.55,0.95)",
  easingQuadraticIn: "cubic-bezier(0.550,0.085,0.680,0.530)",
  easingQuadraticOut: "cubic-bezier(0.250,0.460,0.450,0.940)",
  easingQuadraticInOut: "cubic-bezier(0.455,0.030,0.515,0.955)",
  easingCubicIn: "cubic-bezier(0.55,0.055,0.675,0.19)",
  easingCubicOut: "cubic-bezier(0.215,0.61,0.355,1)",
  easingCubicInOut: "cubic-bezier(0.645,0.045,0.355,1)",
  easingQuarticIn: "cubic-bezier(0.895,0.03,0.685,0.22)",
  easingQuarticOut: "cubic-bezier(0.165,0.84,0.44,1)",
  easingQuarticInOut: "cubic-bezier(0.77,0,0.175,1)",
  easingQuinticIn: "cubic-bezier(0.755,0.05,0.855,0.06)",
  easingQuinticOut: "cubic-bezier(0.23,1,0.32,1)",
  easingQuinticInOut: "cubic-bezier(0.86,0,0.07,1)",
  easingExponentialIn: "cubic-bezier(0.95,0.05,0.795,0.035)",
  easingExponentialOut: "cubic-bezier(0.19,1,0.22,1)",
  easingExponentialInOut: "cubic-bezier(1,0,0,1)",
  easingCircularIn: "cubic-bezier(0.6,0.04,0.98,0.335)",
  easingCircularOut: "cubic-bezier(0.075,0.82,0.165,1)",
  easingCircularInOut: "cubic-bezier(0.785,0.135,0.15,0.86)",
  easingBackIn: "cubic-bezier(0.6,-0.28,0.735,0.045)",
  easingBackOut: "cubic-bezier(0.175,0.885,0.32,1.275)",
  easingBackInOut: "cubic-bezier(0.68,-0.55,0.265,1.55)"
}, offsetHeight = "offsetHeight", offsetWidth = "offsetWidth", scrollHeight = "scrollHeight", scrollWidth = "scrollWidth", tabindex = "tabindex", userAgentData = navigator.userAgentData, { userAgent: userAgentString } = navigator, userAgent = userAgentString, isMobile = () => {
  const mobileBrands = /iPhone|iPad|iPod|Android/i;
  return navigator?.userAgentData?.brands.some(
    (x) => mobileBrands.test(x.brand)
  ) || mobileBrands.test(navigator?.userAgent) || !1;
}, isApple = () => {
  const appleBrands = /(iPhone|iPod|iPad)/;
  return navigator?.userAgentData?.brands.some(
    (x) => appleBrands.test(x.brand)
  ) || /* istanbul ignore next @preserve */
  appleBrands.test(
    navigator?.userAgent
  ) || !1;
}, isFirefox = () => navigator?.userAgent?.includes("Firefox") || /* istanbul ignore next @preserve */
!1, support3DTransform = () => ["webkitPerspective", "perspective"].some((p) => p in document.head.style), noop = () => {
}, on = (element, eventName, listener, options) => {
  const ops = options || !1;
  element.addEventListener(
    eventName,
    listener,
    ops
  );
}, off = (element, eventName, listener, options) => {
  const ops = options || !1;
  element.removeEventListener(
    eventName,
    listener,
    ops
  );
}, one = (element, eventName, listener, options) => {
  const handlerWrapper = (e) => {
    (e.target === element || e.currentTarget === element) && (listener.apply(element, [e]), off(element, eventName, handlerWrapper, options));
  };
  on(element, eventName, handlerWrapper, options);
}, supportPassive = () => {
  let result = !1;
  try {
    const opts = Object.defineProperty({}, "passive", {
      get: () => (result = !0, result)
    });
    one(document, DOMContentLoadedEvent, noop, opts);
  } catch {
  }
  return result;
}, supportTransform = () => ["webkitTransform", "transform"].some((p) => p in document.head.style), supportTouch = () => "ontouchstart" in window || /* istanbul ignore next @preserve */
"msMaxTouchPoints" in navigator, supportAnimation = () => ["webkitAnimation", "animation"].some((p) => p in document.head.style), supportTransition = () => ["webkitTransition", "transition"].some((p) => p in document.head.style), getAttribute = (element, att) => element.getAttribute(att), getAttributeNS = (ns, element, att) => element.getAttributeNS(ns, att), hasAttribute = (element, att) => element.hasAttribute(att), hasAttributeNS = (ns, element, att) => element.hasAttributeNS(ns, att), setAttribute = (element, att, value) => element.setAttribute(att, value), setAttributeNS = (ns, element, att, value) => element.setAttributeNS(ns, att, value), removeAttribute = (element, att) => element.removeAttribute(att), removeAttributeNS = (ns, element, att) => element.removeAttributeNS(ns, att), addClass = (element, ...classNAME) => {
  element.classList.add(...classNAME);
}, removeClass = (element, ...classNAME) => {
  element.classList.remove(...classNAME);
}, hasClass = (element, classNAME) => element.classList.contains(classNAME), { body: documentBody } = document, { documentElement } = document, { head: documentHead } = document, ArrayFrom = (arr) => Array.from(arr), isObject = (obj) => obj != null && typeof obj == "object" || !1, isNode = (node) => isObject(node) && typeof node.nodeType == "number" && [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].some(
  (x) => node.nodeType === x
) || !1, isHTMLElement = (element) => isNode(element) && element.nodeType === 1 || !1, componentData = /* @__PURE__ */ new Map(), Data = {
  data: componentData,
  /**
   * Sets web components data.
   *
   * @param element target element
   * @param component the component's name or a unique key
   * @param instance the component instance
   */
  set: (element, component, instance) => {
    if (!isHTMLElement(element)) return;
    componentData.has(component) || componentData.set(component, /* @__PURE__ */ new Map()), componentData.get(component).set(element, instance);
  },
  /**
   * Returns all instances for specified component.
   *
   * @param component the component's name or a unique key
   * @returns all the component instances
   */
  getAllFor: (component) => componentData.get(component) || null,
  /**
   * Returns the instance associated with the target.
   *
   * @param element target element
   * @param component the component's name or a unique key
   * @returns the instance
   */
  get: (element, component) => {
    if (!isHTMLElement(element) || !component) return null;
    const instanceMap = Data.getAllFor(component);
    return element && instanceMap && instanceMap.get(element) || null;
  },
  /**
   * Removes web components data.
   *
   * @param element target element
   * @param component the component's name or a unique key
   */
  remove: (element, component) => {
    const instanceMap = Data.getAllFor(component);
    !instanceMap || !isHTMLElement(element) || (instanceMap.delete(element), instanceMap.size === 0 && componentData.delete(component));
  }
}, getInstance = (target, component) => Data.get(target, component), isString = (str) => typeof str == "string" || !1, isWindow = (obj) => isObject(obj) && obj.constructor.name === "Window" || !1, isDocument = (obj) => isNode(obj) && obj.nodeType === 9 || !1, getDocument = (node) => isWindow(node) ? node.document : isDocument(node) ? node : isNode(node) ? node.ownerDocument : globalThis.document, ObjectAssign = (obj, ...source) => Object.assign(obj, ...source), createElement = (param) => {
  if (!param) return;
  if (isString(param))
    return getDocument().createElement(param);
  const { tagName } = param, newElement = createElement(tagName);
  if (!newElement) return;
  const attr = { ...param };
  return delete attr.tagName, ObjectAssign(newElement, attr);
}, createElementNS = (ns, param) => {
  if (!ns || !param) return;
  if (isString(param))
    return getDocument().createElementNS(ns, param);
  const { tagName } = param, newElement = createElementNS(ns, tagName);
  if (!newElement) return;
  const attr = { ...param };
  return delete attr.tagName, ObjectAssign(newElement, attr);
}, dispatchEvent = (element, event) => element.dispatchEvent(event), distinct = (value, index, arr) => arr.indexOf(value) === index, getElementStyle = (element, property) => {
  const computedStyle = getComputedStyle(element), prop = property.replace("webkit", "Webkit").replace(/([A-Z])/g, "-$1").toLowerCase();
  return computedStyle.getPropertyValue(prop);
}, getElementAnimationDelay = (element) => {
  const propertyValue = getElementStyle(element, animationName), durationValue = getElementStyle(element, animationDelay), durationScale = durationValue.includes("ms") ? (
    /* istanbul ignore next */
    1
  ) : 1e3, duration = propertyValue && propertyValue !== "none" ? parseFloat(durationValue) * durationScale : 0;
  return Number.isNaN(duration) ? (
    /* istanbul ignore next */
    0
  ) : duration;
}, getElementAnimationDuration = (element) => {
  const propertyValue = getElementStyle(element, animationName), durationValue = getElementStyle(element, animationDuration), durationScale = durationValue.includes("ms") ? (
    /* istanbul ignore next */
    1
  ) : 1e3, duration = propertyValue && propertyValue !== "none" ? parseFloat(durationValue) * durationScale : 0;
  return Number.isNaN(duration) ? (
    /* istanbul ignore next */
    0
  ) : duration;
}, emulateAnimationEnd = (element, handler) => {
  let called = 0;
  const endEvent = new Event(animationEndEvent), duration = getElementAnimationDuration(element), delay = getElementAnimationDelay(element);
  if (duration) {
    const animationEndWrapper = (e) => {
      e.target === element && (handler.apply(element, [e]), element.removeEventListener(animationEndEvent, animationEndWrapper), called = 1);
    };
    element.addEventListener(animationEndEvent, animationEndWrapper), setTimeout(() => {
      called || dispatchEvent(element, endEvent);
    }, duration + delay + 17);
  } else
    handler.apply(element, [endEvent]);
}, getElementTransitionDelay = (element) => {
  const propertyValue = getElementStyle(element, transitionProperty), delayValue = getElementStyle(element, transitionDelay), delayScale = delayValue.includes("ms") ? (
    /* istanbul ignore next */
    1
  ) : 1e3, duration = propertyValue && propertyValue !== "none" ? parseFloat(delayValue) * delayScale : (
    /* istanbul ignore next */
    0
  );
  return Number.isNaN(duration) ? (
    /* istanbul ignore next */
    0
  ) : duration;
}, getElementTransitionDuration = (element) => {
  const propertyValue = getElementStyle(element, transitionProperty), durationValue = getElementStyle(element, transitionDuration), durationScale = durationValue.includes("ms") ? (
    /* istanbul ignore next */
    1
  ) : 1e3, duration = propertyValue && propertyValue !== "none" ? parseFloat(durationValue) * durationScale : (
    /* istanbul ignore next */
    0
  );
  return Number.isNaN(duration) ? (
    /* istanbul ignore next */
    0
  ) : duration;
}, emulateTransitionEnd = (element, handler) => {
  let called = 0;
  const endEvent = new Event(transitionEndEvent), duration = getElementTransitionDuration(element), delay = getElementTransitionDelay(element);
  if (duration) {
    const transitionEndWrapper = (e) => {
      e.target === element && (handler.apply(element, [e]), element.removeEventListener(transitionEndEvent, transitionEndWrapper), called = 1);
    };
    element.addEventListener(transitionEndEvent, transitionEndWrapper), setTimeout(() => {
      called || dispatchEvent(element, endEvent);
    }, duration + delay + 17);
  } else
    handler.apply(element, [endEvent]);
}, Float32ArrayFrom = (arr) => Float32Array.from(Array.from(arr)), Float64ArrayFrom = (arr) => Float64Array.from(Array.from(arr)), focus = (element, options) => element.focus(options), normalizeValue = (value) => ["true", !0].includes(value) ? !0 : ["false", !1].includes(value) ? !1 : ["null", "", null, void 0].includes(value) ? null : value !== "" && !Number.isNaN(+value) ? +value : value, ObjectEntries = (obj) => Object.entries(obj), toLowerCase = (source) => source.toLowerCase(), normalizeOptions = (element, defaultOps, inputOps, ns) => {
  const INPUT = { ...inputOps }, data = { ...element.dataset }, normalOps = { ...defaultOps }, dataOps = {}, title = "title";
  return ObjectEntries(data).forEach(([k, v]) => {
    const key = ns && typeof k == "string" && k.includes(ns) ? k.replace(ns, "").replace(
      /[A-Z]/g,
      (match) => toLowerCase(match)
    ) : (
      /* istanbul ignore next @preserve */
      k
    );
    dataOps[key] = normalizeValue(v);
  }), ObjectEntries(INPUT).forEach(([k, v]) => {
    INPUT[k] = normalizeValue(v);
  }), ObjectEntries(defaultOps).forEach(([k, v]) => {
    k in INPUT ? normalOps[k] = INPUT[k] : k in dataOps ? normalOps[k] = dataOps[k] : normalOps[k] = k === title ? getAttribute(element, title) : v;
  }), normalOps;
}, ObjectHasOwn = (obj, prop) => isObject(obj) && (Object.hasOwn(obj, prop) || prop in obj), ObjectKeys = (obj) => Object.keys(obj), ObjectValues = (obj) => Object.values(obj), ObjectFromEntries = (entries) => Object.fromEntries(entries), createCustomEvent = (eventType, config) => {
  const OriginalCustomEvent = new CustomEvent(eventType, {
    cancelable: !0,
    bubbles: !0
  });
  return isObject(config) && ObjectAssign(OriginalCustomEvent, config), OriginalCustomEvent;
}, passiveHandler = { passive: !0 }, reflow = (element) => element.offsetHeight, setElementStyle = (element, styles) => {
  ObjectEntries(styles).forEach(([key, value]) => {
    if (value && isString(key) && key.includes("--"))
      element.style.setProperty(key, value);
    else {
      const propObject = {};
      propObject[key] = value, ObjectAssign(element.style, propObject);
    }
  });
}, isMap = (obj) => isObject(obj) && obj.constructor.name === "Map" || !1, isNumber = (num) => typeof num == "number" || !1, TimeCache = /* @__PURE__ */ new Map(), Timer = {
  /**
   * Sets a new timeout timer for an element, or element -> key association.
   *
   * @param element target element
   * @param callback the callback
   * @param delay the execution delay
   * @param key a unique key
   */
  set: (element, callback, delay, key) => {
    isHTMLElement(element) && (key && key.length ? (TimeCache.has(element) || TimeCache.set(element, /* @__PURE__ */ new Map()), TimeCache.get(element).set(key, setTimeout(callback, delay))) : TimeCache.set(element, setTimeout(callback, delay)));
  },
  /**
   * Returns the timer associated with the target.
   *
   * @param element target element
   * @param key a unique
   * @returns the timer
   */
  get: (element, key) => {
    if (!isHTMLElement(element)) return null;
    const keyTimers = TimeCache.get(element);
    return key && keyTimers && isMap(keyTimers) ? keyTimers.get(key) || /* istanbul ignore next @preserve */
    null : isNumber(keyTimers) ? keyTimers : null;
  },
  /**
   * Clears the element's timer.
   *
   * @param element target element
   * @param key a unique key
   */
  clear: (element, key) => {
    if (!isHTMLElement(element)) return;
    const keyTimers = TimeCache.get(element);
    key && key.length && isMap(keyTimers) ? (clearTimeout(keyTimers.get(key)), keyTimers.delete(key), keyTimers.size === 0 && TimeCache.delete(element)) : (clearTimeout(keyTimers), TimeCache.delete(element));
  }
}, toUpperCase = (source) => source.toUpperCase(), querySelectorAll = (selector, parent) => (isNode(parent) ? parent : getDocument()).querySelectorAll(selector), focusTrapMap = /* @__PURE__ */ new Map();
function handleKeyboardNavigation(event) {
  const { shiftKey, code } = event, doc = getDocument(this), focusableElements = [
    ...querySelectorAll(focusableSelector, this)
  ].filter(
    (el) => !hasAttribute(el, "disabled") && !getAttribute(el, ariaHidden)
  );
  if (!focusableElements.length) return;
  const firstFocusable = focusableElements[0], lastFocusable = focusableElements[focusableElements.length - 1];
  code === "Tab" && (shiftKey && doc.activeElement === firstFocusable ? (lastFocusable.focus(), event.preventDefault()) : !shiftKey && doc.activeElement === lastFocusable && (firstFocusable.focus(), event.preventDefault()));
}
const hasFocusTrap = (target) => focusTrapMap.has(target) === !0, toggleFocusTrap = (target) => {
  const isCurrentlyTrapped = hasFocusTrap(target);
  (isCurrentlyTrapped ? off : on)(target, "keydown", handleKeyboardNavigation), isCurrentlyTrapped ? focusTrapMap.delete(target) : focusTrapMap.set(target, !0);
}, getBoundingClientRect = (element, includeScale) => {
  const { width, height, top, right, bottom, left } = element.getBoundingClientRect();
  let scaleX = 1, scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    const { offsetWidth: offsetWidth2, offsetHeight: offsetHeight2 } = element;
    scaleX = offsetWidth2 > 0 ? Math.round(width) / offsetWidth2 : (
      /* istanbul ignore next @preserve */
      1
    ), scaleY = offsetHeight2 > 0 ? Math.round(height) / offsetHeight2 : (
      /* istanbul ignore next @preserve */
      1
    );
  }
  return {
    width: width / scaleX,
    height: height / scaleY,
    top: top / scaleY,
    right: right / scaleX,
    bottom: bottom / scaleY,
    left: left / scaleX,
    x: left / scaleX,
    y: top / scaleY
  };
}, getDocumentBody = (node) => getDocument(node).body, getDocumentElement = (node) => getDocument(node).documentElement, getDocumentHead = (node) => getDocument(node).head, getNodeScroll = (element) => {
  const isWin = isWindow(element), x = isWin ? element.scrollX : element.scrollLeft, y = isWin ? element.scrollY : element.scrollTop;
  return { x, y };
}, isShadowRoot = (element) => isNode(element) && element.constructor.name === "ShadowRoot" || !1, getParentNode = (node) => node.nodeName === "HTML" ? node : isHTMLElement(node) && node.assignedSlot || // step into the shadow DOM of the parent of a slotted node
isNode(node) && node.parentNode || // DOM Element detected
isShadowRoot(node) && node.host || // ShadowRoot detected
getDocumentElement(node), isScaledElement = (element) => {
  if (!isHTMLElement(element)) return !1;
  const { width, height } = getBoundingClientRect(element), { offsetWidth: offsetWidth2, offsetHeight: offsetHeight2 } = element;
  return Math.round(width) !== offsetWidth2 || Math.round(height) !== offsetHeight2;
}, getRectRelativeToOffsetParent = (element, offsetParent, scroll) => {
  const isParentAnElement = isHTMLElement(offsetParent), rect = getBoundingClientRect(
    element,
    isParentAnElement && isScaledElement(offsetParent)
  ), offsets = { x: 0, y: 0 };
  if (isParentAnElement) {
    const offsetRect = getBoundingClientRect(offsetParent, !0);
    offsets.x = offsetRect.x + offsetParent.clientLeft, offsets.y = offsetRect.y + offsetParent.clientTop;
  }
  return {
    x: rect.left + scroll.x - offsets.x,
    y: rect.top + scroll.y - offsets.y,
    width: rect.width,
    height: rect.height
  };
};
let elementUID = 0, elementMapUID = 0;
const elementIDMap = /* @__PURE__ */ new Map(), getUID = (element, key) => {
  let result = key ? elementUID : elementMapUID;
  if (key) {
    const elID = getUID(element), elMap = elementIDMap.get(elID) || /* @__PURE__ */ new Map();
    elementIDMap.has(elID) || elementIDMap.set(elID, elMap), isMap(elMap) && !elMap.has(key) ? (elMap.set(key, result), elementUID += 1) : result = elMap.get(key);
  } else {
    const elkey = element.id || element;
    elementIDMap.has(elkey) ? result = elementIDMap.get(elkey) : (elementIDMap.set(elkey, result), elementMapUID += 1);
  }
  return result;
}, getWindow = (node) => node ? isDocument(node) ? node.defaultView : isNode(node) ? node?.ownerDocument?.defaultView : node : window, isArray = (obj) => Array.isArray(obj) || !1, isCanvas = (element) => isNode(element) && element.nodeName === "CANVAS" || !1, isCustomElement = (element) => isHTMLElement(element) && !!element.shadowRoot || !1, isElement = (element) => isNode(element) && [1, 2, 3, 4, 5, 6, 7, 8].some((x) => element.nodeType === x) || !1, isElementInScrollRange = (element) => {
  if (!isNode(element)) return !1;
  const { top, bottom } = getBoundingClientRect(element), { clientHeight } = getDocumentElement(element);
  return top <= clientHeight && bottom >= 0;
}, isElementInViewport = (element) => {
  if (!isNode(element)) return !1;
  const { clientWidth, clientHeight } = getDocumentElement(element), { top, left, bottom, right } = getBoundingClientRect(element, !0);
  return top >= 0 && left >= 0 && bottom <= clientHeight && right <= clientWidth;
}, isElementsArray = (obj) => isArray(obj) && obj.every(isHTMLElement) || !1, isFunction = (fn) => typeof fn == "function" || !1, isHTMLCollection = (obj) => isObject(obj) && obj.constructor.name === "HTMLCollection" || !1, isHTMLImageElement = (element) => isHTMLElement(element) && element.tagName === "IMG" || !1, isJSON = (str) => {
  if (!isString(str)) return !1;
  try {
    JSON.parse(str);
  } catch {
    return !1;
  }
  return !0;
}, isWeakMap = (obj) => isObject(obj) && obj.constructor.name === "WeakMap" || !1, isMedia = (element) => isNode(element) && ["SVG", "Image", "Video", "Canvas"].some(
  (s) => element.constructor.name.includes(s)
) || !1, isNodeList = (obj) => isObject(obj) && obj.constructor.name === "NodeList" || !1, isRTL = (node) => getDocumentElement(node).dir === "rtl", isSVGElement = (element) => isNode(element) && element.constructor.name.includes("SVG") || !1, isTableElement = (element) => isNode(element) && ["TABLE", "TD", "TH"].includes(element.nodeName) || !1, closest = (element, selector) => element ? element.closest(selector) || // break out of `ShadowRoot`
closest(element.getRootNode().host, selector) : null, querySelector = (selector, parent) => isHTMLElement(selector) ? selector : (isNode(parent) ? parent : getDocument()).querySelector(selector), getElementsByTagName = (selector, parent) => (isNode(parent) ? parent : getDocument()).getElementsByTagName(
  selector
), getCustomElements = (parent) => [...getElementsByTagName("*", parent)].filter(isCustomElement), getElementById = (id, context) => getDocument(context).getElementById(id) || null, getElementsByClassName = (selector, parent) => (parent && isNode(parent) ? parent : getDocument()).getElementsByClassName(
  selector
), matches = (target, selector) => target.matches(selector), version = "2.0.7";
export {
  ArrayFrom,
  DOMContentLoadedEvent,
  DOMMouseScrollEvent,
  Data,
  Float32ArrayFrom,
  Float64ArrayFrom,
  ObjectAssign,
  ObjectEntries,
  ObjectFromEntries,
  ObjectHasOwn,
  ObjectKeys,
  ObjectValues,
  Timer,
  abortEvent,
  addClass,
  addEventListener,
  animationDelay,
  animationDuration,
  animationEndEvent,
  animationName,
  ariaChecked,
  ariaDescribedBy,
  ariaDescription,
  ariaExpanded,
  ariaHasPopup,
  ariaHidden,
  ariaLabel,
  ariaLabelledBy,
  ariaModal,
  ariaPressed,
  ariaSelected,
  ariaValueMax,
  ariaValueMin,
  ariaValueNow,
  ariaValueText,
  beforeunloadEvent,
  bezierEasings,
  blurEvent,
  changeEvent,
  closest,
  contextmenuEvent,
  createCustomEvent,
  createElement,
  createElementNS,
  dispatchEvent,
  distinct,
  documentBody,
  documentElement,
  documentHead,
  dragEvent,
  dragendEvent,
  dragenterEvent,
  dragleaveEvent,
  dragoverEvent,
  dragstartEvent,
  emulateAnimationEnd,
  emulateTransitionEnd,
  errorEvent,
  focus,
  focusEvent,
  focusEvents,
  focusableSelector,
  focusinEvent,
  focusoutEvent,
  gesturechangeEvent,
  gestureendEvent,
  gesturestartEvent,
  getAttribute,
  getAttributeNS,
  getBoundingClientRect,
  getCustomElements,
  getDocument,
  getDocumentBody,
  getDocumentElement,
  getDocumentHead,
  getElementAnimationDelay,
  getElementAnimationDuration,
  getElementById,
  getElementStyle,
  getElementTransitionDelay,
  getElementTransitionDuration,
  getElementsByClassName,
  getElementsByTagName,
  getInstance,
  getNodeScroll,
  getParentNode,
  getRectRelativeToOffsetParent,
  getUID,
  getWindow,
  hasAttribute,
  hasAttributeNS,
  hasClass,
  hasFocusTrap,
  isApple,
  isArray,
  isCanvas,
  isCustomElement,
  isDocument,
  isElement,
  isElementInScrollRange,
  isElementInViewport,
  isElementsArray,
  isFirefox,
  isFunction,
  isHTMLCollection,
  isHTMLElement,
  isHTMLImageElement,
  isJSON,
  isMap,
  isMedia,
  isMobile,
  isNode,
  isNodeList,
  isNumber,
  isObject,
  isRTL,
  isSVGElement,
  isScaledElement,
  isShadowRoot,
  isString,
  isTableElement,
  isWeakMap,
  isWindow,
  keyAlt,
  keyArrowDown,
  keyArrowLeft,
  keyArrowRight,
  keyArrowUp,
  keyBackspace,
  keyCapsLock,
  keyControl,
  keyDelete,
  keyEnter,
  keyEscape,
  keyInsert,
  keyMeta,
  keyNumpadEnter,
  keyPause,
  keyScrollLock,
  keyShift,
  keySpace,
  keyTab,
  keyboardEventKeys,
  keydownEvent,
  keypressEvent,
  keyupEvent,
  loadEvent,
  loadstartEvent,
  matches,
  mouseClickEvents,
  mouseHoverEvents,
  mouseSwipeEvents,
  mouseclickEvent,
  mousedblclickEvent,
  mousedownEvent,
  mouseenterEvent,
  mousehoverEvent,
  mouseinEvent,
  mouseleaveEvent,
  mousemoveEvent,
  mouseoutEvent,
  mouseoverEvent,
  mouseupEvent,
  mousewheelEvent,
  moveEvent,
  nativeEvents,
  noop,
  normalizeOptions,
  normalizeValue,
  off,
  offsetHeight,
  offsetWidth,
  on,
  one,
  orientationchangeEvent,
  passiveHandler,
  pointercancelEvent,
  pointerdownEvent,
  pointerleaveEvent,
  pointermoveEvent,
  pointerupEvent,
  querySelector,
  querySelectorAll,
  readystatechangeEvent,
  reflow,
  removeAttribute,
  removeAttributeNS,
  removeClass,
  removeEventListener,
  resetEvent,
  resizeEvent,
  scrollEvent,
  scrollHeight,
  scrollWidth,
  selectEvent,
  selectendEvent,
  selectstartEvent,
  setAttribute,
  setAttributeNS,
  setElementStyle,
  submitEvent,
  support3DTransform,
  supportAnimation,
  supportPassive,
  supportTouch,
  supportTransform,
  supportTransition,
  tabindex,
  toLowerCase,
  toUpperCase,
  toggleFocusTrap,
  touchEvents,
  touchcancelEvent,
  touchendEvent,
  touchmoveEvent,
  touchstartEvent,
  transitionDelay,
  transitionDuration,
  transitionEndEvent,
  transitionProperty,
  unloadEvent,
  userAgent,
  userAgentData,
  version
};
//# sourceMappingURL=shorty.mjs.map
