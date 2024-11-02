import { expect, it, describe, afterEach, vi } from 'vitest';
import { getExampleDOM } from './fixtures/getExampleDom';
import * as SHORTY from '../src/index';
import CustomElem from './fixtures/custom-elem';
import "./fixtures/style.css";

describe('Shorty Library Tests - GET', () => {
  const wrapper = document.createElement('div');
  document.body.append(wrapper);
  afterEach(() => {
    wrapper.innerHTML = '';
  });

  it('Test get folder', async () => {
    const container = getExampleDOM();
    wrapper.append(container);
    // await vi.waitFor(() => container.querySelector('#elem-inside-dialog'), 50);

    const {
      getBoundingClientRect,
      getDocument,
      getDocumentBody,
      getDocumentElement,
      getDocumentHead,
      getElementAnimationDelay,
      getElementAnimationDuration,
      getElementTransitionDelay,
      getElementTransitionDuration,
      getElementStyle,
      getNodeScroll,
      getParentNode,
      getNodeName,
      getOffsetParent,
      getRectRelativeToOffsetParent,
      getUID,
      getWindow,
      ObjectValues,
      querySelector
    } = SHORTY;
    const comment = container.childNodes[0];
    const button = querySelector<HTMLButtonElement>('button', container)!;
    const element = querySelector<HTMLElement>('.alert', container)!;
    const dialog = querySelector<HTMLDialogElement>('dialog', container)!;
    const svg = querySelector<SVGSVGElement>('svg', container)!;
    const path = querySelector<SVGPathElement>('path', container)!;
    const elemInsideDialog = querySelector<HTMLElement>('#elem-inside-dialog', container)!;
    const elemInsideAbsolute = querySelector<HTMLElement>('#elem-inside-absolute', container)!;
    const elemInsideRelative = querySelector<HTMLElement>('#elem-inside-relative', container)!;
    const elemInsideStatic = querySelector<HTMLElement>('#elem-inside-static', container)!;
    const elemInsideFixed = querySelector<HTMLElement>('#elem-inside-fixed', container)!;
    const elemInsideTable = querySelector<HTMLElement>('#elem-inside-table', container)!;
    // console.log(comment);

    if (!element) return;

    // Object.assign(element.style, {width: '860px', height: '110px', top: '85', left: '60' });
    element.style.transform = 'scale(1.01)';
    const win = getWindow(element);
    const CE = new CustomElem();
    CE.className = 'btn btn-outline-primary';
    container.append(CE);

    // we round values so all browsers return same values
    let { x, y, top, left, right, bottom, width, height } = getBoundingClientRect(
      element,
      true,
    );
    expect(
      ObjectValues([x, y, top, left, right, bottom, width, height] as any).map(Math.round)
      // ).to.deep.equal([63, 87, 87, 63, 927, 204, 864, 117]);
    ).to.not.deep.equal([0, 0, 0, 0, 0, 0, 0, 0]);
    element.style.transform = '';

    expect(getWindow()).toBeDefined(); // root WINDOW
    expect(getWindow(element.ownerDocument)).toBeDefined();
    expect(getWindow(CE)).toBeDefined();
    expect(getWindow(CE.shadowRoot as Node)).toBeDefined();
    expect(getWindow(win.top as unknown as Node)).toBeDefined();

    expect(getDocument()).toBeDefined();
    expect(getDocument(element)).toBeDefined();
    expect(getDocument(win.document as unknown as Document)).toBeDefined();
    expect(getDocument(win as any)).toBeDefined();

    expect(getDocumentBody(element)).toBeDefined();
    expect(getDocumentElement(element)).toBeDefined();
    expect(getDocumentHead(element)).toBeDefined();

    expect(getElementAnimationDelay(element)).to.equal(0);
    expect(getElementAnimationDuration(element)).to.equal(0);

    CE.style.animation = 'animate-me 1s ease 0.5s';
    expect(getElementAnimationDelay(CE)).to.equal(500);
    expect(getElementAnimationDuration(CE)).to.equal(1000);

    CE.style.animation = 'animate-me 1200ms ease 400ms';
    expect(getElementAnimationDelay(CE)).to.equal(400);

    expect(getElementAnimationDuration(CE)).to.equal(1200);

    element.style.transition = 'opacity .145s linear .1s';
    expect(getElementTransitionDelay(element)).to.equal(100);
    expect(getElementTransitionDuration(element)).to.equal(145);

    element.style.transition = 'opacity 140ms linear 10ms';
    expect(
      getElementTransitionDelay(element),
    ).to.equal(10);

    expect(
      getElementTransitionDuration(element),
    ).to.equal(140);

    element.style.transition = '';

    expect(getElementStyle(element, 'color'), 'getElementStyle(color)').to.equal(
      'rgb(102, 77, 3)',
    );

    expect(getNodeScroll(win)).to.deep.equal({ x: 0, y: 0 });
    expect(getNodeScroll(element), 'getNodeScroll(element)').to.deep.equal({ x: 0, y: 0 });
    expect(
      getNodeScroll(element.offsetParent as HTMLElement),
      'getNodeScroll(element.offsetParent)',
    ).to.deep.equal({ x: 0, y: 0 });
    expect(getNodeScroll(getDocumentBody(element)), 'getNodeScroll(body)').to.deep.equal({
      x: 0,
      y: 0,
    });

    expect(getParentNode(getDocumentElement())).to.be.instanceOf(
      HTMLHtmlElement,
    ); // root HTML
    expect(getParentNode(win as any)).to.be.instanceOf(HTMLHtmlElement);
    expect(getParentNode(getDocumentBody(element))).to.be.instanceOf(
      HTMLHtmlElement,
    );
    expect(getParentNode(element), 'getParentNode(node)').toBeDefined();
    expect(getParentNode(CE), 'getParentNode(CustomElement)').to.be.instanceOf(
      HTMLDivElement,
    );
    expect(
      getParentNode(CE.shadowRoot!),
      'getParentNode(CustomElement.shadowRoot)',
    ).to.be.instanceOf(CustomElem);

    expect(
      getNodeName(CE),
      'getNodeName(CustomElement)',
    ).to.equal('custom-elem');

    expect(
      getOffsetParent(CE),
      'getOffsetParent(CustomElement)',
    ).to.be.instanceOf(Window);

    expect(
      // @ts-expect-error
      getOffsetParent(CE.shadowRoot),
      'getOffsetParent(CustomElement)',
    ).to.be.instanceOf(Window);

    expect(
      getOffsetParent(element),
      'getOffsetParent(CustomElement.shadowRoow)',
    ).to.be.instanceOf(Window);

    expect(
      getOffsetParent(elemInsideAbsolute),
      'getOffsetParent(HTMLElement)',
    ).to.not.be.instanceOf(Window);

    expect(
      getOffsetParent(elemInsideAbsolute.parentElement!),
      'getOffsetParent(HTMLElement)',
    ).to.be.instanceOf(Window);

    expect(
      getOffsetParent(elemInsideRelative.parentElement!),
      'getOffsetParent(HTMLElement)',
    ).to.be.instanceOf(Window);

    expect(
      getOffsetParent(elemInsideFixed.parentElement!),
      'getOffsetParent(HTMLElement)',
    ).to.be.instanceOf(Window);

    expect(
      getOffsetParent(elemInsideStatic.parentElement!),
      'getOffsetParent(HTMLElement)',
    ).to.be.instanceOf(Window);

    expect(
      getOffsetParent(elemInsideRelative),
      'getOffsetParent(HTMLElement)',
    ).to.be.instanceOf(HTMLElement);

    expect(
      getOffsetParent(elemInsideStatic),
      'getOffsetParent(HTMLElement)',
    ).to.be.instanceOf(Window);

    expect(
      getOffsetParent(elemInsideFixed),
      'getOffsetParent(HTMLElement)',
    ).to.be.instanceOf(HTMLElement);

    expect(
      getOffsetParent(elemInsideTable),
      'getOffsetParent(HTMLElement)',
    ).to.be.instanceOf(Window);

    expect(
      // @ts-expect-error
      getOffsetParent(null),
      'getOffsetParent(HTMLElement)',
    ).to.be.instanceOf(Window);

    expect(
      // @ts-expect-error
      getOffsetParent(win),
      'getOffsetParent(HTMLElement)',
    ).to.be.instanceOf(Window);

    expect(
      // @ts-expect-error
      getOffsetParent(win.document),
      'getOffsetParent(HTMLElement)',
    ).to.be.instanceOf(Window);

    expect(
      getOffsetParent(win.document.head),
      'getOffsetParent(HTMLElement)',
    ).to.be.instanceOf(Window);

    expect(
      getOffsetParent(win.document.head.children[0]),
      'getOffsetParent(HTMLElement)',
    ).to.be.instanceOf(Window);
  
    expect(
      getOffsetParent(path),
      'getOffsetParent(HTMLElement)',
    ).to.be.instanceOf(HTMLButtonElement);
  
    expect(
      getOffsetParent(svg),
      'getOffsetParent(HTMLElement)',
    ).to.be.instanceOf(HTMLButtonElement);
  
    expect(
      // @ts-expect-error
      getOffsetParent(comment),
      'getOffsetParent(CommentNode)',
    ).to.be.instanceOf(Window);

    expect(
      // @ts-expect-error
      getOffsetParent(button.childNodes[1]),
      'getOffsetParent(TextNode)',
    ).to.be.instanceOf(HTMLButtonElement);

    expect(
      getOffsetParent(getDocumentElement(button)),
      'getOffsetParent(HTML)',
    ).to.be.instanceOf(Window);

    expect(
      getOffsetParent(getDocumentHead(button).children[0]),
      'getOffsetParent(HEAD)',
    ).to.be.instanceOf(Window);

    expect(
      getOffsetParent(getDocumentHead(button)),
      'getOffsetParent(HEAD)',
    ).to.be.instanceOf(Window);

    dialog.showModal();
    await vi.waitFor(() => {
      expect(
        getOffsetParent(dialog),
        'getOffsetParent(HTMLElement)',
      ).to.be.instanceOf(Window);

      expect(
        getOffsetParent(elemInsideDialog),
        'getOffsetParent(CustomElement.shadowRoow)',
      ).to.be.instanceOf(HTMLDialogElement);
      dialog.close();
    }, 50);
    
    ({ x, y, width, height } = getRectRelativeToOffsetParent(
      element,
      getDocumentElement(win),
      getNodeScroll(getDocumentElement(win)),
    ));

    expect(
      [x, y, width, height].map(Math.round),
      'getRectRelativeToOffsetParent',
    ).to.not.deep.equal([0, 0, 0, 0]);

    expect(getUID(element), 'getUID()').to.eq(0);
    expect(getUID(element, 'Alert'), 'getUID(key) - set & returns').to.eq(0);
    expect(getUID(element, 'Alert'), 'getUID(key) - returns').to.eq(0);
    expect(getUID(win.document.body, 'Alert'), 'getUID(key) - set & returns').to.eq(1);
    expect(getUID(win.document.body, 'Alert'), 'getUID(key) - returns').to.eq(1);
  });
});