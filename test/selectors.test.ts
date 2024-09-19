import { expect, it, describe, vi, afterEach } from 'vitest';
import { getExampleDOM } from './fixtures/getExampleDom';
import * as SHORTY from '../src/index';
import CustomElem from './fixtures/custom-elem';
import "./fixtures/style.css";

describe('Shorty Library Tests', () => {
  const wrapper = document.createElement('div');
  document.body.append(wrapper);
  afterEach(async () => {
    wrapper.innerHTML = '';
  });

  it('Test selectors folder', () => {
    const container = getExampleDOM();
    wrapper.append(container);

    const {
      closest,
      getCustomElements,
      getElementById,
      getElementsByClassName,
      getElementsByTagName,
      matches,
      querySelector,
      querySelectorAll,
    } = SHORTY;

    const el = querySelector('.alert', container);
    if (!el) return;
    const win = window;

    const CE = new CustomElem();
    win.document.body.append(CE);

    expect(querySelectorAll('div'), 'querySelectorAll(div)').to.have.length(3);
    expect(querySelectorAll('div', win.document), 'querySelectorAll(div, parent)').to.have.length(3);

    // @ts-expect-error
    expect(querySelector(), 'querySelector()').to.be.null;
    expect(querySelector(el), 'querySelector(node)').to.equal(el);
    expect(querySelector('.alert'), 'querySelector(selector)').to.not.be.null;
    expect(querySelector('.alert', win.document), 'querySelector(selector, parent)').to.eq(el);
    // @ts-expect-error
    expect(closest(), 'closest()').to.be.null;
    // @ts-expect-error
    expect(closest(el)).to.be.null;
    expect(closest(el, 'wombat'), 'closest(el, invalidTagSelector)').to.be.null;
    expect(closest(el, 'body'), 'closest(body)').to.eq(win.document.body);

    expect(getCustomElements(), 'getCustomElements()').to.have.lengthOf(1);
    expect(getCustomElements(win.document), 'getCustomElements(expected)').to.deep.equal([CE]);

    // @ts-expect-error
    expect(getElementById(), 'getElementById()').to.be.null;
    expect(getElementById('alertDemo'), 'getElementById(id)').to.not.be.null;
    expect(
      getElementById('alertDemo', win.document),
      'getElementById(id, parent)',
    ).to.be.instanceOf(win.HTMLDivElement);

    // @ts-expect-error
    expect(getElementsByClassName(), 'getElementsByClassName()').to.be.instanceOf(
      HTMLCollection,
    );
    expect(
      getElementsByClassName('alert'),
      'getElementsByClassName(selector)',
    ).to.be.instanceOf(HTMLCollection);
    expect(
      getElementsByClassName('alert', win.document),
      'getElementsByClassName(selector, parent)',
    ).to.be.instanceOf(win.HTMLCollection);

    // @ts-expect-error
    expect(getElementsByTagName(), 'getElementsByTagName()').to.be.instanceOf(HTMLCollection);
    expect(getElementsByTagName('div'), 'getElementsByTagName(selector)').to.be.instanceOf(
      HTMLCollection,
    );
    expect(
      getElementsByTagName('div', win.document),
      'getElementsByTagName(selector, parent)',
    ).to.be.instanceOf(win.HTMLCollection);

    expect(
      [...getElementsByClassName('alert', win.document)].filter(x => matches(x, 'div')),
      'matches(node, selector)',
    ).to.deep.equal([el]);
  });
});
