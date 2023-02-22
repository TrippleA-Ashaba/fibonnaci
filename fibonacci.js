// Albert Ashaba Aheebwa - Namala Pamela

export default function fibonacci(n) {
  if (n < 1 || n % 1 !== 0) {
    return 'n must be a positive integer';
  } else if (n === 1 || n === 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
