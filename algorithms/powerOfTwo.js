// solution 1
function ispowerOfTwo(n) {
    if (n < 1) return false;
    while (n > 1) {
        if (n % 2 !== 0) return false;
        n = n / 2;
    }
    return true;
}

console.log(ispowerOfTwo(1)); // true
console.log(ispowerOfTwo(2)); // true
console.log(ispowerOfTwo(5)); // false
// BIG-O = O(logn)

console.log("======================");

// solution 2
function ispowerOfTwoBitWise(n) {
    if (n < 1) return false;
    return (n & (n - 1)) === 0;
}

console.log(ispowerOfTwoBitWise(1)); // true
console.log(ispowerOfTwoBitWise(2)); // true
console.log(ispowerOfTwoBitWise(5)); // false
// BIG-O = O(1)