function primeNumber(n) {
    if (n < 2) return false
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false
    }
    return true
}

console.log(primeNumber(1)) // flase
console.log(primeNumber(5)) // true
console.log(primeNumber(4)) // flase

// BIG - O = O(n)

console.log("=============================")

function primeNumber2(n) {
    if (n < 2) return false
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false
    }
    return true
}

console.log(primeNumber2(1)) // flase
console.log(Math.sqrt(4)) // true
console.log(primeNumber2(4)) // flase
