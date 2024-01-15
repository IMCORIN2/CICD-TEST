const factorial = require('../src/index');

describe('factorial function', () => {
  it('should return 1 for 0', () => {
    expect(factorial(0)).toBe(1);
  });

  it('should calculate the factorial of a positive integer', () => {
    expect(factorial(3)).toBe(6);
    expect(factorial(5)).toBe(120);
  });

  it('should throw an error for negative integers', () => {
    expect(() => factorial(-1)).toThrow('Facorial is only defined for non-negative integers!');
  });
});
