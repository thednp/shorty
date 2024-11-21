import { expect, it, describe, afterEach } from 'vitest';
import { getExampleDOM } from './fixtures/getExampleDom';
import * as SHORTY from '../src/index';
import "./fixtures/style.css";

describe('Shorty Library Tests - ATT', () => {
  const wrapper = document.createElement('div');
  afterEach(async () => {
    wrapper.innerHTML = '';
  });

  it('Test attr folder', () => {
    const container = getExampleDOM();
    wrapper.append(container);

    const {
      getAttribute,
      setAttribute,
      hasAttribute,
      removeAttribute,
      getAttributeNS,
      setAttributeNS,
      hasAttributeNS,
      removeAttributeNS,
      querySelector,
    } = SHORTY;

    const el = querySelector('.alert', container)!;
    expect(getAttribute(el, 'class')).to.have.length.above(0);
    setAttribute(el, 'data-att', 'momo');
    expect(hasAttribute(el, 'data-att')).to.be.true;
    removeAttribute(el, 'data-att');
    expect(hasAttribute(el, 'data-att')).to.be.false;

    const svg = querySelector('svg', container)!;
    const ns = 'http://www.w3.org/2000/svg';
    expect(hasAttributeNS(ns, svg, 'transform')).to.be.false;
    setAttributeNS(ns, svg, 'transform', 'scale(0.99)');
    expect(getAttributeNS(ns, svg, 'transform')).to.eq('scale(0.99)');
    removeAttributeNS(ns, svg, 'transform');
    expect(getAttributeNS(ns, svg, 'transform')).to.be.null;
  });
});
