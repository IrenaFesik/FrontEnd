/*function sumTo(n) {
     var sum = 0;
     for (var i = 1; i <= n; i++) {
         sum += i;
 }
     return sum;
 }
 alert(sumTo(3));
 alert(sumTo(4));*/


/*function sumTo(n) {
     return n * (n + 1) / 2;
 }

 alert(sumTo(3));
 alert(sumTo(4));*/


function sumTo(n) {
    if (n == 1) return 1;
    return n + sumTo(n - 1);
}

alert(sumTo(3));
alert(sumTo(4));




function factorial(n) {
    if (n == 1) return 1;
    return n * factorial(n - 1);
}
alert (factorial(5)); // этот код работает, но он не валидный?


/*function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

alert(factorial(5));*/
