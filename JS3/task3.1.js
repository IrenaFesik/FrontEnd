function fib(n) {
    return n <= 1 ? n : fib(n-1) + fib(n-2);
}
alert (fib(3));
alert (fib(7));
console.log(fib(3));
console.log(fib(7));
/*alert (fib(77));
console.log(fib(77));*/  // виснет браузер