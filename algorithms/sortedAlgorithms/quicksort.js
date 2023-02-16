function quicksort(list) {
    if (list.length <= 1) return list
    // choose the pivot
    const pivot = list[list.length - 1];
    let left = [];
    let right = [];
    for (let i = 0; i < list.length - 1; i++) {
        if (list[i] < pivot) left.push(list[i]);
        else right.push(list[i]);
    }
    return quicksort(left).concat(pivot, quicksort(right));
}

const array = [-6, 20, 8, -2, 4];
console.log(quicksort(array)); // [-6, -2, 4, 8, 20]