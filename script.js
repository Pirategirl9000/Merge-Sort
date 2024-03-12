let array = [-8, 6, 0, 9, -4, 16];

function merge(array, p, q, r) {
    let k = 0;
    let i = 0;
    let j = 0;
    let lowerHalf = [];
    let upperHalf = [];

    for (let n = 0; n < q; n++) {
        lowerHalf[n] = array[n];
    }

    for (let n = q + 1; n < r; n++) {
        upperHalf[n] = array[n];
    }

    console.log(lowerHalf);
    console.log(upperHalf);
}

function mergeSort(array, p, r) {
    if (r > p) {
        let q = Math.floor((p+r)/2)
        mergeSort(array, p, q);
        mergeSort(array, q + 1, r);
        merge(array, p, q, r);
    }
}

mergeSort(array, 0, array.length - 1);

console.log(array);