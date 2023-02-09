function linearSearch(list, target) {
    for (const i in list) {
        if (list[i] === target) return i;
    }
    return -1
}

const list = [-5, 2, 10, 4, 6];

console.log(linearSearch(list, 10)); // 2 
console.log(linearSearch(list, 6)); // 4
console.log(linearSearch(list, 20)); // -1

// BIG-O = O(n);