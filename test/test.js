import { assert } from 'chai';
import fibonacci from '../fibonnaci.js';

describe.skip('Testing the fibonacci Function', () => {
  it('Failing test of fibonacci', () => {
    assert.equal(fibonacci(4), 6);
  });
});
describe('Testing the fibonacci Function', () => {
  it('Minimum passing requirement', () => {
    assert.equal(fibonacci(4), 4);
  });
});
