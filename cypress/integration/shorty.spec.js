/// <reference types="cypress" />
/** @typedef {import("../../types/index")} */

import SHORTY from '../../src/index';
import CustomElem from '../fixtures/custom-elem';

describe('Shorty Library Test', () => {

  beforeEach(() => {
    cy.intercept('cypress/test.html').as('pageload')
      .visit('cypress/test.html');
  });

  it('Test attr folder', () => {
    const {
      getAttribute, setAttribute, hasAttribute, removeAttribute, 
      getAttributeNS, setAttributeNS, hasAttributeNS, removeAttributeNS, 
      querySelector,
    } = SHORTY;
    cy.wait('@pageload')
      .get('.alert').then(($element) => {
        const el = $element[0];
        expect(getAttribute(el, 'class'), 'getAttribute').to.have.length.above(0);
        setAttribute(el, 'data-att', 'momo');
        expect(hasAttribute(el, 'data-att'), 'hasAttribute').to.be.true;
        removeAttribute(el, 'data-att');
        expect(hasAttribute(el, 'data-att'), 'hasAttribute').to.be.false;

        const svg = querySelector('svg', el);
        const ns = 'http://www.w3.org/2000/svg';
        expect(hasAttributeNS(ns, svg, 'transform'), 'hasAttributeNS').to.be.false;
        setAttributeNS(ns, svg, 'transform', 'scale(0.99)');
        expect(getAttributeNS(ns, svg, 'transform'), 'getAttributeNS').to.eq('scale(0.99)');
        removeAttributeNS(ns, svg, 'transform');
        expect(getAttributeNS(ns, svg, 'transform'), 'getAttributeNS').to.be.null;
      });
  });

  it('Test boolean folder', () => {
    const {
      // these are impossible to test 100% of the branches
      isApple, isMobile, isFirefox, support3DTransform, supportAnimation,
      supportPassive, supportTouch, supportTransform, supportTransition,
      // querySelectorAll, getWindow
    } = SHORTY;
    cy.wait('@pageload')
      .window().then(() => {
        expect(isApple, 'isApple').to.be.false;
        expect(isMobile, 'isMobile').to.be.false;
        if (Cypress.isBrowser('firefox')) {
          expect(isFirefox, 'isFirefox').to.be.true;
        } else {
          expect(isFirefox, 'isFirefox').to.be.false;
        }
        expect(support3DTransform, 'support3DTransform').to.be.true;
        expect(supportAnimation, 'supportAnimation').to.be.true;
        expect(supportPassive, 'supportPassive').to.be.true;
        expect(supportTouch, 'supportTouch').to.be.false;
        expect(supportTransform, 'supportTransform').to.be.true;
        expect(supportTransition, 'supportTransition').to.be.true;
      })
  });

  it('Test class folder', () => {
    const {
      addClass, hasClass, removeClass,
      querySelectorAll,
    } = SHORTY;
    cy.wait('@pageload')
      .window().then((win) => {
        const [el] = querySelectorAll('.alert', win.document);

        addClass(el, 'to-be-removed');
        expect(hasClass(el, 'to-be-removed')).to.be.true;
        removeClass(el, 'show');
        expect(hasClass(el, 'show')).to.be.false;
      })
      .wait(200)
      .get('.alert').should('be.hidden');
  });

  it('Test event folder', () => {
    const {
      // on, off are called by one
      one, getElementsByClassName,
    } = SHORTY;

    cy.wait('@pageload')
      .window().then((win) => {
        const [el] = getElementsByClassName('alert', win.document);
        const [btn] = getElementsByClassName('btn-close', el);

        one(btn, 'click', function handle(e) {
            const message = win.document.createElement('p');
            message.innerText = 'click fired for ' + e.target.tagName;
            el.append(message)
        })
      })
      .get('.btn-close').click({force: true}).then((btn) => {
        expect(btn[0], 'event target').to.be.focused;
      })
      .get('.alert').should('contain', 'click fired for BUTTON')
  });

  it('Test get folder', () => {
    const {
      getBoundingClientRect, getDocument, getDocumentBody, getDocumentElement, getDocumentHead,
      getElementAnimationDelay, getElementAnimationDelayLegacy, getElementAnimationDuration, getElementAnimationDurationLegacy,
      getElementTransitionDelay, getElementTransitionDelayLegacy, getElementTransitionDuration, getElementTransitionDurationLegacy,
      getElementStyle, getNodeScroll, getParentNode, getRectRelativeToOffsetParent, getUID, getWindow, ObjectValues
    } = SHORTY;

    cy.wait('@pageload')
      .get('.alert').then(($element) => {
        const element = $element[0];
        const win = getWindow(element);
        const CE = new CustomElem();
        CE.className = 'btn btn-outline-primary';
        CE.style.transform = 'scale(1.01)';
        CE.style.animation = 'animate-me 1s ease 0.5s infinite';
        win.document.body.append(CE);

        // we round values so all browsers return same values
        expect(ObjectValues(getBoundingClientRect(element)).map(Math.round), 'getBoundingClientRect').to.deep.equal([864, 117, 88, 932, 205, 68, 68, 88]);
        expect(ObjectValues(getBoundingClientRect(CE, true)).map(Math.round), 'getBoundingClientRect').to.deep.equal([198, 70, 484, 264, 553, 66, 66, 484]);

        expect(getWindow(), 'getWindow').to.be.instanceOf(Window); // root WINDOW
        expect(getWindow(element.ownerDocument), 'getWindow(document)').to.be.instanceOf(win.Window);
        expect(getWindow(CE), 'getWindow(CustomElement)').to.be.instanceOf(win.Window);
        expect(getWindow(CE.shadowRoot), 'getWindow(CustomElement.shadowRoot)').to.be.instanceOf(win.Window);
        expect(getWindow(win.top), 'getWindow(window)').to.be.instanceOf(win.top.Window);

        expect(getDocument(element), 'getDocument(node)').to.be.instanceOf(win.Document);
        expect(getDocument(win.document), 'getDocument(document)').to.be.instanceOf(win.Document);
        expect(getDocument(win), 'getDocument(window)').to.be.instanceOf(win.Document);

        expect(getDocumentBody(element), 'getDocumentBody').to.be.instanceOf(win.HTMLBodyElement);
        expect(getDocumentElement(element), 'getDocumentElement').to.be.instanceOf(win.HTMLHtmlElement);
        expect(getDocumentHead(element), 'getDocumentHead').to.be.instanceOf(win.HTMLHeadElement);

        expect(getElementAnimationDelay(element), 'getElementAnimationDelay').to.equal(0);
        expect(getElementAnimationDelayLegacy(element), 'getElementAnimationDelayLegacy').to.equal(0);
        expect(getElementAnimationDuration(element), 'getElementAnimationDuration').to.equal(0);
        expect(getElementAnimationDurationLegacy(element), 'getElementAnimationDurationLegacy').to.equal(0);

        expect(getElementAnimationDelay(CE), 'getElementAnimationDelay').to.equal(500);
        expect(getElementAnimationDelayLegacy(CE), 'getElementAnimationDelayLegacy').to.equal(500);
        expect(getElementAnimationDuration(CE), 'getElementAnimationDuration').to.equal(1000);
        expect(getElementAnimationDurationLegacy(CE), 'getElementAnimationDurationLegacy').to.equal(1000);

        expect(getElementTransitionDelay(element), 'getElementTransitionDelay').to.equal(0);
        expect(getElementTransitionDelayLegacy(element), 'getElementTransitionDelayLegacy').to.equal(0);
        expect(getElementTransitionDuration(element), 'getElementTransitionDuration').to.equal(150);
        expect(getElementTransitionDurationLegacy(element), 'getElementTransitionDurationLegacy').to.equal(150);

        expect(getElementStyle(element, 'color'), 'getElementStyle(color)').to.equal('rgb(102, 77, 3)');
        expect(getNodeScroll(element), 'getNodeScroll(element)').to.deep.equal({ x: 0, y: 0 });
        expect(getNodeScroll(element.offsetParent), 'getNodeScroll(element.offsetParent)').to.deep.equal({ x: 0, y: 0 });
        expect(getNodeScroll(getDocumentBody(element)), 'getNodeScroll(body)').to.deep.equal({ x: 0, y: 0 });

        expect(getParentNode(getDocumentElement()), 'getParentNode()').to.be.instanceOf(HTMLHtmlElement); // root HTML
        expect(getParentNode(getDocumentBody(element)), 'getParentNode(body)').to.be.instanceOf(win.HTMLHtmlElement);
        expect(getParentNode(element), 'getParentNode(node)').to.have.class('container');
        expect(getParentNode(CE), 'getParentNode(CustomElement)').to.be.instanceOf(win.HTMLBodyElement);
        expect(getParentNode(CE.shadowRoot), 'getParentNode(CustomElement.shadowRoot)').to.be.instanceOf(CustomElem);

        // if (Cypress.isBrowser({name: '!electron'}))
        expect(getRectRelativeToOffsetParent(element, element.offsetParent, getNodeScroll(element.offsetParent)), 'getRectRelativeToOffsetParent')
          .to.deep.equal({x: 48, y: 88, width: 864, height: 117});

        expect(getUID(element), 'getUID()').to.eq(0);
        expect(getUID(element, 'Alert'), 'getUID(key) - set & returns').to.eq(0);
        expect(getUID(element, 'Alert'), 'getUID(key) - returns').to.eq(0);
        expect(getUID(win, 'Alert'), 'getUID(key) - set & returns').to.eq(1);
        expect(getUID(win, 'Alert'), 'getUID(key) - returns').to.eq(1);

      })
  });

  it('Test is folder', () => {
    const {
      isArray, isCustomElement, isDocument, isElement, isElementInScrollRange, isElementInViewport,
      isElementsArray, isFunction, isHTMLCollection, isHTMLElement, isHTMLImageElement, isMedia, 
      isNode, isNodeList, isRTL, isScaledElement, isShadowRoot, isString, isNumber, isSVGElement, isTableElement, isWindow,
      getWindow, querySelector,
    } = SHORTY;

    cy.wait('@pageload')
      .get('.alert').then(($element) => {
        const element = $element[0];
        const win = getWindow(element);
        const CE = new CustomElem();
        CE.className = 'btn btn-outline-primary';
        CE.style.transform = 'scale(1.01)';
        win.document.body.append(CE);
        const img = querySelector('img', element);
        const svg = querySelector('svg', element);
        const path = querySelector('path', element);
        const table = querySelector('table', win.document);

        expect(isArray(new Float32Array(0, 'a')), 'isArray(Float32Array)').to.be.false;
        expect(isArray(), 'isArray()').to.be.false;
        expect(isArray(element), 'isArray(node)').to.be.false;
        expect(isArray([0, 'a']), 'isArray([0, 1]])').to.be.true;
        expect(isArray(new Array(0, 'a')), 'isArray(new Array(0, 1)])').to.be.true;

        expect(isCustomElement(), 'isCustomElement()').to.be.false;
        expect(isCustomElement(element), 'isCustomElement(node)').to.be.false;
        expect(isCustomElement(CE), 'isCustomElement(CustomElement)').to.be.true;

        expect(isShadowRoot(), 'isShadowRoot()').to.be.false;
        expect(isShadowRoot(element), 'isShadowRoot(element)').to.be.false;
        expect(isShadowRoot(document), 'isShadowRoot(document)').to.be.false;
        expect(isShadowRoot(CE.shadowRoot), 'isShadowRoot(CustomElement.shadowRoot)').to.be.true;

        expect(isDocument(), 'isDocument()').to.be.false;
        expect(isDocument(win), 'isDocument(document)').to.be.false;
        expect(isDocument(document), 'isDocument(document)').to.be.true;
        expect(isDocument(win.document), 'isDocument(document)').to.be.true;

        expect(isElement(), 'isElement()').to.be.false;
        expect(isElement(win.document), 'isElement(document)').to.be.false;
        expect(isElement(win), 'isElement(window)').to.be.false;
        expect(isElement(element), 'isElement(node)').to.be.true;
        expect(isElement(win.document.body), 'isElement(body)').to.be.true;

        expect(isElementsArray(), 'isElementsArray()').to.be.false;
        expect(isElementsArray(win), 'isElementsArray(window)').to.be.false;
        expect(isElementsArray([0, 1]), 'isElementsArray(window)').to.be.false;
        expect(isElementsArray([...element.children]), 'isElementsArray(expected)').to.be.true;

        expect(isFunction(), 'isFunction()').to.be.false;
        expect(isFunction(element), 'isFunction(ndoe)').to.be.false;
        expect(isFunction(element.addEventListener), 'isFunction(function)').to.be.true;

        expect(isHTMLCollection(), 'isHTMLCollection()').to.be.false;
        expect(isHTMLCollection([...element.children]), 'isHTMLCollection(array)').to.be.false;
        expect(isHTMLCollection(element.children), 'isHTMLCollection(expected)').to.be.true;

        expect(isHTMLElement(), 'isHTMLElement()').to.be.false;
        expect(isHTMLElement(element), 'isHTMLElement(element)').to.be.true;
        expect(isHTMLElement(win), 'isHTMLElement(window)').to.be.false;
        expect(isHTMLElement(win.document.body), 'isHTMLElement(body)').to.be.true;
        expect(isHTMLElement(win.document.head), 'isHTMLElement(head)').to.be.true;
        expect(isHTMLElement(CE), 'isHTMLElement(CustomElement)').to.be.true;
        expect(isHTMLElement(CE.shadowRoot), 'isHTMLElement(CustomElement)').to.be.false;
        expect(isHTMLElement([...element.children]), 'isHTMLElement(array)').to.be.false;
        expect(isHTMLElement(win.document), 'isHTMLElement(document)').to.be.false;

        expect(isHTMLImageElement(), 'isHTMLImageElement()').to.be.false;
        expect(isHTMLImageElement(win.document), 'isHTMLImageElement(document)').to.be.false;
        expect(isHTMLImageElement(win), 'isHTMLImageElement(window)').to.be.false;
        expect(isHTMLImageElement(img), 'isHTMLImageElement(image)').to.be.true;
        expect(isHTMLImageElement(svg), 'isHTMLImageElement(svg)').to.be.false;
        expect(isHTMLImageElement(path), 'isHTMLImageElement(path)').to.be.false;

        expect(isMedia(), 'isMedia()').to.be.false;
        expect(isMedia(win.document), 'isMedia(document)').to.be.false;
        expect(isMedia(win), 'isMedia(window)').to.be.false;
        expect(isMedia(CE), 'isMedia(CustomElement)').to.be.false;
        expect(isMedia(img), 'isMedia(image)').to.be.true;
        expect(isMedia(svg), 'isMedia(svg)').to.be.true;
        expect(isMedia(path), 'isMedia(path)').to.be.true;

        expect(isElementInScrollRange(), 'isElementInScrollRange()').to.be.false;
        expect(isElementInScrollRange(win), 'isElementInScrollRange(window)').to.be.false;
        expect(isElementInScrollRange(CE), 'isElementInScrollRange(CustomElement)').to.be.true;
        expect(isElementInScrollRange(element), 'isElementInScrollRange(node)').to.be.true;

        expect(isElementInViewport(), 'isElementInScrollRange()').to.be.false;
        expect(isElementInViewport(win), 'isElementInScrollRange(window)').to.be.false;
        expect(isElementInViewport(CE), 'isElementInScrollRange(CustomElement)').to.be.true;
        expect(isElementInViewport(element), 'isElementInScrollRange(node)').to.be.true;

        expect(isNode(), 'isNode()').to.be.false;
        expect(isNode(img), 'isNode(image)').to.be.true;
        expect(isNode(svg), 'isNode(svg)').to.be.true;
        expect(isNode(path), 'isNode(path)').to.be.true;
        expect(isNode(win.document), 'isNode(document)').to.be.true;
        expect(isNode(win), 'isNode(window)').to.be.false;
        expect(isNode(CE), 'isNode(CustomElement)').to.be.true;

        expect(isNodeList(), 'isNodeList()').to.be.false;
        expect(isNodeList(element), 'isNodeList(node)').to.be.false;
        expect(isNodeList(element.children), 'isNodeList(HTMLCollection)').to.be.false;
        expect(isNodeList(element.querySelectorAll('*')), 'isNodeList(expected)').to.be.true;

        expect(isRTL(), 'isRTL()').to.be.false;
        expect(isRTL(element), 'isRTL(node)').to.be.false;
        expect(isRTL(win.document), 'isRTL(document)').to.be.false;

        expect(isScaledElement(), 'isScaledElement()').to.be.false;
        expect(isScaledElement(element), 'isScaledElement(node)').to.be.false;
        expect(isScaledElement(win), 'isScaledElement(window)').to.be.false;
        expect(isScaledElement(win.document), 'isScaledElement(document)').to.be.false;
        expect(isScaledElement(CE), 'isScaledElement(expected)').to.be.true;

        expect(isSVGElement(), 'isSVGElement()').to.be.false;
        expect(isSVGElement(element), 'isSVGElement(node)').to.be.false;
        expect(isSVGElement(win), 'isSVGElement(window)').to.be.false;
        expect(isSVGElement(win.document), 'isSVGElement(document)').to.be.false;
        expect(isSVGElement(CE), 'isSVGElement(CustomElement)').to.be.false;
        expect(isSVGElement(svg), 'isSVGElement(svg)').to.be.true;
        expect(isSVGElement(path), 'isSVGElement(path)').to.be.true;

        expect(isString(), 'isString()').to.be.false;
        expect(isString(element), 'isString(node)').to.be.false;
        expect(isString(element.nodeName), 'isString(nodeName)').to.be.true;
        expect(isString(element.nodeType), 'isString(number)').to.be.false;

        expect(isNumber(), 'isNumber()').to.be.false;
        expect(isNumber(element), 'isNumber(node)').to.be.false;
        expect(isNumber(element.nodeName), 'isNumber(nodeName)').to.be.false;
        expect(isNumber(element.nodeType), 'isNumber(nodeType)').to.be.true;
        expect(isNumber(0.55), 'isNumber(number)').to.be.true;
        expect(isNumber(-Infinity), 'isNumber(Infinity)').to.be.true;

        expect(isTableElement(), 'isTableElement()').to.be.false;
        expect(isTableElement(element), 'isTableElement(node)').to.be.false;
        expect(isTableElement(win), 'isTableElement(window)').to.be.false;
        expect(isTableElement(win.document), 'isTableElement(document)').to.be.false;
        expect(isTableElement(CE), 'isTableElement(CustomElement)').to.be.false;
        expect(isTableElement(table), 'isTableElement(table)').to.be.true;
        expect(isTableElement(querySelector('td', table)), 'isTableElement(TD)').to.be.true;
        expect(isTableElement(querySelector('th', table)), 'isTableElement(TH)').to.be.true;

        expect(isWindow(), 'isWindow()').to.be.false;
        expect(isWindow(win.document), 'isWindow(document)').to.be.false;
        expect(isWindow(document), 'isWindow(document)').to.be.false;
        expect(isWindow(win), 'isDocument(window)').to.be.true;
        expect(isWindow(win.top), 'isDocument(window)').to.be.true;
        expect(isWindow(window), 'isDocument(window)').to.be.true;
        expect(isWindow(window.top), 'isDocument(window)').to.be.true;
    });
  });
  
  it('Test misc folder - emulateTransitionEnd - no transition', () => {
    const {
      dispatchEvent, emulateTransitionEnd, emulateTransitionEndLegacy,
      OriginalEvent, reflow, querySelector, setElementStyle, getElementStyle,
      removeClass, addClass, one,
    } = SHORTY;

    cy.wait('@pageload')
      .window().then((win) => {
        const el = querySelector('.alert', win.document);
        const btn = querySelector('.btn-close', el);
        const alertHideEvent = new OriginalEvent('hide-alert', { relatedTarget: null });

        setElementStyle(el, { transition: 'none', transitionProperty: 'none', transitionDuration: '0s', 'transition-delay': '0s', '--transition-prop': 'none' });

        expect(getElementStyle(el, 'transitionProperty')).to.equal('none');
        expect(getElementStyle(el, 'transition-duration')).to.equal('0s');
        expect(getElementStyle(el, 'transitionDelay')).to.equal('0s');
        expect(getElementStyle(el, '--transition-prop')).to.equal('none');

        cy.log('emulateTransitionEnd').then(() => {
          one(el, 'hide-alert', function hideHandler(e) {
            cy.log('hide-alert triggered');
            expect(e.target).to.equal(el);
            expect(e.relatedTarget).to.equal(btn);
          });
  
          one(btn, 'click', function handleBtn(e) {
            cy.log('clicked btn');
            expect(e.target).to.equal(btn);
            removeClass(el, 'show');
            reflow(el);
            alertHideEvent.relatedTarget = btn;
            dispatchEvent(el, alertHideEvent);
            emulateTransitionEnd(el, function() {
              addClass(el, 'show');
              cy.log('transitionend triggered');
            });

          })
  
          btn.click();
          cy.wait(100);
        });


        cy.log('emulateTransitionEndLegacy').then(() => {
          one(el, 'hide-alert', function hideHandler(e) {
            cy.log('hide-alert triggered');
  
            expect(e.target).to.equal(el);
            expect(e.relatedTarget).to.equal(btn);
          });
  
          one(btn, 'click', function handleBtn(e) {
            cy.log('clicked btn');
            expect(e.target).to.equal(btn);
            removeClass(el, 'show');
            reflow(el);
            alertHideEvent.relatedTarget = btn;
            dispatchEvent(el, alertHideEvent);
            emulateTransitionEndLegacy(el, function() {
              addClass(el, 'show');
              cy.log('transitionend triggered');
            })
          })
  
          btn.click();
          cy.wait(100)
        })
    });
  });

  
  it('Test misc folder - emulateTransitionEnd - default', () => {
    const {
      dispatchEvent, emulateTransitionEnd, OriginalEvent, reflow, querySelector,
      removeClass, addClass, one, focus,
    } = SHORTY;

    cy.wait('@pageload')
      .window().then((win) => {
        const el = querySelector('.alert', win.document);
        const btn = querySelector('.btn-close', el);
        const alertHideEvent = new OriginalEvent('hide-alert', { relatedTarget: null });

        cy.log('begin **emulateTransitionEnd**').then(() => {
          one(el, 'hide-alert', function hideHandler(e) {
            cy.log('hide-alert triggered');
            expect(e.target).to.equal(el);
            expect(e.relatedTarget).to.equal(btn);
          });
  
          one(btn, 'click', function handleBtn(e) {
            cy.log('clicked btn');
            expect(e.target).to.equal(btn);
            removeClass(el, 'show');
            reflow(el);
            alertHideEvent.relatedTarget = btn;
            dispatchEvent(el, alertHideEvent);
            emulateTransitionEnd(el, function() {
              addClass(el, 'show');
              focus(btn);
              console.log('transitionend triggered');
            });
          });
  
          btn.click();
          cy.wait(300);
        });
      });
  });

  
  it('Test misc folder - emulateTransitionEndLegacy - default', () => {
    const {
      dispatchEvent, emulateTransitionEndLegacy,
      OriginalEvent, reflow, querySelector, focus,
      removeClass, addClass, one,
    } = SHORTY;

    cy.wait('@pageload')
      .window().then((win) => {
        const el = querySelector('.alert', win.document);
        const btn = querySelector('.btn-close', el);
        const alertHideEvent = new OriginalEvent('hide-alert', { relatedTarget: null });

        cy.log('begin **emulateTransitionEndLegacy**').then(() => {
          one(el, 'hide-alert', function hideHandler(e) {
            cy.log('hide-alert triggered');
  
            expect(e.target).to.equal(el);
            expect(e.relatedTarget).to.equal(btn);
          });
  
          one(btn, 'click', function handleBtn(e) {
            cy.log('clicked btn');
            expect(e.target).to.equal(btn);
            removeClass(el, 'show');
            reflow(el);
            alertHideEvent.relatedTarget = btn;
            dispatchEvent(el, alertHideEvent);
            emulateTransitionEndLegacy(el, function() {
              focus(btn);
              addClass(el, 'show');
              console.log('transitionend triggered');
            })
          });

          btn.click();
          cy.wait(300);
        });
      });
  });
  
  it('Test misc folder - emulateAnimationEnd - default', () => {
    const {
      emulateAnimationEnd, emulateAnimationEndLegacy, getElementStyle, querySelector, addClass,
    } = SHORTY;
    cy.wait('@pageload')
      .window().then((win) => {
        const el = querySelector('.alert', win.document);

        cy.log('begin **emulateAnimationEnd**').then(() => {
          addClass(el, 'animate-test');
          emulateAnimationEnd(el, () => {
            console.log('animationend fired');
            expect(getElementStyle(el, 'animationName'), 'animationName').to.equal('animate-test');
            expect(getElementStyle(el, 'animationDuration'), 'animationDuration').to.equal('0.3s');
            expect(getElementStyle(el, 'animationDelay'), 'animationDelay').to.equal('0s');
          });

          cy.wait(350);
        });

        cy.log('begin **emulateAnimationEndLegacy**').then(() => {
          addClass(el, 'animate-test');

          emulateAnimationEndLegacy(el, function() {
            console.log('animationend fired');
            expect(getElementStyle(el, 'animationName'), 'animationName').to.equal('animate-test');
            expect(getElementStyle(el, 'animationDuration'), 'animationDuration').to.equal('0.3s');
            expect(getElementStyle(el, 'animationDelay'), 'animationDelay').to.equal('0s');
          });

          cy.wait(350);
        });
      });
  });
  
  it('Test misc folder - emulateAnimationEnd - no duration', () => {
    const {
      emulateAnimationEnd, emulateAnimationEndLegacy, setElementStyle, getElementStyle, querySelector, addClass, 
    } = SHORTY;
    cy.wait('@pageload')
      .window().then((win) => {
        const el = querySelector('.alert', win.document);
        setElementStyle(el, {animationDuration: '0s' });

        cy.log('begin **emulateAnimationEnd**').then(() => {
          addClass(el, 'animate-test');
          emulateAnimationEnd(el, () => {
            console.log('animationend fired');
            expect(getElementStyle(el, 'animationName'), 'animationName').to.equal('animate-test');
            expect(getElementStyle(el, 'animationDuration'), 'animationDuration').to.equal('0s');
            expect(getElementStyle(el, 'animationDelay'), 'animationDelay').to.equal('0s');
          });

          cy.wait(100);
        });

        cy.log('begin **emulateAnimationEndLegacy**').then(() => {
          addClass(el, 'animate-test');

          emulateAnimationEndLegacy(el, function() {
            console.log('animationend fired');
            expect(getElementStyle(el, 'animationName'), 'animationName').to.equal('animate-test');
            expect(getElementStyle(el, 'animationDuration'), 'animationDuration').to.equal('0s');
            expect(getElementStyle(el, 'animationDelay'), 'animationDelay').to.equal('0s');
          });

          cy.wait(100);
        });
      });
  });
  
  it('Test misc folder', () => {
    const {
      ArrayFrom, Float32ArrayFrom, Float64ArrayFrom, distinct, noop,
      ObjectEntries, ObjectAssign, ObjectKeys, ObjectValues,
      createElement, createElementNS, Data, getInstance, normalizeOptions,
      Timer, toLowerCase, toUpperCase,
      querySelector, getElementsByClassName,
    } = SHORTY;
    cy.wait('@pageload')
      .window().then((win) => {
        const el = querySelector('.alert', win.document);
        const table = querySelector('.table', win.document);

        const defaults = { op1: true, op2: true, op3: 5, title: null };
        const jsOps = { op1: false, op2: false, op3: 8, title: 'something' };
        expect(normalizeOptions(el, defaults, {}, 'bs'), 'normalizeOptions(data)').to.deep.equal({op1: false, op2: true, op3: 10, title: null});
        expect(normalizeOptions(el, defaults, jsOps, 'bs'), 'normalizeOptions(js)').to.deep.equal({op1: false, op2: false, op3: 8, title: 'something'});
        expect(noop()).to.be.undefined;

        Timer.set('el', noop, 150);
        Timer.set(el, () => console.log(el.tagName + ' has timer of 150'), 150, 'alert');
        expect(Timer.get('el', 'alert')).to.be.null;
        expect(Timer.get(el, 'alert')).to.not.be.undefined;
        Timer.clear('el', 'alert');
        Timer.clear(el, 'alert');
        expect(Timer.get(el, 'alert')).to.be.null;

        Timer.set(el, () => console.log(el.tagName + ' has timer of 250'), 250);
        expect(Timer.get(el)).to.not.be.null;
        Timer.clear(el);
        expect(Timer.get(el)).to.be.null;

        
        expect([0,1,1,2,3,3].filter(distinct), 'filter(DISTINCT)').to.deep.equal([0,1,2,3]);

        expect(toLowerCase('textSample'), 'toLowerCase(string)').to.equal('textsample');
        expect(toUpperCase('textSample'), 'toUpperCase(string)').to.equal('TEXTSAMPLE');

        expect(ObjectAssign({c: 3}, {a: 1, b: 2}), 'ObjectAssign(object1, object2)').to.deep.equal({a: 1, b: 2, c: 3});
        expect(ObjectEntries({a: 1, b: 2}), 'ObjectEntries(object)').to.deep.equal([['a', 1], ['b', 2]]);
        expect(ObjectKeys({a: 1, b: 2}), 'ObjectKeys(object)').to.deep.equal(['a', 'b']);
        expect(ObjectValues({a: 1, b: 2}), 'ObjectValues(object)').to.deep.equal([1, 2]);

        expect(Float32ArrayFrom([0,1,2,3]), 'Float32ArrayFrom(array)').to.be.instanceOf(Float32Array);
        expect(Float64ArrayFrom([0,1,2,3]), 'Float64ArrayFrom(array)').to.be.instanceOf(Float64Array);
        expect(Float64ArrayFrom([0,1,2,3]).length, 'Float64ArrayFrom(array)').to.eq(4);

        expect(ArrayFrom(new Float32Array([0,1,2,3])), 'ArrayFrom(Float32Array)').to.be.instanceOf(Array);
        expect(ArrayFrom(new Float64Array([0,1,2,3])), 'Array(Float64Array)').to.be.instanceOf(Array);
        expect(ArrayFrom(getElementsByClassName('table', win.document)), 'ArrayFrom(HTMLCollection)').to.deep.equal([table]);
        
        expect(createElement(), 'createElement()').to.be.null;
        expect(createElement('input'), 'createElement(string)').to.be.instanceOf(HTMLInputElement);
        expect(createElement({tagName: 'p', className: 'lead', innerText: 'This is a newly created paragraph.'}), 'createElement(object)').to.be.instanceOf(HTMLParagraphElement);

        expect(createElementNS(), 'createElementNS()').to.be.null;
        expect(createElementNS('http://www.w3.org/2000/svg', 'svg'), 'createElementNS(ns, string)').to.be.instanceOf(SVGElement);
        expect(createElementNS('http://www.w3.org/1999/xhtml', {tagName: 'button', className: 'btn', innerText: 'New Item'}), 'createElementNS(ns, object)').to.be.instanceOf(HTMLButtonElement);
        expect(createElementNS('http://www.w3.org/2000/svg', {tagName: 'path', className: 'icon', d: 'M98,158l157,156L411,158l27,27L255,368L71,185L98,158z'}), 'createElementNS(ns, object)').to.be.instanceOf(SVGPathElement);

        Data.set(el);
        expect(Data.get(el), 'not enough params - Data.get(node)').to.be.null;

        Data.set('str', 'strKey', 'data');
        expect(Data.get('str', 'strKey'), 'not HTMLElement - Data.get(string, string, string)').to.be.null;

        Data.set(el, 'Alert', { element: el });
        expect(Data.get(el, 'Alert'), 'Data.get(node, key)').to.deep.equal({ element: el });
        expect(getInstance(el, 'Alert'), 'getInstance(node, key)').to.deep.equal({ element: el });
        expect(Data.getAllFor('Alert').size, 'Data.getAllFor(string).size').to.equal(1);

        Data.remove(el, 'Alert');
        expect(Data.get(el, 'Alert'), 'removed - Data.get(node, string)').to.be.null;
        expect(getInstance(el, 'Alert'), 'removed - getInstance(node, string)').to.be.null;
        expect(Data.getAllFor('Alert'), 'removed - Data.getAllFor(string)').to.be.null;
        Data.remove(el, 'Alert');
    });
  });

  
  it('Test selectors folder', () => {
    const {
      closest, getCustomElements, getElementById, getElementsByClassName, getElementsByTagName,
      matches, matchesLegacy, querySelector, querySelectorAll,
    } = SHORTY;
    cy.wait('@pageload')
      .window().then((win) => {
        const [el] = querySelectorAll('.alert', win.document);
        const CE = new CustomElem();
        win.document.body.append(CE);

        expect(querySelector(), 'querySelector()').to.be.null;
        expect(querySelector(el), 'querySelector(node)').to.equal(el);
        expect(querySelector('.alert'), 'querySelector(selector)').to.be.null;
        expect(querySelector('.alert', win.document), 'querySelector(selector, parent)').to.eq(el);

        expect(closest(el), 'closest()').to.be.null;
        expect(closest(el, 'wombat'), 'closest(invalid)').to.be.null;
        expect(closest(el, 'body'), 'closest(body)').to.eq(win.document.body);

        expect(getCustomElements(), 'getCustomElements()').to.deep.equal([]);
        expect(getCustomElements(win.document), 'getCustomElements(expected)').to.deep.equal([CE]);

        expect(getElementById(), 'getElementById()').to.be.null;
        expect(getElementById('alertDemo'), 'getElementById(id)').to.be.null;
        expect(getElementById('alertDemo', win.document), 'getElementById(id, parent)').to.be.instanceOf(win.HTMLDivElement);
        
        expect(getElementsByClassName(), 'getElementsByClassName()').to.be.instanceOf(HTMLCollection);
        expect(getElementsByClassName('alert'), 'getElementsByClassName(selector)').to.be.instanceOf(HTMLCollection);
        expect(getElementsByClassName('alert', win.document), 'getElementsByClassName(selector, parent)').to.be.instanceOf(win.HTMLCollection);

        expect(getElementsByTagName(), 'getElementsByTagName()').to.be.instanceOf(HTMLCollection);
        expect(getElementsByTagName('div'), 'getElementsByTagName(selector)').to.be.instanceOf(HTMLCollection);
        expect(getElementsByTagName('div', win.document), 'getElementsByTagName(selector, parent)').to.be.instanceOf(win.HTMLCollection);

        expect([...getElementsByClassName('alert', win.document)].filter(x => matches(x, 'div')), 'matches(node, selector)').to.deep.equal([el]);
        expect([...getElementsByTagName('div', win.document)].filter(x => matchesLegacy(x, '.alert')), 'matchesLegacy(node, selector)').to.deep.equal([el]);
    });
  });
});
