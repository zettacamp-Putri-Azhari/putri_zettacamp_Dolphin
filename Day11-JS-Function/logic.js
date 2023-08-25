/**
 *
 * Write a Node.js function isPrime(n) that takes an integer n as an argument and returns true if n is a prime number and false otherwise.
 *
 */
function isPrime(n) {
  let pembagi = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      pembagi++;
    }
  }
  if (pembagi == 2) {
    return true;
  } else {
    return false;
  }
}

console.log(isPrime(10));
console.log(isPrime(43));
