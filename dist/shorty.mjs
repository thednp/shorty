const de = "aria-checked", pe = "aria-description", fe = "aria-describedby", me = "aria-expanded", ge = "aria-haspopup", Ee = "aria-hidden", ve = "aria-label", be = "aria-labelledby", he = "aria-modal", ye = "aria-pressed", we = "aria-selected", Ae = "aria-valuemin", Se = "aria-valuemax", Me = "aria-valuenow", ke = "aria-valuetext", j = "abort", q = "beforeunload", G = "blur", Y = "change", J = "contextmenu", I = "DOMContentLoaded", K = "DOMMouseScroll", X = "error", Z = "focus", $ = "focusin", _ = "focusout", tt = "gesturechange", et = "gestureend", nt = "gesturestart", ot = "keydown", st = "keypress", ct = "keyup", rt = "load", it = "click", at = "dblclick", ut = "mousedown", lt = "mouseup", dt = "hover", pt = "mouseenter", ft = "mouseleave", mt = "mousein", gt = "mouseout", Et = "mouseover", vt = "mousemove", bt = "mousewheel", ht = "move", yt = "orientationchange", wt = "pointercancel", At = "pointerdown", St = "pointerleave", Mt = "pointermove", kt = "pointerup", Nt = "readystatechange", Tt = "reset", Dt = "resize", Ct = "select", Lt = "selectend", Ot = "selectstart", It = "scroll", zt = "submit", xt = "touchstart", Ht = "touchmove", Vt = "touchcancel", Bt = "touchend", Pt = "unload", Ne = {
  DOMContentLoaded: I,
  DOMMouseScroll: K,
  abort: j,
  beforeunload: q,
  blur: G,
  change: Y,
  click: it,
  contextmenu: J,
  dblclick: at,
  error: X,
  focus: Z,
  focusin: $,
  focusout: _,
  gesturechange: tt,
  gestureend: et,
  gesturestart: nt,
  hover: dt,
  keydown: ot,
  keypress: st,
  keyup: ct,
  load: rt,
  mousedown: ut,
  mousemove: vt,
  mousein: mt,
  mouseout: gt,
  mouseenter: pt,
  mouseleave: ft,
  mouseover: Et,
  mouseup: lt,
  mousewheel: bt,
  move: ht,
  orientationchange: yt,
  pointercancel: wt,
  pointerdown: At,
  pointerleave: St,
  pointermove: Mt,
  pointerup: kt,
  readystatechange: Nt,
  reset: Tt,
  resize: Dt,
  scroll: It,
  select: Ct,
  selectend: Lt,
  selectstart: Ot,
  submit: zt,
  touchcancel: Vt,
  touchend: Bt,
  touchmove: Ht,
  touchstart: xt,
  unload: Pt
}, Te = "loadstart", De = {
  start: "mousedown",
  end: "mouseup",
  move: "mousemove",
  cancel: "mouseleave"
}, Ce = { down: "mousedown", up: "mouseup" }, Le = "onmouseleave" in document ? ["mouseenter", "mouseleave"] : ["mouseover", "mouseout"], Oe = {
  start: "touchstart",
  end: "touchend",
  move: "touchmove",
  cancel: "touchcancel"
}, Ie = { in: "focusin", out: "focusout" }, ze = {
  Backspace: "Backspace",
  Tab: "Tab",
  Enter: "Enter",
  Shift: "Shift",
  Control: "Control",
  Alt: "Alt",
  Pause: "Pause",
  CapsLock: "CapsLock",
  Escape: "Escape",
  Scape: "Space",
  ArrowLeft: "ArrowLeft",
  ArrowUp: "ArrowUp",
  ArrowRight: "ArrowRight",
  ArrowDown: "ArrowDown",
  Insert: "Insert",
  Delete: "Delete",
  Meta: "Meta",
  ContextMenu: "ContextMenu",
  ScrollLock: "ScrollLock"
}, xe = "Alt", He = "ArrowDown", Ve = "ArrowUp", Be = "ArrowLeft", Pe = "ArrowRight", Fe = "Backspace", Ue = "CapsLock", We = "Control", Re = "Delete", Qe = "Enter", je = "Escape", qe = "Insert", Ge = "Meta", Ye = "Pause", Je = "ScrollLock", Ke = "Shift", Xe = "Space", Ze = "Tab", Ft = "animationDuration", Ut = "animationDelay", z = "animationName", N = "animationend", Wt = "transitionDuration", Rt = "transitionDelay", T = "transitionend", x = "transitionProperty", $e = "addEventListener", _e = "removeEventListener", tn = {
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
}, en = "offsetHeight", nn = "offsetWidth", on = "scrollHeight", sn = "scrollWidth", cn = "tabindex", rn = navigator.userAgentData, w = rn, { userAgent: an } = navigator, A = an, U = /iPhone|iPad|iPod|Android/i;
let L = !1;
w ? L = w.brands.some((t) => U.test(t.brand)) : L = U.test(A);
const un = L, W = /(iPhone|iPod|iPad)/, ln = w ? w.brands.some((t) => W.test(t.brand)) : W.test(A), dn = A ? A.includes("Firefox") : !1, { head: C } = document, pn = ["webkitPerspective", "perspective"].some((t) => t in C.style);
function Qt(t, e, n, o) {
  const s = o || !1;
  t.addEventListener(e, n, s);
}
function jt(t, e, n, o) {
  const s = o || !1;
  t.removeEventListener(e, n, s);
}
const qt = (t, e, n, o) => {
  const s = (c) => {
    c.target === t && (n.apply(t, [c]), jt(t, e, s, o));
  };
  Qt(t, e, s, o);
}, Gt = () => {
}, fn = (() => {
  let t = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        return t = !0, t;
      }
    });
    qt(document, I, Gt, e);
  } catch {
  }
  return t;
})(), mn = ["webkitTransform", "transform"].some((t) => t in C.style), gn = "ontouchstart" in window || "msMaxTouchPoints" in navigator, En = ["webkitAnimation", "animation"].some((t) => t in C.style), vn = ["webkitTransition", "transition"].some((t) => t in C.style), Yt = (t, e) => t.getAttribute(e), bn = (t, e, n) => e.getAttributeNS(t, n), hn = (t, e) => t.hasAttribute(e), yn = (t, e, n) => e.hasAttributeNS(t, n), H = (t, e, n) => t.setAttribute(e, n), wn = (t, e, n, o) => e.setAttributeNS(t, n, o), An = (t, e) => t.removeAttribute(e), Sn = (t, e, n) => e.removeAttributeNS(t, n), Mn = (t, ...e) => {
  t.classList.add(...e);
}, kn = (t, ...e) => {
  t.classList.remove(...e);
}, Nn = (t, e) => t.classList.contains(e), Tn = (t) => Array.from(t), u = (t) => t && t.nodeType === 1 || !1, h = /* @__PURE__ */ new Map(), D = {
  set: (t, e, n) => {
    if (!u(t))
      return;
    h.has(e) || h.set(e, /* @__PURE__ */ new Map()), h.get(e).set(t, n);
  },
  getAllFor: (t) => h.get(t) || null,
  get: (t, e) => {
    if (!u(t) || !e)
      return null;
    const n = D.getAllFor(e);
    return t && n && n.get(t) || null;
  },
  remove: (t, e) => {
    const n = D.getAllFor(e);
    !n || !u(t) || (n.delete(t), n.size === 0 && h.delete(e));
  }
}, Dn = (t, e) => D.get(t, e), S = (t) => typeof t == "string" || !1, l = (t) => t && [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].some((e) => t.nodeType === e) || !1, V = (t) => t && t.constructor.name === "Window" || !1, B = (t) => t && t.nodeType === 9 || !1, d = (t) => B(t) ? t : l(t) ? t.ownerDocument : V(t) ? t.document : window.document, E = (t) => Object.entries(t), Jt = (t) => {
  if (!t)
    return;
  if (typeof t == "string")
    return d().createElement(t);
  const { tagName: e } = t, n = Jt(e);
  if (!n)
    return;
  const o = { ...t };
  return delete o.tagName, E(o).forEach(([s, c]) => {
    S(c) && H(n, s, c);
  }), n;
}, Kt = (t, e) => {
  if (!t || !e)
    return;
  if (typeof e == "string")
    return d().createElementNS(t, e);
  const { tagName: n } = e, o = Kt(t, n);
  if (!o)
    return;
  const s = { ...e };
  return delete s.tagName, E(s).forEach(([c, i]) => {
    S(i) && H(o, c, i);
  }), o;
}, P = (t, e) => t.dispatchEvent(e), Cn = (t, e, n) => n.indexOf(t) === e, p = (t, e) => {
  const n = getComputedStyle(t), o = e.replace("webkit", "Webkit").replace(/([A-Z])/g, "-$1").toLowerCase();
  return n.getPropertyValue(o);
}, Xt = (t) => {
  const e = p(t, z), n = p(t, Ut), o = n.includes("ms") ? 1 : 1e3, s = e && e !== "none" ? parseFloat(n) * o : 0;
  return Number.isNaN(s) ? 0 : s;
}, Zt = (t) => {
  const e = p(t, z), n = p(t, Ft), o = n.includes("ms") ? 1 : 1e3, s = e && e !== "none" ? parseFloat(n) * o : 0;
  return Number.isNaN(s) ? 0 : s;
}, Ln = (t, e) => {
  let n = 0;
  const o = new Event(N), s = Zt(t), c = Xt(t);
  if (s) {
    const i = (a) => {
      a.target === t && (e.apply(t, [a]), t.removeEventListener(N, i), n = 1);
    };
    t.addEventListener(N, i), setTimeout(() => {
      n || P(t, o);
    }, s + c + 17);
  } else
    e.apply(t, [o]);
}, $t = (t) => {
  const e = p(t, x), n = p(t, Rt), o = n.includes("ms") ? 1 : 1e3, s = e && e !== "none" ? parseFloat(n) * o : 0;
  return Number.isNaN(s) ? 0 : s;
}, _t = (t) => {
  const e = p(t, x), n = p(t, Wt), o = n.includes("ms") ? 1 : 1e3, s = e && e !== "none" ? parseFloat(n) * o : 0;
  return Number.isNaN(s) ? 0 : s;
}, On = (t, e) => {
  let n = 0;
  const o = new Event(T), s = _t(t), c = $t(t);
  if (s) {
    const i = (a) => {
      a.target === t && (e.apply(t, [a]), t.removeEventListener(T, i), n = 1);
    };
    t.addEventListener(T, i), setTimeout(() => {
      n || P(t, o);
    }, s + c + 17);
  } else
    e.apply(t, [o]);
}, In = (t) => Float32Array.from(Array.from(t)), zn = (t) => Float64Array.from(Array.from(t)), xn = (t, e) => t.focus(e), O = (t) => ["true", !0].includes(t) ? !0 : ["false", !1].includes(t) ? !1 : ["null", "", null].includes(t) ? null : t !== "" && !Number.isNaN(+t) ? +t : t, te = (t) => t.toLowerCase(), Hn = (t, e, n, o) => {
  const s = { ...n }, c = { ...t.dataset }, i = { ...e }, a = {}, f = "title";
  return E(c).forEach(([r, m]) => {
    const k = o && typeof r == "string" && r.includes(o) ? r.replace(o, "").replace(/[A-Z]/g, (le) => te(le)) : r;
    a[k] = O(m);
  }), E(s).forEach(([r, m]) => {
    s[r] = O(m);
  }), E(e).forEach(([r, m]) => {
    r in s ? i[r] = s[r] : r in a ? i[r] = a[r] : i[r] = r === f ? Yt(t, f) : m;
  }), i;
}, F = (t, ...e) => Object.assign(t, ...e), Vn = (t) => Object.keys(t), Bn = (t) => Object.values(t), ee = (t) => typeof t == "object" || !1, Pn = (t, e) => {
  const n = new CustomEvent(t, {
    cancelable: !0,
    bubbles: !0
  });
  return ee(e) && F(n, e), n;
}, Fn = { passive: !0 }, Un = (t) => t.offsetHeight, Wn = (t, e) => {
  E(e).forEach(([n, o]) => {
    if (o && S(n) && n.includes("--"))
      t.style.setProperty(n, o);
    else {
      const s = {};
      s[n] = o, F(t.style, s);
    }
  });
}, y = (t) => t && t.constructor.name === "Map" || !1, ne = (t) => typeof t == "number" || !1, g = /* @__PURE__ */ new Map(), Rn = {
  set: (t, e, n, o) => {
    !u(t) || (o && o.length ? (g.has(t) || g.set(t, /* @__PURE__ */ new Map()), g.get(t).set(o, setTimeout(e, n))) : g.set(t, setTimeout(e, n)));
  },
  get: (t, e) => {
    if (!u(t))
      return null;
    const n = g.get(t);
    return e && y(n) ? n.get(e) || null : ne(n) ? n : null;
  },
  clear: (t, e) => {
    if (!u(t))
      return;
    const n = g.get(t);
    e && e.length && y(n) ? y(n) && (clearTimeout(n.get(e)), n.delete(e), n.size === 0 && g.delete(t)) : (clearTimeout(n), g.delete(t));
  }
}, Qn = (t) => t.toUpperCase(), b = (t, e) => {
  const { width: n, height: o, top: s, right: c, bottom: i, left: a } = t.getBoundingClientRect();
  let f = 1, r = 1;
  if (e && u(t)) {
    const { offsetWidth: m, offsetHeight: k } = t;
    f = m > 0 ? Math.round(n) / m : 1, r = k > 0 ? Math.round(o) / k : 1;
  }
  return {
    width: n / f,
    height: o / r,
    top: s / r,
    right: c / f,
    bottom: i / r,
    left: a / f,
    x: a / f,
    y: s / r
  };
}, jn = (t) => d(t).body, M = (t) => d(t).documentElement, qn = (t) => d(t).head, Gn = (t) => {
  const e = V(t), n = e ? t.scrollX : t.scrollLeft, o = e ? t.scrollY : t.scrollTop;
  return { x: n, y: o };
}, oe = (t) => t && t.constructor.name === "ShadowRoot" || !1, Yn = (t) => t.nodeName === "HTML" ? t : u(t) && t.assignedSlot || l(t) && t.parentNode || oe(t) && t.host || M(t);
function se(t) {
  if (!u(t))
    return !1;
  const { width: e, height: n } = b(t), { offsetWidth: o, offsetHeight: s } = t;
  return Math.round(e) !== o || Math.round(n) !== s;
}
const Jn = (t, e, n) => {
  const o = u(e), s = b(t, o && se(e)), c = { x: 0, y: 0 };
  if (o) {
    const i = b(e, !0);
    c.x = i.x + e.clientLeft, c.y = i.y + e.clientTop;
  }
  return {
    x: s.left + n.x - c.x,
    y: s.top + n.y - c.y,
    width: s.width,
    height: s.height
  };
};
let R = 0, Q = 0;
const v = /* @__PURE__ */ new Map(), ce = (t, e) => {
  let n = e ? R : Q;
  if (e) {
    const o = ce(t), s = v.get(o) || /* @__PURE__ */ new Map();
    v.has(o) || v.set(o, s), y(s) && !s.has(e) ? (s.set(e, n), R += 1) : n = s.get(e);
  } else {
    const o = t.id || t;
    v.has(o) ? n = v.get(o) : (v.set(o, n), Q += 1);
  }
  return n;
}, Kn = (t) => {
  var e;
  return t ? B(t) ? t.defaultView : l(t) ? (e = t == null ? void 0 : t.ownerDocument) == null ? void 0 : e.defaultView : t : window;
}, re = (t) => Array.isArray(t) || !1, Xn = (t) => t && t.constructor.name === "HTMLCanvasElement" || !1, ie = (t) => t && !!t.shadowRoot || !1, Zn = (t) => t && [1, 2, 3, 4, 5, 6, 7, 8].some((e) => t.nodeType === e) || !1, $n = (t) => {
  if (!l(t))
    return !1;
  const { top: e, bottom: n } = b(t), { clientHeight: o } = M(t);
  return e <= o && n >= 0;
}, _n = (t) => {
  if (!l(t))
    return !1;
  const { clientWidth: e, clientHeight: n } = M(t), { top: o, left: s, bottom: c, right: i } = b(t, !0);
  return o >= 0 && s >= 0 && c <= n && i <= e;
}, to = (t) => re(t) && t.every(u) || !1, eo = (t) => t && t.constructor.name === "Function" || !1, no = (t) => t && t.constructor.name === "HTMLCollection" || !1, oo = (t) => t && t.tagName === "IMG" || !1, so = (t) => {
  if (!S(t))
    return !1;
  try {
    JSON.parse(t);
  } catch {
    return !1;
  }
  return !0;
}, co = (t) => t && t.constructor.name === "WeakMap" || !1, ro = (t) => t && t.nodeType === 1 && ["SVG", "Image", "Video", "Canvas"].some((e) => t.constructor.name.includes(e)) || !1, io = (t) => t && t.constructor.name === "NodeList" || !1, ao = (t) => M(t).dir === "rtl", uo = (t) => t && t.constructor.name.includes("SVG") || !1, lo = (t) => t && ["TABLE", "TD", "TH"].includes(t.tagName) || !1, ae = (t, e) => t ? t.closest(e) || ae(t.getRootNode().host, e) : null, po = (t, e) => l(t) ? t : (e && l(e) ? e : d()).querySelector(t), ue = (t, e) => (l(e) ? e : d()).getElementsByTagName(t), fo = (t) => [...ue("*", t)].filter(ie), mo = (t, e) => d(e).getElementById(t) || null, go = (t, e) => (l(e) ? e : d()).querySelectorAll(t), Eo = (t, e) => (e && l(e) ? e : d()).getElementsByClassName(t), vo = (t, e) => t.matches(e), bo = {
  ariaChecked: de,
  ariaDescription: pe,
  ariaDescribedBy: fe,
  ariaExpanded: me,
  ariaHidden: Ee,
  ariaHasPopup: ge,
  ariaLabel: ve,
  ariaLabelledBy: be,
  ariaModal: he,
  ariaPressed: ye,
  ariaSelected: we,
  ariaValueMin: Ae,
  ariaValueMax: Se,
  ariaValueNow: Me,
  ariaValueText: ke,
  nativeEvents: Ne,
  abortEvent: j,
  blurEvent: G,
  moveEvent: ht,
  changeEvent: Y,
  errorEvent: X,
  resetEvent: Tt,
  resizeEvent: Dt,
  scrollEvent: It,
  submitEvent: zt,
  loadEvent: rt,
  loadstartEvent: Te,
  unloadEvent: Pt,
  readystatechangeEvent: Nt,
  beforeunloadEvent: q,
  orientationchangeEvent: yt,
  contextmenuEvent: J,
  DOMContentLoadedEvent: I,
  DOMMouseScrollEvent: K,
  selectEvent: Ct,
  selectendEvent: Lt,
  selectstartEvent: Ot,
  mouseClickEvents: Ce,
  mouseclickEvent: it,
  mousedblclickEvent: at,
  mousedownEvent: ut,
  mouseupEvent: lt,
  mousehoverEvent: dt,
  mouseHoverEvents: Le,
  mouseenterEvent: pt,
  mouseleaveEvent: ft,
  mouseinEvent: mt,
  mouseoutEvent: gt,
  mouseoverEvent: Et,
  mousemoveEvent: vt,
  mousewheelEvent: bt,
  mouseSwipeEvents: De,
  touchEvents: Oe,
  touchstartEvent: xt,
  touchmoveEvent: Ht,
  touchcancelEvent: Vt,
  touchendEvent: Bt,
  pointercancelEvent: wt,
  pointerdownEvent: At,
  pointerleaveEvent: St,
  pointermoveEvent: Mt,
  pointerupEvent: kt,
  focusEvents: Ie,
  focusEvent: Z,
  focusinEvent: $,
  focusoutEvent: _,
  gesturechangeEvent: tt,
  gestureendEvent: et,
  gesturestartEvent: nt,
  bezierEasings: tn,
  animationDuration: Ft,
  animationDelay: Ut,
  animationName: z,
  animationEndEvent: N,
  transitionDuration: Wt,
  transitionDelay: Rt,
  transitionEndEvent: T,
  transitionProperty: x,
  isMobile: un,
  isApple: ln,
  isFirefox: dn,
  support3DTransform: pn,
  supportPassive: fn,
  supportTransform: mn,
  supportTouch: gn,
  supportAnimation: En,
  supportTransition: vn,
  addEventListener: $e,
  removeEventListener: _e,
  keyboardEventKeys: ze,
  keydownEvent: ot,
  keypressEvent: st,
  keyupEvent: ct,
  keyAlt: xe,
  keyArrowDown: He,
  keyArrowLeft: Be,
  keyArrowRight: Pe,
  keyArrowUp: Ve,
  keyBackspace: Fe,
  keyCapsLock: Ue,
  keyControl: We,
  keyDelete: Re,
  keyEnter: Qe,
  keyEscape: je,
  keyInsert: qe,
  keyMeta: Ge,
  keyPause: Ye,
  keyScrollLock: Je,
  keyShift: Ke,
  keySpace: Xe,
  keyTab: Ze,
  offsetHeight: en,
  offsetWidth: nn,
  scrollHeight: on,
  scrollWidth: sn,
  userAgentData: w,
  userAgent: A,
  tabindex: cn,
  addClass: Mn,
  removeClass: kn,
  hasClass: Nn,
  on: Qt,
  off: jt,
  one: qt,
  dispatchEvent: P,
  distinct: Cn,
  Data: D,
  getInstance: Dn,
  createElement: Jt,
  createElementNS: Kt,
  createCustomEvent: Pn,
  toUpperCase: Qn,
  toLowerCase: te,
  Timer: Rn,
  emulateAnimationEnd: Ln,
  emulateTransitionEnd: On,
  isElementInScrollRange: $n,
  isElementInViewport: _n,
  passiveHandler: Fn,
  getElementAnimationDuration: Zt,
  getElementAnimationDelay: Xt,
  getElementTransitionDuration: _t,
  getElementTransitionDelay: $t,
  getNodeScroll: Gn,
  getParentNode: Yn,
  getRectRelativeToOffsetParent: Jn,
  getWindow: Kn,
  isArray: re,
  isCanvas: Xn,
  isString: S,
  isCustomElement: ie,
  isElement: Zn,
  isJSON: so,
  isMap: y,
  isWeakMap: co,
  isNode: l,
  isNumber: ne,
  isHTMLElement: u,
  isHTMLImageElement: oo,
  isSVGElement: uo,
  isNodeList: io,
  isHTMLCollection: no,
  isScaledElement: se,
  isTableElement: lo,
  isShadowRoot: oe,
  isDocument: B,
  isElementsArray: to,
  isFunction: eo,
  isObject: ee,
  isWindow: V,
  isMedia: ro,
  isRTL: ao,
  closest: ae,
  querySelector: po,
  getCustomElements: fo,
  getElementById: mo,
  querySelectorAll: go,
  getElementsByClassName: Eo,
  getElementsByTagName: ue,
  matches: vo,
  normalizeValue: O,
  normalizeOptions: Hn,
  reflow: Un,
  noop: Gt,
  focus: xn,
  getUID: ce,
  ArrayFrom: Tn,
  Float32ArrayFrom: In,
  Float64ArrayFrom: zn,
  ObjectAssign: F,
  ObjectEntries: E,
  ObjectKeys: Vn,
  ObjectValues: Bn,
  getBoundingClientRect: b,
  getDocument: d,
  getDocumentBody: jn,
  getDocumentElement: M,
  getDocumentHead: qn,
  getElementStyle: p,
  setElementStyle: Wn,
  hasAttribute: hn,
  hasAttributeNS: yn,
  getAttribute: Yt,
  getAttributeNS: bn,
  setAttribute: H,
  setAttributeNS: wn,
  removeAttribute: An,
  removeAttributeNS: Sn
};
export {
  bo as default
};
//# sourceMappingURL=shorty.mjs.map
