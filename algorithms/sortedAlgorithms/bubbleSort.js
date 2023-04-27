function bubbleSort(list) {
    let swapped;
    do {
        swapped = false
        for (let i = 1; i < list.length; i++) {
            if (list[i] < list[i - 1]) {
                [list[i], list[i - 1]] = [list[i - 1], list[i]];
                swapped = true;
            }
        }
    } while (swapped);
}

let array = [-6, 20, 8, -2, 4];
bubbleSort(array);
console.log(array);

// BIG-O = O(n^2);