import { expect, it, describe } from 'vitest';
import * as SHORTY from '../src/index';

describe('Shorty Library Tests - BOOL', () => {
  it('Test boolean folder', () => {
    const {
      // these are impossible to test 100% of the branches
      isApple,
      isMobile,
      isFirefox,
      // support3DTransform,
      // supportAnimation,
      // supportPassive,
      // supportTouch,
      // supportTransform,
      // supportTransition,
      // querySelectorAll, getWindow
    } = SHORTY;

    expect(isApple(), 'isApple').to.be.false;
    expect(isMobile(), 'isMobile').to.be.false;
    expect(isFirefox(), 'isFirefox').to.be.false;
    // expect(support3DTransform, 'support3DTransform').to.be.true;
    // expect(supportAnimation, 'supportAnimation').to.be.true;
    // expect(supportPassive, 'supportPassive').to.be.true;
    // expect(supportTouch, 'supportTouch').to.be.false;
    // expect(supportTransform, 'supportTransform').to.be.true;
    // expect(supportTransition, 'supportTransition').to.be.true;
  });
});
