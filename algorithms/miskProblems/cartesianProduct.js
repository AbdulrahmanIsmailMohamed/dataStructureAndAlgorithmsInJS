function cartesianProduct(arr1, arr2) {
    const cartesian = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            cartesian.push([arr1[i], arr2[j]])
        }
    }
    return cartesian
}

const arr1 = [1, 2];
const arr2 = [3, 4];

console.log(cartesianProduct(arr1, arr2)); // [ [ 1, 3 ], [ 1, 4 ], [ 2, 3 ], [ 2, 4 ] ];

// BIG-O = O(MN) 