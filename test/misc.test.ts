import { expect, it, describe, vi, afterEach } from 'vitest';
import { getExampleDOM } from './fixtures/getExampleDom';
import * as SHORTY from '../src/index';
import "./fixtures/style.css";

describe('Shorty Library Tests - MISC', () => {
  const wrapper = document.createElement('div');
  document.body.append(wrapper);
  afterEach(async () => {
    wrapper.innerHTML = '';
  });

  it('Test misc folder - emulateTransitionEnd - no transition', () => {
    const container = getExampleDOM();
    wrapper.append(container);

    const {
      dispatchEvent,
      emulateTransitionEnd,
      createCustomEvent,
      reflow,
      querySelector,
      setElementStyle,
      getElementStyle,
      removeClass,
      addClass,
      one,
    } = SHORTY;

    const el = querySelector('.alert', container) as HTMLElement;
    const btn = querySelector('.btn-close', el) as HTMLButtonElement;
    const alertHideEvent = createCustomEvent('hide-alert',);

    setElementStyle(el, {
      transition: 'none',
      transitionProperty: 'none',
      transitionDuration: '0s',
      'transition-delay': '0s',
      '--transition-prop': 'none',
    });

    expect(getElementStyle(el, 'transitionProperty')).to.equal('none');
    expect(getElementStyle(el, 'transition-duration')).to.equal('0s');
    expect(getElementStyle(el, 'transitionDelay')).to.equal('0s');
    expect(getElementStyle(el, '--transition-prop')).to.equal('none');

    one(el, 'hide-alert', function hideHandler(e: typeof alertHideEvent) {
      expect(e.target).to.equal(el);
      expect(e.relatedTarget).to.equal(btn);
    });

    one(btn, 'click', function handleBtn(e) {
      expect(e.target).to.equal(btn);
      removeClass(el, 'show');
      reflow(el);
      alertHideEvent.relatedTarget = btn;
      dispatchEvent(el, alertHideEvent);
      emulateTransitionEnd(el, function () {
        addClass(el, 'show');
      });
    });

    btn.click();
  });

  it('Test misc folder - emulateTransitionEnd - default', () => {
    vi.useFakeTimers();
    const container = getExampleDOM();
    wrapper.append(container);

    const {
      dispatchEvent,
      emulateTransitionEnd,
      createCustomEvent,
      reflow,
      querySelector,
      removeClass,
      addClass,
      one,
      focus,
    } = SHORTY;

    const el = querySelector('.alert', container) as HTMLElement;
    const btn = querySelector('.btn-close', el) as HTMLButtonElement;
    const alertHideEvent = createCustomEvent('hide-alert', { relatedTarget: null });

    one(el, 'hide-alert', function hideHandler(e: typeof alertHideEvent) {
      expect(e.target).to.equal(el);
      expect(e.relatedTarget).to.equal(btn);
    });

    one(btn, 'click', function handleBtn(e) {
      expect(e.target).to.equal(btn);
      removeClass(el, 'show');
      reflow(el);
      alertHideEvent.relatedTarget = btn;
      dispatchEvent(el, alertHideEvent);
      emulateTransitionEnd(el, function () {
        addClass(el, 'show');
        focus(btn, { preventScroll: false });
        console.log('transitionend triggered');
      });
      vi.advanceTimersByTime(350);
    });

    btn!.click();

  });

  it('Test misc folder - emulateAnimationEnd - default', async () => {
    vi.useFakeTimers();
    const container = getExampleDOM();
    wrapper.append(container);

    const { emulateAnimationEnd, getElementStyle, querySelector, addClass } = SHORTY;

    const el = querySelector('.alert') as HTMLElement;

    addClass(el, 'animate-test');
    emulateAnimationEnd(el, () => {
      console.log('animationend fired - default');
      expect(getElementStyle(el, 'animationName'), 'animationName').to.equal('animate-test');
      expect(getElementStyle(el, 'animationDuration'), 'animationDuration').to.equal('0.3s');
      expect(getElementStyle(el, 'animationDelay'), 'animationDelay').to.equal('0s');
    });
    vi.advanceTimersByTime(350);

  });

  it('Test misc folder - emulateAnimationEnd - no duration', () => {
    const container = getExampleDOM();
    wrapper.append(container);

    const { emulateAnimationEnd, setElementStyle, getElementStyle, querySelector, addClass } =
      SHORTY;

    const el = querySelector('.alert', container)!;
    setElementStyle(el, { animationDuration: '0.1s' });

    addClass(el, 'animate-test');


    emulateAnimationEnd(el, () => {
      // await vi.waitUntil(() => {
      console.log('animationend fired no duration');
      expect(getElementStyle(el, 'animationName'), 'animationName').to.equal('animate-test');
      expect(getElementStyle(el, 'animationDuration'), 'animationDuration').to.equal('0s');
      expect(getElementStyle(el, 'animationDelay'), 'animationDelay').to.equal('0s');

      // }, { timeout: 150 })
    });

  });

  it('Test misc folder - everything else', () => {
    const container = getExampleDOM();
    wrapper.append(container);

    const {
      ArrayFrom,
      Float32ArrayFrom,
      Float64ArrayFrom,
      distinct,
      noop,
      ObjectHasOwn,
      ObjectEntries,
      ObjectAssign,
      ObjectKeys,
      ObjectValues,
      // ObjectDefineProperty,
      ObjectFromEntries,
      createElement,
      createElementNS,
      Data,
      getInstance,
      normalizeOptions,
      Timer,
      toLowerCase,
      toUpperCase,
      querySelector,
      getElementsByClassName,
    } = SHORTY;


    const el = querySelector('.alert', container)!;
    const table = querySelector('.table', container)!;

    const defaults = { op1: true, op2: true, op3: 5, title: null };
    const jsOps = { op1: false, op2: false, op3: 8, title: 'something' };
    expect(ObjectHasOwn(jsOps, 'op3')).to.be.true;
    expect(ObjectHasOwn(jsOps, 'momo')).to.be.false;
    // @ts-expect-error
    expect(ObjectHasOwn(null, 'momo')).to.be.false;
    expect(normalizeOptions(el, defaults, {}, 'bs'), 'normalizeOptions(data)').to.deep.equal({
      op1: false,
      op2: true,
      op3: 10,
      title: null,
    });
    // @ts-expect-error
    expect(normalizeOptions(el, defaults, jsOps, 'bs'), 'normalizeOptions(js)').to.deep.equal({
      op1: false,
      op2: false,
      op3: 8,
      title: 'something',
    });
    expect(noop()).to.be.undefined;

    // @ts-expect-error
    Timer.set('el', noop, 150);
    Timer.set(el, () => console.log(el.tagName + ' has timer of 150'), 150, 'alert');
    // @ts-expect-error
    expect(Timer.get('el', 'alert')).to.be.null;
    expect(Timer.get(el, 'alert')).to.not.be.undefined;
    // @ts-expect-error
    Timer.clear('el', 'alert');
    Timer.clear(el, 'alert');
    expect(Timer.get(el, 'alert')).to.be.null;

    Timer.set(el, () => console.log(el.tagName + ' has timer of 250'), 250);
    expect(Timer.get(el)).to.not.be.null;
    Timer.clear(el);
    expect(Timer.get(el)).to.be.null;

    expect([0, 1, 1, 2, 3, 3].filter(distinct), 'filter(DISTINCT)').to.deep.equal([0, 1, 2, 3]);

    expect(toLowerCase('textSample'), 'toLowerCase(string)').to.equal('textsample');
    expect(toUpperCase('textSample'), 'toUpperCase(string)').to.equal('TEXTSAMPLE');

    // expect(
    //   Object.defineProperty({ c: 3}, 'a', { value: {b: 1}, writable: true }),
    //   'ObjectDefineProperty(object1, prop, value)',
    // ).to.deep.equal({ c: 3, a: {b: 1} });
    expect(
      ObjectAssign({ c: 3 }, { a: 1, b: 2 }),
      'ObjectAssign(object1, object2)',
    ).to.deep.equal({ a: 1, b: 2, c: 3 });
    expect(ObjectEntries({ a: 1, b: 2 }), 'ObjectEntries(object)').to.deep.equal([
      ['a', 1],
      ['b', 2],
    ]);
    expect(ObjectKeys({ a: 1, b: 2 }), 'ObjectKeys(object)').to.deep.equal(['a', 'b']);
    expect(ObjectValues({ a: 1, b: 2 }), 'ObjectValues(object)').to.deep.equal([1, 2]);

    expect(Float32ArrayFrom([0, 1, 2, 3]), 'Float32ArrayFrom(array)').to.be.instanceOf(
      Float32Array,
    );
    expect(Float64ArrayFrom([0, 1, 2, 3]), 'Float64ArrayFrom(array)').to.be.instanceOf(
      Float64Array,
    );
    expect(Float64ArrayFrom([0, 1, 2, 3]).length, 'Float64ArrayFrom(array)').to.eq(4);

    expect(
      ArrayFrom(new Float32Array([0, 1, 2, 3])),
      'ArrayFrom(Float32Array)',
    ).to.be.instanceOf(Array);
    expect(ArrayFrom(new Float64Array([0, 1, 2, 3])), 'Array(Float64Array)').to.be.instanceOf(
      Array,
    );
    expect(
      ArrayFrom(getElementsByClassName('table', container)),
      'ArrayFrom(HTMLCollection)',
    ).to.deep.equal([table]);

    expect(createElement(), 'createElement()').to.be.undefined;
    expect(createElement('input'), 'createElement(string)').to.be.instanceOf(HTMLInputElement);
    const parag = createElement({
      tagName: 'p',
      className: 'lead',
      innerText: 'This is a newly created paragraph.',
    });
    expect(parag).to.be.instanceOf(HTMLParagraphElement)
    expect(parag?.className).to.contain('lead')
    expect(parag?.innerHTML).to.contain('This is a newly created paragraph.');
    expect(
      createElement({
        tagName: 'p',
        textContent: 'This is a newly created paragraph.',
      }),
      'createElement(object)',
    ).to.be.instanceOf(HTMLParagraphElement)
    // .and.contain('This is a newly created paragraph.');

    expect(
      createElement({
        className: 'lead',
        innerText: 'This is a newly created paragraph.',
      }),
      'createElement(incompleteObject)',
    ).to.be.undefined;

    expect(createElementNS(''), 'createElementNS()').to.be.undefined;
    expect(
      createElementNS('http://www.w3.org/2000/svg', 'svg'),
      'createElementNS(ns, string)',
    ).to.be.instanceOf(SVGElement);
    expect(
      createElementNS<HTMLButtonElement>('http://www.w3.org/1999/xhtml', {
        tagName: 'button',
        className: 'btn',
        innerText: 'New Item',
        textContent: 'New Item',
      }),
      'createElementNS(ns, object)',
    )
      .to.be.instanceOf(HTMLButtonElement)
    // .and.contain('btn')
    // .and.contain('New Item');

    expect(
      createElementNS<SVGPathElement & { d: string }>('http://www.w3.org/2000/svg', {
        tagName: 'path',
        d: 'M98,158l157,156L411,158l27,27L255,368L71,185L98,158z',
      }),
      'createElementNS(ns, object)',
    ).to.be.instanceOf(SVGPathElement)
      .and.have.property('d').equal('M98,158l157,156L411,158l27,27L255,368L71,185L98,158z');

    expect(
      createElementNS<SVGPathElement & { d: string }>('http://www.w3.org/2000/svg', {
        tagName: '',
        className: 'icon',
        d: 'M98,158l157,156L411,158l27,27L255,368L71,185L98,158z',
      }),
      'createElementNS(ns, incompleteObject)',
    ).to.be.undefined;

    // @ts-expect-error
    Data.set(el);
    // @ts-expect-error
    expect(Data.get(el), 'not enough params - Data.get(node)').to.be.null;

    // @ts-expect-error
    Data.set('str', 'strKey', 'data');
    // @ts-expect-error
    expect(Data.get('str', 'strKey'), 'not HTMLElement - Data.get(string, string, string)').to
      .be.null;

    Data.set(el, 'Alert', { element: el });
    expect(Data.get(el, 'Alert'), 'Data.get(node, key)').to.deep.equal({ element: el });
    expect(getInstance(el, 'Alert'), 'getInstance(node, key)').to.deep.equal({ element: el });
    expect(Data.getAllFor('Alert')?.size, 'Data.getAllFor(string).size').to.equal(1);

    Data.remove(el, 'Alert');
    expect(Data.get(el, 'Alert'), 'removed - Data.get(node, string)').to.be.null;
    expect(getInstance(el, 'Alert'), 'removed - getInstance(node, string)').to.be.null;
    expect(Data.getAllFor('Alert'), 'removed - Data.getAllFor(string)').to.be.null;
    Data.remove(el, 'Alert');

    expect(ObjectFromEntries([['a', 1], ['b', 2]])).to.deep.equal({ a: 1, b: 2 })
  });
});
