// function fibonacciSequence(n) {
//     let fibonacci = [0, 1];
//     if (n > 2) {
//         for (let i = 0; i < n-2; i++) {
//             let newNumber = fibonacci[i] + fibonacci[i + 1];
//             fibonacci.push(newNumber);
//         }
//     }
//     return fibonacci
// }

function fibonacciSequence(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib
}

console.log(fibonacciSequence(2));
console.log(fibonacciSequence(3));
console.log(fibonacciSequence(7));

// BIG-O = O(n)