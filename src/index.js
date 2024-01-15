function factorial(n) {
  if (n < 0) {
    throw new Error('Facorial is only defined for non-nagative integers!');
  }

  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(3));

module.exports = factorial;
