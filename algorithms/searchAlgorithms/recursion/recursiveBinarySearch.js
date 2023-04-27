function recursiveBinarySearch(list, target) {
    return search(list, target, 0, list.length - 1);
}
function search(list, target, leftIndex, rightIndex) {
    if (leftIndex > rightIndex) return -1;
    let mid = Math.floor((leftIndex + rightIndex) / 2);
    if (target === list[mid]) return mid;
    else if (target > list[mid]) return search(list, target, mid + 1, rightIndex);
    else return search(list, target, leftIndex, mid - 1);
}

const list = [-5, 2, 4, 6, 10];

console.log(recursiveBinarySearch(list, 10)); // 4 
console.log(recursiveBinarySearch(list, 6)); // 3
console.log(recursiveBinarySearch(list, 20)); // -1

// BIG-O = O(logn)