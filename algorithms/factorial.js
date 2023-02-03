function factorial(n) {
    let result = 1;
    for (let i = n; i > 0; i--) {
        result *= i;
    }
    return result;
}

console.log(factorial(0)) // 1
console.log(factorial(4)) // 24
console.log(factorial(5)) // 120

// BIG-O = O(n) 