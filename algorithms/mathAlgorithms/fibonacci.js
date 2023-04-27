function fibonacciSequence1(n) {
    let fibonacci = [0, 1];
    if (n > 2) {
        for (let i = 0; i < n-2; i++) {
            let newNumber = fibonacci[i] + fibonacci[i + 1];
            fibonacci.push(newNumber);
        }
    }
    return fibonacci
}



// BIG-O = O(n)
function fibonacciSequence2(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib
}

console.log(fibonacciSequence2(2));
console.log(fibonacciSequence2(3));
console.log(fibonacciSequence2(7));