// Albert Ashaba Aheebwa - Namala Pamela

export default function fibonacci(n) {
  if (n < 1) {
    return 'n cannot be 0 or less than 0';
  } else if (n === 1 || n === 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
