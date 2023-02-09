function binarySearch(list, target) {
    // if (list.length === 0) return -1;
    let start = 0;
    let end = list.length -1
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (target === list[mid]) return mid;
        else if (target > list[mid]) start = mid + 1;
        else end = mid - 1
    }
    return -1
}

const list = [-5, 2, 4, 6, 10];

console.log(binarySearch(list, 10)); // 4 
console.log(binarySearch(list, 6)); // 3
console.log(binarySearch(list, 20)); // -1

// BIG-O = O(logn)