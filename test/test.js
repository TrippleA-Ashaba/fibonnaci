import { assert } from 'chai';
import fibonacci from '../fibonacci.js';

describe.skip('Testing the fibonacci Function', () => {
  it('Failing test of fibonacci', () => {
    assert.equal(fibonacci(4), 6);
  });
});

describe.skip('Testing the fibonacci Function', () => {
  it('Minimum passing requirement', () => {
    assert.equal(fibonacci(4), 4);
  });
});

describe('Testing for the 1st fibonacci', () => {
  it('Returning 1 as the first fibonacci', () => {
    assert.equal(fibonacci(1), 1);
  });
});

describe('Testing for the 2nd fibonacci', () => {
  it('Returning 1 as the second fibonacci', () => {
    assert.equal(fibonacci(2), 1);
  });
});

describe('Testing for the 3rd fibonacci', () => {
  it('Returning 2 as the third fibonacci', () => {
    assert.equal(fibonacci(3), 2);
  });
});

describe('Testing for the 5th fibonacci', () => {
  it('Returning 5 as the fifth fibonacci', () => {
    assert.equal(fibonacci(5), 5);
  });
});

describe('Testing for the 10th fibonacci', () => {
  it('Returning 55 as the tenth fibonacci', () => {
    assert.equal(fibonacci(10), 55);
  });
});

describe('Testing for handling negative values', () => {
  it('Returning error message for negative numbers', () => {
    assert.equal(fibonacci(-3), 'n must be a positive integer');
  });
});

describe('Testing for handling fractional values', () => {
  it('Returning error message for negative numbers', () => {
    assert.equal(fibonacci(7.4), 'n must be a positive integer');
  });
});
