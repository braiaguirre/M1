
function nFibonacci(n) {
    //return (n < 2) ? n : nFibonacci(n - 2) + nFibonacci(n - 1);
    if (n < 2) {
      return n;
    } else {
      return nFibonacci(n - 2) + nFibonacci(n - 1);
    }
  }

  const fib = nFibonacci(2);
  console.log(fib);