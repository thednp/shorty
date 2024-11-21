import { expect, it, describe, beforeEach, vi, afterEach } from 'vitest';
import { getExampleDOM } from './fixtures/getExampleDom';
import * as SHORTY from '../src/index';
import "./fixtures/style.css";

describe('Shorty Library Tests - CLASS', () => {
  const wrapper = document.createElement('div');
  document.body.append(wrapper);
  afterEach(async () => {
    wrapper.innerHTML = '';
  });

  it('Test class folder', () => {
    const { addClass, hasClass, removeClass, querySelector } = SHORTY;
    const container = getExampleDOM();
    wrapper.append(container);

    const alert = querySelector('.alert', container);
    if (!alert) return;

    addClass(alert, 'to-be-removed');
    expect(hasClass(alert, 'to-be-removed')).to.be.true;
    removeClass(alert, 'show');
    expect(hasClass(alert, 'show')).to.be.false;
  });
});
