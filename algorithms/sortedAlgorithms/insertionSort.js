function insertionSort(list) {
    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j <= i; j++) {
            if (list[i] < list[j]) {
                [list[j], list[i]] = [list[i], list[j]];
            }
        }
    }
    return list
}

const array = [-6, 20, 8, -2, 4];
insertionSort(array);
console.log(array); // [ -6, -2, 4, 8, 20 ]

// BIG-O = O(n^2)