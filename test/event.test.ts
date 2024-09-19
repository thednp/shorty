import { expect, it, describe, afterEach, beforeEach, vi } from 'vitest';
import { getExampleDOM } from './fixtures/getExampleDom';
import * as SHORTY from '../src/index';
import "./fixtures/style.css";

describe('Shorty Library Tests - EVENT', () => {
  const wrapper = document.createElement('div');
  document.body.append(wrapper);
  afterEach(async () => {
    wrapper.innerHTML = '';
  });

  it('Test event folder', () => {
    const {
      // on, off are called by one
      one,
      querySelector,
    } = SHORTY;
    const container = getExampleDOM();
    wrapper.append(container);

    const el = querySelector('.alert', container);
    const btn = querySelector('button', container);

    if (!el || !btn) return;

    one(el, 'click', function handle(e) {
      el.innerText += 'click fired for ' + (e.currentTarget as HTMLElement).tagName;
      expect(el.innerText).toContain('click fired for DIV')

    });

    one(btn, 'click', function handle(e) {
      el.innerText += 'click fired for ' + (e.target as HTMLElement).tagName;
      expect(el.innerText).toContain('click fired for BUTTON')
    });
    btn.click();
  });
});
